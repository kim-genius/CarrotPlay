import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// css
import "./css/navbar.css";
import "./css/index.css";
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
