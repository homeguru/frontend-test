import styled from "styled-components";

import Lupa from "../../assets/imagem/lupa.png";
import Filter from "../../assets/imagem/filter.png";
import Setinha from "../../assets/imagem/seta.png";


export const Container = styled.div`
    float:left; 
    width:100%;
    position: relative; 

`;

export const CatalogoCss = styled.div`


#cortina{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 1100px;
	background: rgba(0,0,0,0.8);
	z-index: 6;
}

#flateral{
	float: left;
	width: 15%;
	min-height: 50px;
	border: 1px #dbdbdb solid;	
}

#flateral div:last-child{
	font-size: 11px;
}

.rangeslider-horizontal {
    height: 7px;
}

.rangeslider-horizontal .rangeslider__handle:after {
    width: 10px;
    height: 10px;
	top: 4px;
    left: 4px;
}

.rangeslider-horizontal .rangeslider__handle {
    width: 20px;
    height: 20px;
	}

.rangeslider-horizontal .rangeslider__fill {
    background-color: #355283;
}

.fmarca, .ftamanho, .fcor, .fvoltagem, .fsub, .fcat, .floja, .fpontos{
	float: left;
	width: 100%;
	padding: 5px 0;
	cursor: pointer;
	position: relative
}

.fmarca span, .ftamanho span, .fcor span, .fvoltagem span, .fsub span, .fcat span, .floja span, .fpontos span{
	float: left;
	width: 100%;
	padding: 10px;
	position: relative;
	border-bottom: 1px #dbdbdb solid;
	font-weight: bold;
	text-transform: uppercase;
	opacity: 0.8;
	font-size:12px;
}
.fcor span{
	border-bottom: none;	
}
.fmarca button, .ftamanho button, .fcor button, .fvoltagem button, .fsub button, .fcat button, .floja button, .fpontos button{
	background:none;
	position: absolute;
	border: none;
	font-size: 25px;
	font-height: bold;
	top: 2px;
	right: 0;
	width: 20px;
	cursor: pointer;
	padding:0 2.5%;
} 


#opt *{
	padding: 10px 5px;
}

.filter{
	 max-width: 15px;
 } 

.cmarca, .ctamanho, .ccor, .cvoltagem, .csub, .ccat, .cloja{
	float:left;
	width: 100%;
	max-height: 200px;
	overflow: auto;
	display: none;
}

.cpontos{
	float:left;
	width: 100%;
	height: 80px;
	overflow: hidden;
	display: block;
	padding: 10px 10px 0 10px;
	text-align: center;
}

.rangeslider__handle-tooltip{
	display:none!important
}

.cmarca ul, .ctamanho ul, .ccor ul, .cvoltagem ul, .csub ul, .ccat ul, .cloja ul{
	padding: 0;	
}

.cmarca ul li, .ctamanho ul li, .ccor ul li, .cvoltagem ul li, .csub ul li, .ccat ul li, .cloja ul li{
	display: block;
}

.cmarca li, .ctamanho li, .ccor li, .cvoltagem li, .csub li, .ccat li, .cloja li{
	padding: 1% 0;	
}

.cmarca input[type="Checkbox"], .ctamanho input[type="Checkbox"], .ccor input[type="Checkbox"], .cvoltagem input[type="Checkbox"], .csub input[type="Checkbox"], .ccat input[type="Checkbox"]{
    border: 1px #dbdbdb solid;
}


#produtos {
	float: left;
	padding: 0 10px;
	width: 100%;
	position: relative
}
.adapt {
	width: 33%
}
.carregando{
	width: 100%;
	text-align: center;
	float: left;
}
@-webkit-keyframes pulse {
  from {padding:2px;}
  to {padding:0px}
}

@-moz-keyframes pulse {
  from {padding:2px;}
  to {padding:0px}
}

@keyframes pulse {
  from {padding:2px;}
  to {padding:0px}
}

#busca {
	width: 100%;
	position: relative;
	background: #fff;
	padding: 10px;
	float:left;
}

#busca input[type="text"] {
	font-size: 20px;
	color: #333;
	border: none;
	min-width: 100%;
	background: #f8f8f8;
	padding: 20px 10px;
	z-index: 1;
	border: 1px #cecece solid;
	border-radius: 5px;
}

#fundo, #fundo2, #fundo3 {
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: none;
	z-index:1
}

#fundo2{
	z-index:5	
}
.result{ 
	background:#fff;
	border-radius: 2px;
	font-size:13px;
	width: 100%;
	position:absolute;
	top: 110%;
	left: 0%;
	padding:0.5%;
	z-index:2;
	box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.1);
}


.result .dizer{
	 float: left;
	 width:100%;
	 vertical-align: top;
	 padding: 0.5%;
	 font-size: 14px;
}

.result .dizer span{
	float: right;
	cursor: pointer;
	font-size: 20px;
	margin-top: -25px;
}

.result .dizer h2{
	 font-weight: 600;
	 font-size:20px;
	 margin: 0;	
}

.dizer > ul {
	padding:0;
	float:left;
	width: 100%;	
}
.dizer > ul li{
 	float:left;
	width:25%;
	padding:10px 5px;
	display:inline-block;
	margin:0;
	background:#fff; 
	transition: 0.5s	
}
.dizer > ul li a{ 
	font-weight:normal; 
	color:#a1a1a1;
	
}
.dizer > ul li:hover{ 
	background:#f1f1f1;
	cursor:pointer;
	transition: 0.5s
}
.sobe{ 
	z-index:3!important
}

.result .moreprod{
	 float: left;
	 width:80%;
	 vertical-align: top;
	 padding: 0.5%;
	 font-size: 14px;
	 display: none
}

.result .moreprod h2{
	 font-weight: 600;
	 font-size:25px;	
}

.mini{
	 float: left;
	 width:20%;
	 position:relative;
	 padding:1%;
	 text-align:center;
}
.mini:nth-child(odd){
 
     border-right: 1px #ddd solid;
}
.mini:nth-child(even){
     border-right: 1px #ddd solid;
}

.mini:last-child { 
	border-right:none; 
}
.mini a{
	 color: #333;	 	
}

.mini img{
 width: 60%;	
}

.minidescprod {
	float: left;
	width: 100%;
	padding: 10px;
	text-align: center;
	font-size:12px;
	font-weight:normal
}


.lupa {
	position: absolute;
	top: 25%;
	right: 2%;
	padding: 10px;
	z-index: 4;
	background: url(${Lupa});
	background-size:100%;
	width: 35px;
	height: 35px;
	border: 0;
	opacity: 0.3;
	cursor: pointer;
	transition: all 500ms ease-in-out;
}

.lupa:hover {
	opacity: 0.5;
	transition: all 500ms ease-in-out;
}

.filtro {
	float: left;
	padding: 10px;
	width: 100%;
	font-weight: bold;	
	position: relative;
	margin: -45px 0 0 0;
	z-index: 5;
	background: #fff;
	/*box-shadow: 0 1px 3px 0px #bebcbb*/
}

.fgrey {
	background-color: #F1F1F1;
}



#ordenacao,
#categoria,
#marca,
#fornecedor {
	padding: 5px;
	float: left;
	width: 20%;
	position: relative;
	cursor:pointer
}

#ordenacao span,
#categoria span,
#marca span,
#fornecedor span {
	float: left;
	border: 1px #cecece solid;
	width: 100%;
	padding: 5%;
	cursor: pointer;
	background: #f8f8f8;
	border-radius: 5px;
}

#ordenacao span:hover,
#categoria span:hover,
#marca span:hover,
#fornecedor span:hover {
	background: #f3f3f3;
}

#cat,
#marc,
#forn {
	position: absolute;
	padding: 2%;
}

#orde {	
	width:100%;
	top: 100%;
	display:block;
	position: relative;
	float: left;
}


#orde .sublink {
	float: left;
	width: 18%;
	padding: 10px;
	text-align: left;
	color: #6f6f6f;
	text-decoration: none;
	font-size: 16px;
	margin: 0 1%;
	border-radius: 10px;
	opacity: 0.7;
	transition: 0.5s;
}

#orde .sublink:hover {	
	font-weight: normal;
	text-decoration: none;
	transition: 0.5s;
	opacity: 1	
}

#orde .sublink:hover img{	
	padding: 0;
	transition: 0.2s ease-in-out	
}

#orde .sublink > img {
	/*-webkit-filter: grayscale(100%);
	filter: grayscale(100%);*/
	transition: 0.2s ease-in-out;
	max-width: 60px;
	float:left;
	filter: none;
	opacity: 1.0;
	padding: 5px
}

#orde .sublink > img:hover {
	/*-webkit-filter: grayscale(0%);
	filter: grayscale(0%);*/
	transition: 0.2s ease-in-out
}

.atention{
	color: #c4045a!important;
	opacity: 1!important
}

.colum{
	width: 100%;
	float:left;
	position:relative;
	height:83%;
	
}

.flow{
	width: 100%;
	float:left;
	position:relative;
	height:100%;
	overflow:auto;
	border: 1px #dbdbdb solid;
	padding:10px;
}

.title{
	font-weight: bold;
	padding:2% 0;
	float:left;
	width:100%;
	position:relative;
	line-height:30px;
	font-size:20px;
	color:#6c6ca9;
}

.title small{
	font-size: 11px;
}

.title img{
	max-width: 40px;
	float: left;
	padding:0 5px;
	}

.columarc{
	width: 100%;
	float:left;
	position:relative;
	height:90%;
	overflow:auto;
	padding:0 10px;
}

#cat {
	background: #f3f3f3;
	width: 30%;
	z-index:7;
	left: -100%;
	top:100px;
	box-shadow: 0px 0px 2px #cecece;
	position:fixed;
	height:95%;
	transition: 1s
}

#subcategoria{
	display: none
}

.aparece{
	transition: 1s;
	left: 0!important;
}

#buscacat {
	width: 100%;
	position: relative;
	float:left;
	margin:2% 0 0 0;
}
#buscacat input[type="text"], #buscamarc input[type="text"] {
	font-size: 20px;
	color: #333;
	border: none;
	min-width: 100%;
	background: #f8f8f8;
	padding: 14px 10px;
	z-index: 1;
	border: 1px #cecece solid;
	border-radius: 5px;
}

#fecharcat{
	 position: absolute;
	 top: 20px;
	 right: 10px;
	 width:15px;
	 opacity: 0.7;
	 cursor:pointer	
}

#fecharmarc{
	 position: absolute;
	 top: 20px;
	 left: 10px;
	 width:15px;
	 opacity: 0.7;
	 cursor:pointer	
}

#marc {
	background: #f3f3f3;
	width: 30%;
	z-index:6;
	right: -100%;
	top:60px;
	box-shadow: 0px 0px 2px #cecece;
	position:fixed;
	height:95%;
	transition: 1s;
}

.aparecemarc, .apareceloja{
	transition: 1s; 
	right: 0!important;
	
}


#forn {
	background: #f3f3f3;
	width: 80%;
	opacity: 0;
	z-index: -7;
	right: 15px;
	top: 89%;
	visibility: hidden;
	box-shadow: 0px 0px 2px #cecece
}

.ativa {
	z-index: 101;
	transition: linear 0.5s
}

.ativa span {
	transition: linear 0.5s
}

.online div {
	padding: 5px;
	float: left;
	width: 25%
}

.online input[type="text"] {
	border: 1px solid #f2f2f2;
	width: 45%;
	padding: 15px;
	float: left;
	margin: 5px;
	
}

.sublink {
	float: left;
	width:100%;
	text-align: left;
	color: #6f6f6f;
	text-decoration: none;
	font-size: 14px;
	font-weight:normal;
	padding: 5px 0;
	cursor:pointer
}

.sublink:hover {	
	font-weight: bold;
	text-decoration:underline;	
}

.ativosub{
	font-weight: bold;
	text-decoration:underline;	
}

.sublink span{
 	border:1px #ddd solid;
 	width:20px;
 	height:20px;
 	float:left;	
}

.sublink > img {
	-webkit-filter: grayscale(100%);
	filter: grayscale(100%);
	transition: 0.2s ease-in-out;
	margin: 5px;
    max-width: 5px;
	float:left;
	opacity: 0.5;
}

.sublink > img:hover {
	-webkit-filter: grayscale(0%);
	filter: grayscale(0%);
	transition: 0.2s ease-in-out
}

#forn .sublink {
	float: right;
	width: 14%;
	padding: 10px;
	text-align: center;
	color: #6f6f6f;
	text-decoration: none;
	font-size: 12px;
	min-height: 180px;
}

#forn .sublink>img {
	-webkit-filter: grayscale(100%);
	filter: grayscale(100%);
	transition: 0.2s ease-in-out;
	max-width: 80px;
}

#forn .sublink>img:hover {
	-webkit-filter: grayscale(0%);
	filter: grayscale(0%);
	transition: 0.2s ease-in-out
}

.buttons {
	float: left;
	width: 100%;
	padding: 1%;
	border-top: 1px #dbdbdb solid
}

.buttons a {
	float: right;
	width: 50%;
	padding: 5px 10px;
	text-align: center;
	color: #333;
	font-size: 14px;
	border-left: 1px #ddd solid;
	font-weight: 600;
	opacity: 0.8;
}

.buttons a:nth-child(2) {
	border-left: none
}

.buttons a img {
	float: left;
	width: 30px;
	opacity: 1.0
}

.buttons a:hover:nth-child(1) {
	color: #6868a7;
}

.buttons a:hover:nth-child(2) {
	color: #fdbc4d;
}

.more {
	float: left;
	width: 100%;
	background: #144474;
	color: #fff;
	margin: 2% 0;
	padding: 2%;
	text-align: center;
	font-weight: 700;
	font-size: 20px;
	text-transform: uppercase;
	cursor:pointer
}

/*==================favoritos====================*/

	.favorito {
		float: left;
		padding: 10px;
		width: 100%;
		margin: 0;
		padding: 25px;
	}

	.favorito h1 {
		padding: 10px;
		font-size: 24px;
		font-weight: bold;
		
		color: #000000;
	}

	.btvazio{
        font-size: 20px;
        color:#fff;
        background: #c88210;
        padding: 10px 30px;
        border-radius: 5px;
    }

    .farvazio{
        position: relative;
        text-align: center;
        font-size: 20px;
        width: 100%;
        padding: 5% 25%;
    }
    .farvazio h1{
        text-transform: uppercase;
        font-size: 25px;
        font-weight: bold;
    }
    .farvazio img{
        max-width: 150px;
    }
	.sorry{ 
		margin:0 auto; 
		padding:20px; 		 	
		font-size: 24px;	
		color: #333333; 
		text-align:center; 
		margin-top:80px; 
		width:100%;
		display:none
	}
	.sorry p{ 
		font-size:24px!important; 
		color:#000!important
	}

	.continuar {
        color: #2f4a78;
        font-size: 15px;
        text-align: center;
        float: right;
        padding: 15px 10px;
        margin: 0;
        font-weight: bold;      
        cursor: pointer;
        border-radius: 3px;
    }


.card-pagination {
    padding: 12px;
    text-align: center;
}

.pagination{
 	border-radius: 0;
    display: inline-block;
    margin: 21px 0;
    padding-left: 0;
}

.pagination > li {
    display: inline-block;
}
.pagination > li:hover {
    border-color: #eeeeee;
	
}
.pagination-product-grid > .active a, .pagination-product-grid > .active a:hover {
    background: #00adef;
	border-color: #e5e5e5;
    color: #fff;
    font-weight: bold;
}

.pagination-product-grid > li a, .pagination-product-grid > li a:hover {
    border-color: #eeeeee;
    color: #999;
	background: #e5e5e5;
}

.disabled {
    opacity: 0.3;
	pointer-events: none;
}

.pagination li:last-child > a, .pagination li:last-child > span {
    border-radius: 0 8px 8px 0;
}

.pagination li:first-child > a, .pagination li:first-child > span {
    border-radius: 8px 0 0 8px;
}
.pagination li a {
    -moz-box-align: center;
    -moz-box-pack: center;
    align-items: center;
    background: #fff none repeat scroll 0 0;
    border: 1px solid #ccc;
    color: #555;
    display: flex;
    font-size: 14px;
    font-weight: 400;
    height: 50px;
    justify-content: center;
    line-height: 24px;
    transition: all 0.2s ease 0s;
    width: 50px;
	cursor: pointer;
	padding: 0 30px;
}

.limpa{
	font-size:10px;
	color: #333;
	float: right;
	padding: 10px;
	width: 100%;
	text-align: center;
	border-bottom: 1px #ddd solid;
	background:#ddd;
}

#vazio{
	float: left;
	width: 80%;
	font-size: 20px;
	text-align: center;
}

#vazio img{
	max-width: 150px;
}

@media only screen and (max-width: 1440px) {
	
	.fmarca button, .ftamanho button, .fcor button, .fvoltagem button, .fsub button, .fcat button, .floja button, .fpontos button{
		width: 15px;
	}


}   

@media only screen and (max-width: 1366px) {
     
		.farvazio{
        	padding:5% 10%!important;
		}

		.farvazio img{
			max-width: 120px;
		}

	 	#ordenacao span, #categoria span, #marca span, #fornecedor span{
			padding: 7% 5%;	
		}

		.buttons a {
			font-size: 12px;
		}

		#orde .sublink {
			font-size: 13px;
		}

		#orde .sublink > img{
			max-width: 50px;
		}

		.colum {
			height: 80%;
		}


		.fmarca button, .ftamanho button, .fcor button, .fvoltagem button, .fsub button, .fcat button, .floja button{			
			width: 16px;

		} 

	  
    }


    @media only screen and (max-width: 1280px) {
		.fmarca button, .ftamanho button, .fcor button, .fvoltagem button, .fsub button, .fcat button, .floja button, .fpontos button{
			width: 14px;
		}

		.paginas select {
			min-width: 15%;
		}

		.filtro {
			margin: -25px 0 0 0;
		}

	}


    
    @media only screen and (max-width: 1024px) {
        
		#produtos{
			width: 70%;	
		}
		#flateral {
			width: 30%;
		}

		.prods {
			width: 50%;
		}

		#ordenacao span, #categoria span, #marca span, #fornecedor span {
			padding: 9% 5%;
		}
		
		#orde, #forn{
            width: 100%;
            left: 0;
            top: 90%;	
        }
		
		#cat {
			max-width: 65%;
		}

		#cat, .colum{
			height: 83%;
		}
		
		.columarc{
			height: 80%;
		}

		#buscacat, #buscamarc{
			margin: 6% 0 0;	
			}
		
        #info{
            min-height: 550px;	
        }

        #info h1{
            font-size: 25px;
            line-height: 35px;
        }
        .marca {
            top: -20%;
            width: 20%;
        }
		
		.mini:last-child {
			display: none;
		}
		.mini{
			width: 25%;	
		}
		
		
		.result .dizer h2 {
			font-size: 20px;
		}
		
		#marc{
			width: 40%;	
		}
        
    }
    
    @media only screen and (max-width: 801px) {

		.paginas select {
			min-width: 45%;
		}

		.farvazio{
            padding: 10%;
        }
		#cat{
			width: 70%;	
		}
		
		#busca input[type="text"]{
			font-size: 15px;
		}
		
		#ordenacao span, #categoria span, #marca span, #fornecedor span {
			padding: 11% 5%;
		}
				
        .prods{ 
            width:100%;
        }

        .favs {
            right: 3%;
            top: 0;
            width: 12%;
        }

        .descprod {
            width: 75%;
        }
 
        #foto{
            width: 100%;
            min-height:640px	
        }

        #info{
            width: 97%;
        }
        
        .galery{
            right: 15%;
            top: 0;
            width: 65%;	
        }

        .cunit img {
            width: 75%;
        }

        .avisocar, .total{
            width: 50%;
        }

        .order,.token{
            width: 100%;
            margin: 1% 0 0 0
        }

        .btfim a{
            font-size: 20px;	
        }
		
		/*=====resultado busca======*/
		.result .dizer{
			width:100%;	
		}

		.dizer section{
			width: 50%
		}

		.result .moreprod{
			width: 70%;	
		}
		
		.mini{
			width: 100%;
			border-bottom: 1px #ddd solid;
			border-right:none;
		}
		
		.mini:last-child{
		 display: none;
		}
		
		.mini img {
			width:20%;
			float:left;
		}
		.minidescprod{
			width:80%;
			padding: 5px 20px;
		}
		
		  
    }


@media only screen and (max-width: 480px) {

	.limpa {
		padding: 20px 10px;
	}

	.filtro{
		margin: 0;
	}

	.farvazio{
		padding: 3%;
	}


	#ordenacao, #marca, #fornecedor{
		width: 50%; text-align:center	
	}

	#categoria, #busca, #fornecedor{
		width: 100%;
	}

	#categoria span, #fornecedor span{
	padding: 5%;	
	}

	#ordenacao span, #marca span {
		padding: 8%;
	}

	.favs{
		width: 15%;
	}


	#cat,  .colum {
		width: 100%;
	}

	#orde{
		display: none
	}

	#cat {
		height: 95%;
	}
	#marc {
		width: 80%;
	}
	.colum {
		height: 27%;
			margin: 25px 0;
	}

	.columarc {
		height: 70%;
	}
			
	.sublink{
		padding: 10px 0;	
	}

	#buscacat, #buscamarc {
		margin: 10% 0 0;
	}

	#forn{
		width: 90%;
		left: 5%;
	}

	#orde .sublink, #forn .sublink{
		width: 50%;
	}

	.lupa{
		height: 25px;
			width: 25px;
			top:35%;
			right: 5%;
	}

	#foto {
		min-height: 350px;
	}
	.marca{
		width: 20%;	
		top:-20%
	}

	.cor span, .tamanho span, .voltagem span{
		width: 100%;	
	}

	#info input[type="submit"]{
		margin: 5% 2%;
		width: 95%;
		font-size: 18px;
	}

	.pc-tab ul li label, .pc-tab section dt, .pc-tab section dd{
		width: 100%;	
	}

	#headercar{
	display: none;	
	}

	.carprod{ 
		width:70%;
	}
	.cprod img{
	width: 30%;
	}
	.cprod {
		width: 100%;
	}

	.cunit{ 
		display:none
	}

	.cunit span, .ctotal span, .quantity span{
		display: block;
	}

	.quantity, .ctotal {
		width: 50%;
	}

	.total label{
		width: 100%;
		padding: 15px 0;
	}

	.total input[type="text"]{
		width: 100%;	
	}
	.lcar {
		padding: 2% 0;
	}

	.avisocar, .total {
		width: 100%;
	}

	.total {
		text-align: center;
	}

	/*=====resultado busca======*/

		.result{
			top: 90%;
				left: -3%;
				width: 106%;
		}
		.dizer section {
			width: 100%;
		}

		.dizer{
			max-height: 300px;
			overflow: auto
		}

		.result .dizer h2 {
			text-align: center;
		}
		
		.result .moreprod{
			width: 100%;	
		}
		
		.mini{
			width: 100%;
			border-bottom: 1px #ddd solid;
			border-right:none;
		}
		
		.mini:last-child{
			display: none;
		}
		
		.mini img {
			width:20%;
			float:left;
		}
		.minidescprod{
			width:80%;
			padding: 5px 20px;
		}


		#flateral, #produtos{
			width:100%;
			margin: 1% 0;
		}

		#buscacat input[type="text"]{
			font-size: 15px;
		}

		.pagination li a{
			width: 40px;
			height: 40px;
		}

		.fmarca button, .ftamanho button, .fcor button, .fvoltagem button, .fsub button, .fcat button, .floja button, .fpontos button{
			width: 23px;
		}

		#produtos {
			width: 100%;
			margin: 20% 0;
		}

		.pagination li a {
			padding: 0 20px;
			font-size: 11px;
		}


    }
    /**********MOBILE*************/
    @media only screen and (max-width: 385px) {
        
    }
    @media only screen and (max-width: 320px) {
      
      
    }

`;
