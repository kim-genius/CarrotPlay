import React from "react";
import MainLayout from "../layouts/MainLayout";
import Course from "../screen/Course";
import Courses from "../screen/Courses";
import CoursesIndex from "../screen/CoursesIndex";
import Home from "../screen/Home";
import NoMatch from "../screen/NoMatch";

export const MAIN = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/courses",
        element: <Courses />,
        children: [
          { index: true, element: <CoursesIndex /> },
          { path: "/courses/:id", element: <Course /> },
        ],
      },
      { path: "*", element: <NoMatch /> },
    ],
  },
];
