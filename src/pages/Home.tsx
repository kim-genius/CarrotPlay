import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const TMDB_API_URL = process.env.REACT_APP_TMDB_API_URL;

  const getData = () => {
    axios
      .get(TMDB_API_URL)
      .then((Response) => {
        // setdata(Response.data);
        console.log(Response.data.result);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  getData();

  return <div></div>;
};

export default Home;
