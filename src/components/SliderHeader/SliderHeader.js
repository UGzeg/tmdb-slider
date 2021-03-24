import React, {useState, useEffect} from "react";
import {instance as axios, requests } from "../../constants";

import "./styles.css";

import Tabs from "./Tabs";

const SliderHeader = ({ title, tabType, movies }) => {

  const [fetchURL, setFetchURL] = useState()

  useEffect(() => {
    fetchURL !== undefined && fetchData(fetchURL);
  }, [fetchURL]) 

  const tabChange = (child) => {
    setFetchURL(child)
  }

  async function fetchData(item){
    const tempURL = requests[item]
    const request = await axios.get(tempURL);
    movies(request.data.results);
    return;
  }

  return (
    <div className="sliderHeaderContainer">
      <h2 className="sliderHeaderTitle">{title}</h2>
      <Tabs tabType={tabType} fetchType = {tabChange}/>
    </div>
  );
};

export default SliderHeader;
