import React, {useEffect, useState} from "react";
import "./styles.css";
import LazyLoad from "react-lazyload"

const Comics = ({id, image, title, creators}) =>{

  const [makers, setMakers] = useState("");

  useEffect(async () =>{
    console.log(creators);
    var makers = "";
    await creators.forEach((creator, i) => {
      if(creator.role == "writer" || creator.role == "inker"){     
        if(creator.name.split(" ")[1]){
          makers += creator.name.split(" ")[1]+", ";
        }else{
          makers += creator.name+", ";
        }
      }
    });

    makers = makers.slice(0, makers.length-2);
    console.log(makers);
    setMakers(makers);
  },[]);

  const goDetails = () => {window.location="Details/"+id}

  return(
    <LazyLoad className="comic">
      <img className="thumbnail" src={image} onClick={goDetails} />
      <span className="title" onClick={goDetails}>{title}</span>
      <span className="makers" onClick={goDetails}>{makers}</span>
    </LazyLoad>
  );

}

export default Comics;
