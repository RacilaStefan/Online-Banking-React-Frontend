import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

//CSS
import "normalize.css";
import "materialize-css/dist/css/materialize.min.css";
import "./resources/css/index.css";

//Components
import Header from "./Components/PageComponents/Header";
import Footer from "./Components/PageComponents/Footer";

import { Logger } from "./Utils/Logger";
import RoutesList from "./Components/RoutesList";
import ContextProvider from "./Components/Context/ContextProvider";

const log = new Logger("Index Page");

ReactDOM.render(
  //<React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
          <Header />
            <RoutesList/>
          <Footer />
      </ContextProvider>
    </BrowserRouter>,
  //</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
