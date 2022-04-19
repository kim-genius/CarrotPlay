import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// css
import "./css/index.css";
import "./css/Navbar.css";
import "./css/SignIn.css";
//
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
