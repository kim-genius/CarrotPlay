import Router from "./routes";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
