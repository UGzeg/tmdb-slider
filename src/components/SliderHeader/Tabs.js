import React, { useEffect, useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "./styles.css";

const options = {
  popular: [
    {
      to: "/",
      text: "Streaming",
      fetchURL: "fetchTrending",
    },
    {
      to: "/on-tv",
      text: "On TV",
      fetchURL: "fetchPopularTV",
    },
    {
      to: "/for-rent",
      text: "For Rent",
      fetchURL: "fetchPopularMovie",
    },
    {
      to: "/in-theaters",
      text: "In Theaters",
      fetchURL: "fetchUpcomingMovie",
    },
  ],
  freeWatch: [
    {
      to: "/",
      text: "Movies",
      fetchURL: "fetchMovie",
    },
    {
      to: "/tv",
      text: "TV",
      fetchURL: "fetchTV",
    },
  ],
};

const Tabs = ({ tabType, fetchType }) => {
  const [fetch, setFetch] = useState(tabType === "popular" ? "fetchTrending" : "fetchMovie");

  useEffect(() => {
    setFetchType(fetch);
    return;
  }, [fetch]);
  const setFetchType = (item) => {
    fetchType(item);
  };

  return (
    <div className="sliderHeaderTabContainer">
      <BrowserRouter>
        {options[`${tabType}`].map(({ to, text, fetchURL }) => {
          return (
            <NavLink
              exact
              activeClassName={"sliderHeaderTabItemActive"}
              className={"sliderHeaderTabItem"}
              to={to}
              onClick={() => setFetch(fetchURL)}
            >
              <h3>{text}</h3>
            </NavLink>
          );
        })}
      </BrowserRouter>
    </div>
  );
};

export default Tabs;
