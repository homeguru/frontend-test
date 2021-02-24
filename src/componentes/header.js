import React, { Component } from "react";

import Usuario from "../assets/imagem/icon-man.png";

import { HeaderCSS } from "./styles";
import { MudaVisibilidade, CarregaCarrinho, toMilhar } from "../services/funcoes";

export class Header extends Component {
  state = {
    saldo: 0,
    nome: ""
  }
  async componentDidMount() {
    

  }


  render() {
    return (
      <HeaderCSS>
        <div id="logolog">
          <a href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/MarvelLogo.svg" className="img" title="" />
          </a>
        </div>

        <div className="infos">

          <div className="inf">
            <div id="perfil" onClick={() => MudaVisibilidade("MeuPerfil")}>
                <img src={Usuario} title="Omnion" />
               Olá, Teste!
            <br />
              <strong>
                Meu perfil
            </strong>
              <section className="perfil" id="MeuPerfil">
                <ul>  
                  <li><a href="/">Home</a></li>                  
                </ul>
              </section>
            </div>
          </div>

        </div>
      </HeaderCSS>
    )
  }
}


export default Header;
