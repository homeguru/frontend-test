import styled from "styled-components";


export const ProdutoCSS = styled.div `



.prods {
	float: left;
	width: 25%;
	font-size: 20px;
	border: 1px #dbdbdb solid;
	color: #333333;
	text-align: center;
	position: relative;
	min-height: 500px;
}

.prods a:visited{
  color: #333333;
}
.prods section {
	padding: 15px 10px;
	float: left;
	width: 100%;
	min-height: 245px;
}

.prods section a{
    color: #333333;
    text-decoration: none;
}

.prods section img {
	max-height: 300px;
	opacity: 1.0;
	-webkit-transition: all 500ms ease-in-out;
	-moz-transition: all 100ms ease-in-out;
	-ms-transition: all 100ms ease-in-out;
	-o-transition: all 100ms ease-in-out;
	transition: all 100ms ease-in-out;

}

.prods section:hover img {
	opacity: 0.8;
	-webkit-transition: all 100ms ease-in-out;
	-moz-transition: all 100ms ease-in-out;
	-ms-transition: all 100ms ease-in-out;
	-o-transition: all 100ms ease-in-out;
	transition: all 100ms ease-in-out;
}

.prods:hover {
	text-decoration: none;
	border: 1px #cecece solid;
}

.imgprod {
	padding: 5px;
	width: 40%;
  margin:5px auto
}

.descprod {
	float: left;
	width: 100%;
	padding: 10px;
	text-align: center;
}

.descprod h3 {
	font-size: 14px;
	overflow: hidden;
	width: 100%;
	color: #333;
  font-weight: 800;
}

@media only screen and  (max-width: 1366px) {

	.buttons a {
		font-size: 12px;
	}

}


@media only screen and  (max-width: 1024px) {

}


@media only screen and  (max-width: 801px) {
  .prods{ 
    width:100%;
  }

}

@media only screen and  (max-width: 480px) {

}

`;

export const HeaderCSS = styled.div `
 
   position:fixed; 
   left:0; 
   top:0;
   z-index:20; 
   width:100%; 
   background:#f7f7f7;
   box-shadow:0 0 5px #9f9d9d; 
   height:50px;
 
    .pc{ 
      display:block
    }
    .mb{ 
      display:none
    }

#logo{ 
  float:left; 
  width:10%; 
  margin:5px 0 0 0
}

#logolog {
	float: left;
  width: 5%;
  text-align: center;
  padding: 5px 0px;
  margin-left: 50px;
}

.infos {
	float: right;
	width: 80%;
	height:50px;
	padding:0.3% 2%;
  border-bottom: 1px #ddd solid;
  position: relative;
  z-index: 3
}

.inf {
	float: right;
	width:10%;
	padding: 0 1%;
	font-size: 13px;
	border-right: 1px #cecece solid;
	text-align:left;
	color: #515152;
}
.inf  a{
	font-weight: 600;
	color:#333;	
	}
.inf strong {
	float: left;
	width: 100%;
}

.inf img {
	width: 20px;
	position:absolute;
	top:0;
	left:0;
}

.inf div {
	float: left;
	position: relative;
	padding:0 0 0 20%;
	width:100%;

}


/*===============perfil========*/


#perfil{
	cursor: pointer;
	z-index:0
}
.perfil{
	 width:150%;
	 border-radius: 5px;
	 padding:1% 1% 5% 1%;
	 position:absolute;
	 top:160%;
	 left:-50%;
	 background:#fff;
	 display:none;
	 box-shadow: 1px 1px 3px #7a7b7b;
}

.perfil ul{
  padding: 2% 10%;
}
.perfil ul li{
 display: inline-block;
}
.perfil li{
	float:left;
	padding:4% 0;
	width:100%;		
}
.perfil a{
	color: #525354;
	font-weight: normal;
}

.perfil a img{
	  float: left !important;
    margin-right: 5px !important;
    opacity: 0.7 !important;
    padding: 0 2px !important;
    position: relative;	
}
.perfil::after {
    border-bottom: 15px solid #fff;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    content: "";
    position: absolute;
    right: 35px;
    top: 0;
    transform: translateY(-100%);
    z-index: 1;

}

#fundomenu, #fundomenu2 {
	background-color: rgba(0, 0, 0, 0.7);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: none;
	z-index:10
}


/*================MENU=================*/

#menu-logado{ width:90%; float:right; position:relative; border-top: 1px solid #fff; padding:0.7% 0 0 0; z-index:1}


#menu-mobile{
  display: none
}


@media only screen and (max-width: 1680px) {

  ul.dropdown li a { 
    padding:10px 75px; 
   }

}

@media only screen and (max-width: 1440px) {

  ul.dropdown li a { 
    padding:10px 50px; 
  }

}

@media only screen and (max-width: 1366px) {
    .inf{
      width: 20%;
      padding: 0 3%;	
    }
    .carh, .favor{
      width: 6%;
    }
    
    #logolog{
      width: 7%;
    }

}

@media only screen and (max-width: 1280px) {

  ul.dropdown li a { 
    padding:10px 45px; 
  }

}


  @media only screen and (max-width: 1024px) {

        ul.dropdown li a { 
          padding:10px 25px;
          border: none 
      }

        #logo {
            margin: 10px 5px;
        }

        .inf {
          width: 40%;
      }

        .carh, .favor {
            width: 8%;
        }

        .marca {
            top: -20%;
            width: 20%;
        }

        

        
    }

@media only screen and (max-width: 801px) {


  .inf {
    width: 40%;
}

    #logolog {
        width: 16%;
    }

    .infos{
      width: 60%;
      padding:1%;
    }

    #menu-logado{
      display:none;
      position: fixed;
      top: 100px;
      width: 250px;
      left:0;
      background:#333;
      padding: 1%; 
    }
    
}

@media only screen and (max-width: 480px) {

  height:50px;

  
    .pc{ 
        display:none
      }
      .mb{ 
        display:block
      }

      #logolog {
        width: 18%;
        padding: 10px 0;
    }
      
    .inf {
      width: 50%;
      font-size: 14px;
      padding:0
    }
        
}

`;

