import React from "react";
import MainLayout from "../layouts/MainLayout";
import Profiles from "../pages/auth/Profiles";
import Course from "../pages/Course";
import Courses from "../pages/Courses";
import CoursesIndex from "../pages/CoursesIndex";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";

export const AUTH = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Profiles /> },
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
