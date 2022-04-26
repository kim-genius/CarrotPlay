import React from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieData } from "../redux/feeder";

const Course = () => {
  let { id } = useParams<"id">();

  const movies = getMovieData();

  console.log("movies", movies);

  return (
    <div>
      <h2>
        Welcome to the
        {id}
      </h2>

      <p>This is a great course. You're gonna love it!</p>

      <Link to="/courses">See all courses</Link>
    </div>
  );
};

export default Course;
