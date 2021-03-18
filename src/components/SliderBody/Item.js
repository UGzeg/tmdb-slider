import React, { useEffect } from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import { baseImgUrl } from "../../constants";
import "./styles.css";

const Item = ({ list }) => {
  useEffect(() => {
    console.log(list);
    return;
  }, [list]);
  return (
    <div className={"itemContainer"}>
      {list.map((item) => (
        <div className={"itemImgContainer"}>
          <Image
            src={`${baseImgUrl}/${item.poster_path}`}
            effect="opacity"
            className={"itemImg"}
          />
          <div className={"itemContent"}>
          <h2>{item.original_title || item.original_name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
