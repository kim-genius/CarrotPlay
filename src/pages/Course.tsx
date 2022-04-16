import React from "react";
import { Link, useParams } from "react-router-dom";

const Course = () => {
  let { id } = useParams<"id">();

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
