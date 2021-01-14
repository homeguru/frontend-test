import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex:1;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
  align-items: center;

  .logo-cmarvel{
    width: 100%;
    max-width: 500px;
  }

  .loadinng{
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin:20px;
    padding: 5px 15px;
    border-radius: 10px;
    background: #f00;
    box-shadow: 1px 1px 10px #000;
  }
`;

export const ContentModal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.9);
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  padding: 20px;
  border-radius: 20px;
  background: #fff;
  z-index: 20;
  flex-direction: column;
  b{
    color: #250000;
    font-weight: bold;
  }
  h1{
    color: #600000;
    margin-bottom: 20px;
  }
  hr{
    margin: 10px 0%;
  }
  button{
    background: transparent;
    border: transparent;
  }
  .icon{
    color: #250000;
    font-size: 35px;
  }
  h2 {
    color: #250000;
    font-size: 20px;
  }

  .box-text{
    color: #fff;
    margin-top: 10px;
    padding: 5px 15px;
    border-radius: 5px;
    background: #600000;
    white-space: nowrap;

    + .box-text {
      margin-left: 10px;
    }
  }

  .description{
    color: #600000;
    margin-top: 5px;
    font-size: 16px;
  }
  img{
    max-height: 250px;
    margin-right: 20px;
    border: 1px solid #f00;
  }
  .flex1{
    flex:1;
  }
  
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RowBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RowLeft = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ContentCards = styled.div`
  display: flex;
  flex:1;
  height: max-content;
  max-width: 1150px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 20px;
  background: #000;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  color:#999;
  flex:1;
  min-width: 300px;
  max-width: 350px;
  margin: 10px;
  border-radius: 20px;
  border: 4px solid #555;
  background-image: linear-gradient(to bottom right, #250000, #600000);
  position:relative;
  overflow: hidden;
  cursor: pointer;

  .title {
    display:flex;
    flex:1;
    margin-bottom: 20px;
    padding: 0 10px;
    min-height: 70px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image: linear-gradient(to bottom right, #999, #e9e9e9);
    box-shadow: 1px 1px 5px #444;


    p{
      color: #000;
      font-size: 20px;
      font-weight: bold;
    }
  }

  h2{
    font-size: 20px;
  }

  img{
    width: 80%;
    margin: auto 10%;
    min-height: 450px;
    max-height: 450px;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 2px 3px 6px #000;
  }

  .date{
    display:flex;
    flex:1;
    margin-top: 20px;
    padding: 0 10px;
    min-height: 70px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image: linear-gradient(to bottom right, #999, #e9e9e9);
    box-shadow: -3px -3px 15px #444;

    p{
      color: #000;
      font-size: 20px;
      font-weight: bold;
    }
  }

  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .spinner{
    width: 100%;
    color: #fff;
    font-size: 100px;
    font-weight: bold;
    margin: 130px auto;
    text-align: center;
    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
  }

`;
