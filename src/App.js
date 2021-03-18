import React from "react";
import Slider from "./containers/Slider";

function App() {
  return (
    <div>
      <Slider title="What's Popular" tabType="popular" />
      <Slider title="Free To Watch" tabType="freeWatch" />
    </div>
  );
}

export default App;
