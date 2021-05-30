/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';

import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import { FaRegCalendarAlt } from 'react-icons/fa';

import Image from '../../components/Image';

export interface propsCriadores {
  name: any;
}

const MainPage: React.FC = () => {
  const ts = '1610554394';
  const apiKey = '9bccdce533f0524bbf795a7bbbe9a124';
  const hashMd5 = '992012ac3bbf475f00135fa00d1f6541';
  const history = useHistory();
  const infinitScrollRef = useRef<HTMLDivElement>(null);
  const [loadedAllComics, setLoadedAllComics] = useState(false);
  const [loading, setLoadinng] = useState(false);
  const [comicsCaptainMarvel, setComicsCaptainMarvel] = useState<Array<any>>([]);
  const [idsCharacters, setIdsCharacters] = useState<Array<string>>([]);
  const [currentIdCharacters, setCurrentIdCharactes] = useState<number>(0);
  const [totalCarregados, setTotalCarregados] = useState<number>(0);
  const [totalComics, setTotalComics] = useState<number>(0);
  const [scroolRadio, setScroolRadio] = useState<number>(0);

  const loadComics = () => {
    if (loadedAllComics) { return }
    setLoadinng(true)
    let id = idsCharacters[currentIdCharacters]
    api.get(`v1/public/characters/${id}/comics?orderBy=onsaleDate&limit=24&offset=${totalCarregados}&ts=${ts}&apikey=${apiKey}&hash=${hashMd5}`)
      .then(i => {
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

  const updateCurrentIdCharacters = async () => {
    const newCurrentIdCharacters = await currentIdCharacters + 1
    if (newCurrentIdCharacters <= idsCharacters.length) {
      setCurrentIdCharactes(newCurrentIdCharacters)
    } else {
      setLoadedAllComics(true)
    }
  }

  const viewInfoComics = (comic: any) => {
    history.push(`./details_character/${comic.id}`)
  }

  useEffect(() => {
    const loadCharacters = () => {
      return api.get(`v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hashMd5}&nameStartsWith=Captain%20Marvel`)
        .then(res => {
          let arrResponse = [...res.data.data.results]
          let arr: Array<string> = []
          arrResponse.map(item => { return arr.push(item.id) })
          setIdsCharacters(arr)
        })
    }
    loadCharacters()
  }, [])

  useEffect(() => {
    if (idsCharacters.length === 0) { return }
    loadComics()
  }, [idsCharacters])

  useEffect(() => {
    if (currentIdCharacters === 0) { return }
    loadComics()
  }, [currentIdCharacters])
  const intersectionObserver = new IntersectionObserver((entries) => {
    const radio = entries[0].intersectionRatio
    setScroolRadio(radio)
  })

  useEffect(() => {
    intersectionObserver.observe(infinitScrollRef.current!)
    return () => {
      intersectionObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    if (scroolRadio > 0 && comicsCaptainMarvel.length !== 0) {
      if (totalCarregados >= totalComics) {
        return () => {
          updateCurrentIdCharacters()
        }
      }
      loadComics()
    }
  }, [scroolRadio])

  return (
    <div className="container">
      <div className="header">
        <div>
          <p className="tittle">Teste Homeguru</p>
          <p className="description">Listagen de todas as edições de quadrinhos em que a Capitã Marvel aparece.</p>
        </div>
        <div className="contentImgUser">
          <img alt="imgUser" className="imgUser" src="https://media-exp1.licdn.com/dms/image/C4E03AQGpFcy6EERgmg/profile-displayphoto-shrink_800_800/0/1575130853478?e=1627516800&v=beta&t=9HVaRibyvJD8sfEPAetqGT-878B-GjHl9hKHam0nP2Y" />
          <p>Thiago B. Caldera</p>
          <p className="phone">(68) 9 8108-7475</p>
        </div>
      </div>
      <div className="contentCards">
        {comicsCaptainMarvel.map((comic, index) => (
          <div className="card" key={index} onClick={() => { viewInfoComics(comic) }}>
            <Image url={comic.thumbnail.path} />
            <div className="contenTittle">
              <p className="tittle">{comic.title}</p>
              <div className="row">
                <FaRegCalendarAlt className="iconLaunch" />
                <p className="dateLaunch">Lançamento:&nbsp;
                    {
                    comic.dates[0].date.substr(0, 10).split("-")[2] + '/' +
                    comic.dates[0].date.substr(0, 10).split("-")[1] + '/' +
                    comic.dates[0].date.substr(0, 10).split("-")[0]
                  }
                </p>
              </div>
            </div>
          </div>
        )
        )}
        <div ref={infinitScrollRef}></div>
      </div>
      {loading && <p className="loadinng">Carregando...</p>}
    </div>
  );
}

export default MainPage;
