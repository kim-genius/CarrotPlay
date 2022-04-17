import { useRoutes } from "react-router-dom";

//? -- component --

import { AUTH } from "./AUTH";
import { MAIN } from "./MAIN";

export default function Routes() {
  const navigateRoot = "AUTH";
  function getRootStack() {
    switch (navigateRoot) {
      case "AUTH":
        return AUTH;
      // case "MAIN":
      //   return MAIN;

      default:
        return AUTH;
    }
  }

  return useRoutes(getRootStack());
}
