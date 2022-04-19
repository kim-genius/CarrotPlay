import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../pages/auth/SignIn";
import Course from "../pages/Course";
import Courses from "../pages/Courses";
import CoursesIndex from "../pages/CoursesIndex";
import NoMatch from "../pages/NoMatch";

export const AUTH = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/", element: <SignIn /> },
      // {
      //   path: "/courses",
      //   element: <Courses />,
      //   children: [
      //     { index: true, element: <CoursesIndex /> },
      //     { path: "/courses/:id", element: <Course /> },
      //   ],
      // },
      { path: "*", element: <NoMatch /> },
    ],
  },
];
