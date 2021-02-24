import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Droid+Sans:400,700|Lora:400,700,700i');
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Open+Sans:300,400,700,800|Roboto&display=swap');

*{
    box-sizing:border-box; 	
    -moz-box-sizing:border-box;
}
html {
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
}
.slick-slide {
	visibility: hidden;
}
.slick-slide.slick-active {
	visibility: visible;
}
a img{ 
    border:none
    }
a { 
    text-decoration:none;
 }
a:hover { 
    text-decoration: none;
}
.full{
    max-width:1920px;
	margin:0 auto;
	position:relative;
	padding:0.5% 2%;
}
.clear{ 
    clear:both
}
.img{ 
    width:100%; height:auto;
}
h1, h2, h3, h4, h5, h6{ 
    font-weight:normal
}

body{
    font-family: 'Open Sans', sans-serif; 
    padding:0; 
    height:100%; 
    font-size:14px; 
    color:#333; 
    padding:100px 0 0 0;
    margin: 0; 
}
    .pc{ 
        display:block
    }
    .mb{ 
        display:none
    }

	#breadcrumb{
    color:#515151;
     width:100%;
     font-size:11px;
     margin:10px 0; z-index:1; position:relative
}
 #breadcrumb span{
    color:#515151;
     text-decoration:none;
	 font-size: 13px;
	 font-weight:600;
	 opacity: 0.7
}
 #breadcrumb a{
     color:#515151;
     text-decoration:none;
}
 #breadcrumb p{
     margin:0
}
 #breadcrumb a:hover{
     text-decoration:underline;
}
  
/*=============MOdal de escolha dos produtos. voltagem, tamanho======*/

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

#black {
	background-color: rgba(0, 0, 0, 0.7);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: none;
	z-index:10
}

#question {
	background-color: rgba(0, 0, 0, 0.7);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: none;
	z-index:10
}

.escolha{
	background: #fff;
	border-radius: 5px;
	padding: 1%;
	position:absolute;
	width:25%;
	top:40%;
	left:35%;
	text-align: center;
	font-size: 20px;
	font-weight:300;
		
}
.escolha h4{
	font-size:25px;
	font-weight:700;
	color: #333;
	color:#1c96a3;
}
.escolha h3{
	font-size:25px;
	font-weight:700;
	color: #333;
	color:#8a2c06;
}

.escolha > .fechar{
	position: absolute;
	top:7%;
	right:5%;
	width:20px;	
	opacity: 0.5;
	cursor:pointer;
}

.btquestion{
	color:#dc8903;
	float:right;
	padding: 2%;
	margin:2% 0;
	width: 50%;
	font-weight: bold;
	font-size:17px;
	cursor: pointer;
}

.btquestion a{
	color:#dc8903;
	text-decoration:none;	
}

.escolha > .cor {
	float: left;
	width: 100%;
	padding: 5px;
	
	font-size: 14px;
	line-height: 30px;
}

.escolha > .cor span {
	float: left;
	font-size: 14px;
	width: 120px;
}

.escolha > .cor a {
	width: 40px;
	height: 40px;
	float: left;
	margin: 0 2px;
	border: 1px #dbdbdb solid
}

.escolha > .tamanho {
	float: left;
	width: 100%;
	padding: 5px;
	
	font-size: 14px;
	line-height: 30px;
}

.escolha > .tamanho span {
	float: left;
	font-size: 14px;
	width: 120px;
}

.escolha > .tamanho a {
	width: 40px;
	height: 40px;
	border: 1px #dbdbdb solid;
	color: #333;
	padding: 5px;
	text-align: center;
	float: left;
	margin: 0 2px;
}

.escolha > .tamanho a:hover {
	border: 1px #2f4a78 solid;
}

.escolha > .qtd {
	float: left;
	width: 100%;
	padding: 5px;
	
	font-size: 14px;
	line-height: 30px;
}

.escolha > .qtd span {
	float: left;
	font-size: 14px;
	width: 120px;
}

