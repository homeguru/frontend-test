import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import LazyLoad from 'react-lazyload';

import { ProdutoCSS } from "./styles";

export class Produtos extends Component {
  state = {
    msg: ""
  }
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    
  }

  async componentWillReceiveProps() {
   
  }


  render() {

    return (
      <ProdutoCSS>

        <div className="prods">

          <section>
            <a href={"/Produto/"+this.props.id}>
              <div className="descprod">
                <h3>{this.props.produto}</h3>
              </div>
              <LazyLoad >
                <img src={this.props.img} title={this.props.produto} className="imgprod" />
              </LazyLoad>
              <div className="descprod">
                <h3>Data de Lançamento: {this.props.data}</h3>
              </div>
              
            </a>
          </section>
        </div>
      </ProdutoCSS>

    );
  }
}

export default withRouter(Produtos);