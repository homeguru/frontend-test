import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Container, ProdutoCSS } from "./styles";
import { DataBR, MudaVisibilidade} from "../../services/funcoes.js";
import { Loading } from "../../componentes/loading";

import { Produtos } from "../../componentes/produto.js";
import { GetApi, PostApi } from "../../services/auth.js";

import { Header } from "../../componentes/header";
import { Footer } from "../../componentes/footer";

import md5 from 'crypto-js/md5';

var x = 3;
let total;

class Produto extends Component {

  state = {
    HQ:{ 
      thumbnail:{},
      series:{},
      collections:[{}],
      characters:{items:[]}
    }
  }
  async componentDidMount() {

    var ts = new Date().getTime();
    var hash = md5(ts+"dd89acea1b5001d882c7522e81032f2cf9c7d470"+"b8f96b37b9ecbfe1e06aadc99f8a7455")
    await this.setState({hash:"?ts="+ts+"&apikey=b8f96b37b9ecbfe1e06aadc99f8a7455&hash="+hash});

    var RetornoHq = await GetApi("http://gateway.marvel.com/v1/public/comics/"+this.props.match.params.id+this.state.hash);

    var HQ = RetornoHq.data.results[0];
    HQ.modified = await DataBR(HQ.modified);
    HQ.dataLancamento = HQ.dates.find(data=>data.type=="onsaleDate") && await DataBR(HQ.dates.find(data=>data.type=="onsaleDate").date);
    HQ.dataLimitada = HQ.dates.find(data=>data.type=="unlimitedDate") && await DataBR(HQ.dates.find(data=>data.type=="unlimitedDate").date);
    HQ.valorFisica = HQ.prices.find(preco=>preco.type=="printPrice") && HQ.prices.find(preco=>preco.type=="printPrice").price;
    HQ.valorDigital = HQ.prices.find(preco=>preco.type=="digitalPurchasePrice") && HQ.prices.find(preco=>preco.type=="digitalPurchasePrice").price;
    this.setState({HQ});
  }



  render() {
    
    return (
      <Container >
        <Loading />
        <Header></Header>
        <ProdutoCSS>

          <div className="full">

            <article id="conteudo">
              <div id="breadcrumb">
                <p>
                  <a href="/">Hqs</a> |
                  <span> {this.state.HQ.title}</span>
                </p>
              </div>

              <section className="detail">

                {<div id="foto">
                  <img className="img" src={this.state.HQ.thumbnail.path+"/portrait_uncanny."+this.state.HQ.thumbnail.extension}/>
                </div>
                }
                <div id="info">
                  <h1>{this.state.HQ.title}
                    <div className="pline"></div>
                  </h1>
                  <h4>Infomações da edição</h4>
                  <p>Serie: {this.state.HQ.series.name}</p>
                  {
                    this.state.HQ.collections[0] &&<p>Coleção: {this.state.HQ.collections[0].name}</p>
                  }
                  
                  <p>Data de lançamento: {this.state.HQ.dataLancamento}</p>
                  <p>Ultima atualização: {this.state.HQ.modified}</p>
                  <p>Data edição limitada: {this.state.HQ.dataLimitada}</p>
                  <br/>
                  <p>Valor Edição fisica: {this.state.HQ.valorFisica}</p>
                  <p>Valor Edição Digital: {this.state.HQ.valorDigital}</p>
                  <br/>
                  <p>Personagens:</p><br/>
                  {
                    this.state.HQ.characters.items.map((item, i)=>{
                      var url = item.resourceURI;
                      var id = url.replace("http://gateway.marvel.com/v1/public/characters/", "")
                      return <p><a href={"/Catalogo/"+id}>{item.name}</a></p>
                    })
                  }
                </div>

              </section>



              <section id="descricao">

                <h2>Descrição do Produto</h2>
                <div dangerouslySetInnerHTML={{ __html: this.state.HQ.description }}></div>

              </section>


            </article>

          </div>

        </ProdutoCSS>
        <Footer></Footer>
      </Container >
    );
  }
}


export default withRouter(Produto);