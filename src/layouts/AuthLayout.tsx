import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="login__background">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
