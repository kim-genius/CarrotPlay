import { styled } from "@material-ui/core/styles";
import React from "react";

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
  background: "red",
});

const Navbar = () => {
  return <RootStyle>Navbar</RootStyle>;
};

export default Navbar;
