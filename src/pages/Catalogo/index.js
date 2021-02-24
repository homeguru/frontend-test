import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import smile from "../../assets/imagem/smile.png";

import { Container, CatalogoCss } from "./styles";
import Produtos from "../../componentes/produto.js";
import { GetApi, PostApi } from "../../services/auth.js";

import { DataBR, MudaVisibilidade } from "../../services/funcoes.js";

import { Loading } from "../../componentes/loading";

import { Header } from "../../componentes/header";
import { Footer } from "../../componentes/footer";
import md5 from 'crypto-js/md5';
import InfiniteScroll from "react-infinite-scroll-component";


class Catalogo extends Component {
  state = {
    Hqs:[],
    hash:"",
    CaracterId : 1009261,
    count:0,
    total:0,
    hasMore:true
  };


  async componentDidMount() {
    var ts = new Date().getTime();
    var hash = md5(ts+"dd89acea1b5001d882c7522e81032f2cf9c7d470"+"b8f96b37b9ecbfe1e06aadc99f8a7455");
    var CaracterId = 1009261;
    if(this.props.match.params.id){
      CaracterId = this.props.match.params.id;
    }
    await this.setState({hash:"?ts="+ts+"&apikey=b8f96b37b9ecbfe1e06aadc99f8a7455&hash="+hash, CaracterId});
    await this.CarregaHQs();
  }

  CarregaHQs = async ()=>{
    var RetornoHqs = await GetApi("https://gateway.marvel.com/v1/public/characters/"+this.state.CaracterId+"/comics"+this.state.hash+"&orderBy=onsaleDate&offset="+this.state.count+"&limit=8");
    var Hqs = this.state.Hqs;
    await this.setState({total: RetornoHqs.data.total, count: parseInt(this.state.count+8)})
    if(RetornoHqs.data.total <= this.state.count){
      this.setState({hasMore:false});
    }
    await RetornoHqs.data.results.map(async (hq, i)=>{
      var data = await DataBR(hq.dates.find(date => date.type == "onsaleDate").date, true, false);
      Hqs.push({
        id:hq.id,
        nome:hq.title,
        imagem:hq.thumbnail.path+"/portrait_uncanny."+hq.thumbnail.extension,
        data:data
      })
    })
    this.setState({Hqs});
  }

  pesquisa = async ()=>{
    var findNome = this.state.findNome.split(" ").join("+");
    var RetornoHq = await GetApi("https://gateway.marvel.com/v1/public/characters"+this.state.hash+"&name="+findNome);
    if(RetornoHq.data.results.length>0){
      window.location = "/Catalogo/"+RetornoHq.data.results[0].id;
    }
  }

  render() {

    return (
      <Container>
        <Loading />
        <Header></Header>
        <CatalogoCss>
          
          <div className="full">
            <div id="cortina" style={{ display: "none" }} />
            <div className="filtro">

              <div id="busca">
                <input type="text" placeholder="Pesquise pelo nome do personagem?" value={this.state.findNome} onChange={e => this.setState({findNome:e.target.value})} />
                <input type="button" className="lupa" onClick={() => this.pesquisa()} />


              </div>
              </div>
            
            {(this.state.Hqs.length < 1) ?

              <div id="vazio">
                <img src={smile} className="img" /><br />
                  Nenhum HQ disponível
                </div>

              :

              <div>
              
                <div id="produtos">
                <InfiniteScroll
                        dataLength={this.state.Hqs.length}
                        next={()=>this.CarregaHQs()}
                        hasMore={this.state.hasMore}
                        loader={<div className="carregando"><h3>Carregando...</h3></div>}
                        endMessage={
                          <div className="carregando"><h3><b>Todos os volumes carregados.</b></h3></div>
                        }
                      >
                  {this.state.Hqs.map((prod, i) => {

                    return (
                      <Produtos
                        produto={prod.nome}
                        key={i}
                        chave={i}
                        img={prod.imagem}
                        id={prod.id}
                        data={prod.data}
                      />
                    );
                  })}
                  </InfiniteScroll>
                </div>
                
              </div>}

          </div>
        </CatalogoCss>
        <Footer></Footer>
      </Container>
    );
  }
}
export default withRouter(Catalogo);
