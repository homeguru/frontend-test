import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';

import api from '../../services/api'

import { FaTimes, FaSpinner } from 'react-icons/fa'

import { Container, ContentCards, Card, ContentModal, Modal, RowBetween, Row } from './styles'

import cmarvel from '../../assets/cmarvel.png';

const Image = lazy(()=> import('../../components/Image'))

interface propsCriadores{ 
  name: any; 
}

const MainPage: React.FC = () => {
  const ts = '1610554394'
  const apiKey = '9bccdce533f0524bbf795a7bbbe9a124'
  const hashMd5 = '992012ac3bbf475f00135fa00d1f6541'

  const infinitScrollRef = useRef<HTMLDivElement>(null)
  const [ loadedAllComics, setLoadedAllComics ] = useState(false)
  const [ loading, setLoadinng ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)
  const [ comicsCaptainMarvel, setComicsCaptainMarvel ] = useState<Array<any>>([])
  const [ idsCharacters, setIdsCharacters ] = useState<Array<string>>([])
  const [ currentIdCharacters, setCurrentIdCharactes ] = useState<number>(0)
  const [ totalCarregados, setTotalCarregados ] = useState<number>(0)
  const [ totalComics, setTotalComics ] = useState<number>(0)
  const [ scroolRadio, setScroolRadio ] = useState<number>(0)
  const [ infoComic, setInfoComic ] = useState<any>({
  })
 
  useEffect(()=>{
    const loadCharacters = () => {
        return api.get(`v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hashMd5}&nameStartsWith=Captain%20Marvel`)
        .then( res => {
          let arrResponse = [...res.data.data.results]
          let arr:Array<string> = []
          arrResponse.map(item => {return arr.push(item.id)})
          setIdsCharacters(arr) 
        })
    }
    loadCharacters()
  },[])

  useEffect(()=>{
    if(idsCharacters.length === 0){return}
    loadComics()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[idsCharacters])

  useEffect(()=>{
    if(currentIdCharacters === 0){return}
    loadComics()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentIdCharacters])

  const intersectionObserver = new IntersectionObserver( (entries) => {
    const radio = entries[0].intersectionRatio
    setScroolRadio(radio)
  })

  useEffect(()=>{
    intersectionObserver.observe(infinitScrollRef.current!)
    return () => {
      intersectionObserver.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(()=>{
     if(scroolRadio > 0 && comicsCaptainMarvel.length !== 0) {
      if( totalCarregados >= totalComics){return()=>{
        updateCurrentIdCharacters()
      }}
      loadComics()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[scroolRadio])

  
  async function loadComics(){
    if(loadedAllComics){return}
    setLoadinng(true)
    let id =  idsCharacters[currentIdCharacters]
    api.get(`v1/public/characters/${id}/comics?orderBy=onsaleDate&limit=24&offset=${totalCarregados}&ts=${ts}&apikey=${apiKey}&hash=${hashMd5}`)
    .then(i =>{
      setTotalComics(i.data.data.total)
      if (totalCarregados === 0) {
        setTotalCarregados(totalCarregados + 12)
        setComicsCaptainMarvel([...i.data.data.results])
        setLoadinng(false)
      }
      setComicsCaptainMarvel([...comicsCaptainMarvel, ...i.data.data.results])
      setTotalCarregados(totalCarregados + 12)
      setLoadinng(false)
    })
  }

  async function updateCurrentIdCharacters () {
    const newCurrentIdCharacters = await currentIdCharacters + 1
    if(newCurrentIdCharacters <= idsCharacters.length) {
      setCurrentIdCharactes(newCurrentIdCharacters)
    }else{
      setLoadedAllComics(true)
    }
  }

  function handleModal(){
    setShowModal(!showModal)
  }

  function viewInfoComics(comic: any){
    setInfoComic(comic)
    handleModal()
  }
 
  return (
    <Container>
      { showModal && (
        <ContentModal>
          <Modal>
            <RowBetween>
              <h1> <b>Titulo:</b>  {infoComic.title}</h1>
              <button onClick={handleModal}>
                <FaTimes className="icon"/>
              </button>
            </RowBetween>
            <hr/>
            <RowBetween>
              <img src={`${infoComic.thumbnail.path}.${infoComic.thumbnail.extension}`} alt=""/>
              <div className="flex1">
                <h2><b>Descrição:</b></h2> 
                <p className="description">
                  {infoComic.description}
                </p>
                <hr/>
                <h2><b>Serie:</b></h2> 
                <p className="desciption">
                  {infoComic.series.name}
                </p>
                <hr/>
                <h2><b>Link:</b></h2> 
                <Row>
                  <a href={infoComic.urls[0].url}>Ver no site da Marvel</a>
                </Row>
              </div>
            </RowBetween>
            <hr/>
            <h2><b>Criadores:</b></h2> 
            <Row>
              {infoComic.creators.items.map((item:propsCriadores) => (
                <p className="box-text" key={item.name}>{item.name}</p>
                ))}
            </Row>
            <hr/>
            <h2><b>Personagens desta edição:</b></h2> 
            <Row>
              {infoComic.characters.items.map((item:propsCriadores) => (
                <p className="box-text" key={item.name}>{item.name}</p>
                ))}
            </Row>
            <hr/>
            <h2><b>Histórias:</b></h2> 
            <Row>
              {infoComic.stories.items.map((item:propsCriadores) => (
                <p className="box-text" key={item.name}>{item.name}</p>
                ))}
            </Row>
            <hr/>
          </Modal>
        </ContentModal>
      )}
      <img src={cmarvel} alt="cmarvel" className="logo-cmarvel"/>
      <ContentCards>
        {comicsCaptainMarvel.map((comic, index) => {
          return (
            <Card key={index} onClick={()=>{viewInfoComics(comic)}}>
              <div className="title"> 
                <p>{comic.title}</p> 
              </div>
              <Suspense fallback={<FaSpinner className="spinner"/>}>
                <Image url={comic.thumbnail.path} /> 
              </Suspense>
              <div className="date">
                <p>Lançamento:&nbsp;  
                  {
                  comic.dates[0].date.substr(0,10).split("-")[2]+'/'+
                  comic.dates[0].date.substr(0,10).split("-")[1]+'/'+
                  comic.dates[0].date.substr(0,10).split("-")[0]
                  }</p>
              </div>
            </Card>
          )
        })}
        <div ref={infinitScrollRef}></div>
      </ContentCards>
      {loading && <p className="loadinng">Carregando mais cards...</p>}
    </Container>
  );
}

export default MainPage;