export const LoadingCSS = styled.div`
  display: none;
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  min-height: 1000px;
  z-index: 100;
  top: -100px;

  img {
    margin: 0 auto;
    display: table;
    top: 25%;
    max-width:25%;
    position: relative;
  }
  .cortina{ 
        opacity:1;
        z-index:151;
        width: 100%;		
        height: 100%;
        position: relative;
  }

  .carrega{
	  width: 40%;
	  top: 45%;
	  left: 30%;
	  position: fixed;
	  animation-name: load;
        animation-duration:2s;
        animation-timing-function:linear;
        animation-iteration-count: 50;
  }


  @keyframes load {
      0% {opacity :0;}			
      100% {opacity : 1;}
  }
          
  @-webkit-keyframes load {
      0% {opacity :0;}			
      100% {opacity : 1;}	
  }
  @media only screen and (max-width: 1368px) {
    img {
      margin: 0 auto;
      display: table;
      top: 30%;
      position: relative;
    }
  }
  @media only screen and (max-width: 800px) {
    img {
      margin: 0 auto;
      display: table;
      top: 20%;
      position: relative;
    }
  }
  @media only screen and (max-width: 480px) {
      img {
        top:25%;
        max-width:80%;
      }
  }
`;


export const FooterCSS = styled.div`

footer{
		width: 100%;
		position: relative;
		float:left;
		color: #333;
    text-align: center;
    border-top: 1px #ddd solid;
    margin: 2% 0 0 0;
    background: #f7f7f7;
	}


	.foot{
		width: 33.33%;
		padding:2% 3%;
		font-size: 14px;
		float:left;
	}

	.foot img{
		width:30px;
	}

	.foot a{
		padding:0 5px;
	  color: #333
	}

	.foot strong{
		font-size: 18px;
		font-weight: 900;
		padding: 0 20px;
	}




@media only screen and  (max-width: 1366px){

	footer{
		padding: 4% 2%;
	}

	.foot strong{
		font-size: 15px;
		width: 30%;
	}


}



@media only screen and  (max-width: 1025px){

	


}


@media only screen and  (max-width: 800px){

	.foot{
		width: 100%;
	}


}


@media only screen and  (max-width: 480px){
	
	
	
	.foot {
		width: 100%;
		text-align: center;
		padding: 3% 0
	}

	.foot a{
		float:none; 
	}

	


}
`;
