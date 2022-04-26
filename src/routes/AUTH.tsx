import AuthLayout from "../layouts/AuthLayout";
import SignInScreen from "../screen/auth/SignInScreen";
import SignUpScreen from "../screen/auth/SignUpScreen";
import Course from "../screen/Course";
import Courses from "../screen/Courses";
import CoursesIndex from "../screen/CoursesIndex";
import NoMatch from "../screen/NoMatch";

export const AUTH = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/", element: <SignInScreen /> },
      { path: "/sign-up", element: <SignUpScreen /> },
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
