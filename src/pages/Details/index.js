import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../components/Header";
import { GetApi } from "../../services/api";
import "./styles.css";

const Details = ({match}) => {

  const [data, setData] = useState({thumbnail:{}, characters: {items: []}, creators: {items: []}, prices: [{}]},);
  const [dates, setDates] = useState({});
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  useEffect( async () => {
    console.log(match.params.id);
    var result = await GetApi("v1/public/comics/"+match.params.id+"?");
    console.log(result);
    if(result.status == 200){
      var tempDates = {};
      setData(result.data.data.results[0]);
      result.data.data.results[0].dates.forEach(date => {
        tempDates[date.type] = standardizeDate(date.date);
      });
      setDates(tempDates);
    }

  }, []);

  const standardizeDate = (date) =>{
    var newDate = date.split("T");
    newDate = newDate[0].split("-");
    return(months[newDate[1]-1]+" "+newDate[2]+", "+newDate[0]);
  }

  return (
    <div id="container" style={{backgroundImage:"url("+data.thumbnail.path+"/landscape_incredible."+data.thumbnail.extension+")"}}>
      <Header />
      <div className="containerComic">
        <img src={data.thumbnail.path+"/portrait_uncanny."+data.thumbnail.extension} className="comicCover" />
        <div className="containerData">
          <span className="comicTitle">
            {data.title}
          </span>
          <span className="subTitle">
            Published:
          </span>
          <span className="content">
            {dates["onsaleDate"]}
          </span>

          <div className="rowCreators">
            {data.creators.items.map((creator, i)=>(
              <div className="columnCreators">
              <span className="subTitle">
                {creator.role}
              </span>
              <span className="content">
                {creator.name}
              </span>
            </div>
            ))}
          </div>      

          <p className="description">
            {data.description}
          </p>


        </div>
      </div>
      <div className="containerMore">
        <h2 className="titleMore">MORE DETAILS</h2>
        <div className="rowMore">
          <div className="columnMore">
              <h4>EXTENDED CREDITS AND INFO</h4>
              <span className="contentMore"><b>Format: </b> {data.format}</span>
              <span className="contentMore"><b>Price: </b> {"$"+data.prices[0].price}</span>
              <span className="contentMore"><b>UPC: </b> {data.upc}</span>
              <span className="contentMore"><b>FOC Date: </b> {dates["focDate"]}</span>
              <span className="contentMore"><b>Page Count: </b> {data.pageCount}</span>
          </div>
          <div className="columnMore">
              <h4>CHARACTERS</h4>
              {data.characters.items.map((character, i)=>(
                <span className="contentMore" key={i}><b>{character.name}</b></span>
              ))
              }
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default withRouter(Details);
