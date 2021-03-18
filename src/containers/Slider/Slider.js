import React, { useState } from 'react';
import SliderHeader from "../../components/SliderHeader";
import Item from "../../components/SliderBody";

const Slider = ({title , tabType }) => {
  const [list, setList] = useState([])

  return (
    <div>

    <SliderHeader title = {title} tabType = {tabType} movies = {(item) => setList(item)}/>
    <Item list = {list}/>

    </div>
  )
}

export default Slider;