.escolha > .qtd a {
	width: 40px;
	height: 40px;
	border: 1px #fff solid;
	color: #fff;
	padding: 5px;
	text-align: center;
	float: left;
	margin: 0 2px;
}

.escolha > .qtd a:hover {
	border: 1px #9966CC solid;
}

.escolha > .qtd input[type="text"] {
	width: 40px;
	height: 40px;
	border: 1px #fff solid;
	background: none;
	color: #fff;
	padding: 5px;
	text-align: center;
	float: left;
	margin: 0 2px;
}


.escolha > .voltagem {
	float: left;
	width: 100%;
	padding: 5px;
	
	font-size: 14px;
	line-height: 30px;
}

.escolha > .voltagem span {
	float: left;
	font-size: 14px;
	width: 120px;
}

.escolha > .voltagem a {
	width: 85px;
	height: 40px;
	border: 1px #dbdbdb solid;
	color: #333;
	padding: 5px;
	text-align: center;
	float: left;
	margin: 0 2px;
}

.escolha > .voltagem a:hover {
	border: 1px #2f4a78 solid;
}

.slick-slide {
	visibility: hidden;
}
.slick-slide.slick-active {
	visibility: visible;
}

/*==============LOADING===========*/

#load{
     position: fixed;
     z-index: 1;
     top: 38%;
     left: 47%
}

.circle {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  box-sizing: border-box;
  border: solid 10px rgba(255, 255, 255, 0.2);
  border-top-color: #FFF;
  animation: spin 1s infinite linear;
}

.circleloader {
  border-radius: 16px;
  width: 80px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.4);
}

.load2{
	position: absolute;
	top: 15px;
	right: 20%;
}

.circle2 {
  width: 20px;
  height: 20px;
  border-radius: 40px;
  box-sizing: border-box;
  border: solid 5px rgba(102, 102, 102, 0.2);
  border-top-color: #666;
  animation: spin 1s infinite linear;
}

.circleloader2 {
  border-radius: 16px;
  width: 20px;
  height: 10px;
  background-color: rgba(102, 102, 102, 0.4);
}

@keyframes spin { 
  
  100% { 
    transform: rotate(360deg); 
  } 

} 

	.campos10, .campos15, .campos20, .campos30, .campos40, .campos50, .campos60, .campos70, .campos80, .campos90, .campos100{
        position: relative
    }

.campos10{
     padding:5px;
     float:left;
     width:10%;
}
.campos15{
     padding:5px;
     float:left;
     width:15%;
}
 .campos20{
     padding:5px;
     float:left;
     width:20%
}
 .campos30{
     padding:5px;
     float:left;
     width:30%
}
 .campos40{
     padding:5px;
     float:left;
     width:40%
}
 .campos50{
     padding:5px;
     float:left;
     width:50%
}
 .campos60{
     padding:5px;
     float:left;
     width:60%
}
 .campos70{
     padding:5px;
     float:left;
     width:70%
}
 .campos80{
     padding:5px;
     float:left;
     width:80%
}
 .campos90{
     padding:5px;
     float:left;
     width:90%
}
 .campos100{
     padding:5px;
     float:left;
     width:100%;
     position: relative
}


@media only screen and (max-width: 1633px) {

	.escolha{
		width:40%;
		top:40%;
		left:30%;		
	}

}

@media only screen and (max-width: 1024px) {

    .escolha {
        left: 27%;
        width: 45%;
    }

}

@media only screen and (max-width: 801px) {


    .escolha {
        left: 20%;
        top: 30%;
        width: 60%;
    }
    

}


@media only screen and  (max-width: 480px){

	body{
		padding:70px 0 0 0;
	}

	.campos10, .campos15, .campos20, .campos30, .campos40, .campos50, .campos60, .campos70, .campos80, .campos90{
         width:100%
    }


    .pc{ 
        display:none
    }
    .mb{ 
        display:block
    }

    .escolha {
		left: 5%;
		top: 30%;
		width: 90%;
	}
        
	.escolha > .voltagem a{
		width: 65px;
		font-size: 13px;
	}

	
	.btquestion{
		padding: 1%;
		width:100%;
	}

}

`;


export default GlobalStyle;