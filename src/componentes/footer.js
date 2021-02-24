import React, { Component } from "react";

import { FooterCSS } from "./styles";

import Face from "../assets/imagem/redes/facebook.png";
import youtube from "../assets/imagem/redes/youtube.png";
import Instagram from "../assets/imagem/redes/instagram.png";

export class Footer extends Component {
    render() {
        return (
            <FooterCSS>

                <footer>

                    <div className="foot">
                        <p>
                            <strong>FALE CONOSCO</strong><br/>
                            <span>
                                    Whatsapp: 
                            </span><br/>
                            <span> contato@marvel.com.br</span>
                        </p>
                    </div>
                    

                    <div className="foot">
                       <p>
                            <strong>Acesse Támbem:</strong><br/>
                            <a href="http://www.marvel.com" target="_blank">www.marvel.com </a>
                       </p> 
                    </div>

                    <div className="foot">
                        <strong>Nos acompanhe nas redes sociais:</strong><br/>                       
                        <a href="https://www.facebook.com/MarvelBR/?brand_redir=6883542487" target="_blank"><img src={Face} className="img" title="Facebook"/></a>
                        <a href="https://www.instagram.com/marvel/" target="_blank"><img src={Instagram} className="img" title="Instagram"/></a>
                        <a href="https://www.youtube.com/marvel" target="_blank"><img src={youtube} className="img" title="Youtube"/></a> 
                    </div> 

                    <div className="clear"></div><br />
                </footer>
            </FooterCSS>
        );
    }
      
}
    
export default Footer;
    