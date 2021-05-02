import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../components/Header";
import Comics from "../../components/Comics";
import { GetApi } from "../../services/api";
import "./styles.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { x64 } from "crypto-js";

const Index = () => {
  const [comics, setComics] = useState([]);
  const [counter, setCounter] = useState(0);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    loadComics();
  }, []);

  const loadComics = async () =>{
    var temp = comics;
    var result = await GetApi("v1/public/characters/1010338/comics?limit=10&offset="+counter+"&orderBy=onsaleDate&");
    if (result.status == 200) {
      temp.push(...result.data.data.results)
      setComics(temp);
      setCounter(counter+result.data.data.count);
      setTotal(result.data.data.total);
    }
  }

  return (
    <div id="container">
      <Header />
        <InfiniteScroll
          className="containerComics"
          dataLength={comics.length} 
          next={loadComics}
          hasMore={counter<total}
          loader={<h4>Loading...</h4>}
          endMessage={
            <div/>
          }
        >
          {comics.map((comic, i) => (
            <Comics
              key = {i}
              image = {comic.thumbnail.path +"/portrait_uncanny." + comic.thumbnail.extension}
              id = {comic.id}
              title = {comic.title}
              creators = {comic.creators.items}
            />
          ))}
        </InfiniteScroll>
    </div>
  );
};

export default withRouter(Index);
