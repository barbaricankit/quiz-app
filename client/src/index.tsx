import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { QuizProvider } from "./context/quiz-context";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <Router>
        <QuizProvider>
          <App />
        </QuizProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

reportWebVitals();
