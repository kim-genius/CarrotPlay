import React from "react";
import MainLayout from "../layouts/MainLayout";
import Course from "../pages/Course";
import Courses from "../pages/Courses";
import CoursesIndex from "../pages/CoursesIndex";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";

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
