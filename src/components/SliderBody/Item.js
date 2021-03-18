import React, { useEffect } from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import { baseImgUrl } from "../../constants";
import Rating from "./Rating";
import "./styles.css";

const Item = ({ list }) => {
  useEffect(() => {
    console.log(list)
    return;
  }, [list]);
  return (
    <div className={"itemContainer"}>
      {list.map((item) => (
        <div className={"itemImgContainer"}>
          <Image
            src={`${baseImgUrl}/${item.poster_path}`}
            effect={"opacity"}
            className={`itemImg ${item.vote_average*10 < 40 && "low"} ${
              item.vote_average*10 < 70 && "mid"
            } ${item.vote_average*10 <= 100 && "high"} `}
          />
          <div className={"itemContent"}>
          <Rating />
            <h2>{item.original_title || item.original_name}</h2>
            <p>{
              item.release_date && item.release_date.split("-").reverse().join("/")
            }</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
