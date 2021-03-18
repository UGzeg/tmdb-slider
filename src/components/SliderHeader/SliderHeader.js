import React, {useState, useEffect} from "react";
import {instance as axios, requests } from "../../constants";

import "./styles.css";

import Tabs from "./Tabs";

const SliderHeader = ({ title, tabType, movies }) => {

  const [fetchURL, setFetchURL] = useState()

  useEffect(() => {
    async function fetchData(){

      const request = await axios.get(requests[fetchURL]);
      movies(request.data.results);
      return;
    }
    fetchData();
  }, [fetchURL]) 

  const tabChange = (child) => {
    setFetchURL(child)
  }

  return (
    <div className="sliderHeaderContainer">
      <h2 className="sliderHeaderTitle">{title}</h2>
      <Tabs tabType={tabType} fetchType = {tabChange}/>
    </div>
  );
};

export default SliderHeader;
