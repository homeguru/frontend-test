import React, { Component } from "react";

import { LoadingCSS } from "./styles";


const dadosProj = JSON.parse(localStorage.getItem("dados_projeto"));
var Logo = "";
if(dadosProj != null){
  Logo = "http://www.plataformaomnion.com.br/imagens/loading/"+dadosProj.IMGLoading+".png";
}

export class Loading extends Component {
  state = {
    valor: 0
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <LoadingCSS style={{height:document.documentElement.scrollHeight}} id="LoadingPage" className="cortina">
       {/*  <div className="carrega"><img src={Logo}  alt="Carregando" /></div> */}

       <div id="load">
            <div className="circle"></div>
        </div>

      </LoadingCSS>
    );
  }
}
