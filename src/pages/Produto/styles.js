import styled from "styled-components";

export const Container = styled.div`
    float:left; 
    width:100%; 
    position: relative;

    .swal2-styled.swal2-cancel{
        font-size: 14px!important
    }

    .detail {
	float: left;
	width: 100%;
	padding: 5px;
	min-height: 420px;
    }

    #foto {
        float: left;
        width: 40%;
        padding: 20px 0;
        text-align: center;
        position: relative;
        min-height:420px;

    }

    #foto img{
        width: 100%;
    }

    .fleft {
        float: left;        
        height: 95px;
        width: 100%;
        padding: 5px;
    }

    .fright {
        float: left;
        top: 30px;
        width: 95%;
        position: relative
    }

    .fleft a {
        width: 20% !important;
        padding: 3px;
        cursor: pointer;
        margin: 0 2%;
    }

   

    .fleft a img {
        transition: 0.2s ease-in-out;
        -webkit-transition: 0.2s ease-in-out;
        border: 1px #fff solid;
    }

    .fleft a:hover img {
        opacity: 0.7;
        -webkit-opacity: 0.7;
        transition: 0.2s ease-in-out;
        -webkit-transition: 0.2s ease-in-out;
    }

    .slick-slide img{
        display: inline;
    }

    .galery {
        position: absolute;
        top: 5px;
        right: 15%;
    }

    #descricao {
        float: left;
        padding: 20px;
        width: 100%;
        font-size: 15px;
        line-height: 30px;
    }

    #descricao h2 {
        font-size: 30px;
        font-style: italic;
        font-weight: bold;
        color: #000000;
    }

    #more {
        float: left;
        padding: 10px;
        margin: 20px 0px 40px 0px;
        width: 100%;
        text-align: center
    }

    #more h3 {
        color: #000000;
        font-size: 30px;
        font-weight: bold;
    }


    #info {
        position: relative;
        margin:0 1%;
        z-index: 10;
        width: 55%;
        padding: 10px 30px;
        min-height: 420px;
        float: right;
        color: #333;
        font-size: 30px;
        line-height: 10px;
    }

    .compartilha {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    #info p {
        font-size: 14px
    }

    #info h1 {
        font-weight: bold;
        line-height: 50px;
        margin: -5px 0 10px 0;
        font-size: 35px;
        color: #333;
    }

`;

export const ProdutoCSS = styled.div`
   
   @media only screen and  (max-width: 1680px) {
        .prods {
            width: 392px;
        }
    }

      
    @media only screen and (max-width: 1366px) {
        .prods {
            width: 420px;
        } 

        .galery{
                right: 5%;
                top: 0;
                width: 85%;	
            }
    }

    @media only screen and  (max-width: 1680px) {
        .prods {
            width: 380px;
        }
    }
    
    @media only screen and (max-width: 1024px) {
      
        .prods {
            width: 320px;
        }

    }
    
    @media only screen and (max-width: 801px) {

        .prods {
            width: 350px;
        }

            
            .imgprod {
                width: 25%;
            }

            .descprod {
                width: 75%;
            }


            .inf {
                width:40%;
            }

            .infos {
                width: 65%;
            }

            #foto {
                    width: 100%;
                    min-height: 410px;
                }
            #info{
                width: 97%;
            }
            
    }
    /***********Iphone 6 Landscape*******************/
    @media only screen and (max-width: 740px) {
       
    }
    /**********MOBILE HORIZONTAL*************/
    @media only screen and (max-width: 668px) {
       
      
    }
    @media only screen and (max-width: 480px) {
        .prods {
            width:410px;
        }
        
        #foto {
            width: 100%;
            min-height: 400px;
        }

  
        .imgprod {
            width: 50%;
            margin-left: 25%
        }

        .descprod {
            width: 100%;
        }

        #foto {
            min-height: 250px;
        }

        .marca{
            width: 20%;	
            top:-20%
        }

        #info{
            padding: 10px 20px;
			min-height: 280px;
        }

        #info h1 {
            font-size: 20px;
            line-height: 30px;
        }

    }


    /**********MOBILE*************/
    @media only screen and (max-width: 414px) {

        .prods {
            width:350px;
        }


    }

    /**********MOBILE*************/
    @media only screen and (max-width: 385px) {

        .prods {
            width:320px;
        }

    }
    @media only screen and (max-width: 320px) {
      
      
    }

`;
