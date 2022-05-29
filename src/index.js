import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

//CSS
import "normalize.css";
import "materialize-css/dist/css/materialize.min.css";
import "./resources/css/index.css";

//Routes
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import Error from "./Routes/Error";
import Logout from "./Routes/Logout";
import Profile from "./Routes/Profile";
import Dashboard from "./Routes/Dashboard";

//Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ContextProvider } from "./Components/ContextProvider";
import { PATHS } from "./Utils/Constants";

import { Logger } from "./Utils/Logger";

const log = new Logger("Index Page");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Header />
          <Routes>
              <Route path={PATHS.HOME} element={<Home />}/>
              <Route path={PATHS.LOGIN} element={<Login />} />
              <Route path={PATHS.LOGOUT} element={<Logout />} />
              <Route path={PATHS.REGISTER} element={<Register />}/>
              <Route exact path={PATHS.PROFILE} element={<Profile />} />
              <Route exact path={PATHS.DASHBOARD} element={<Dashboard />} />
              <Route exact path={PATHS.PREFERENCES} element={<></>} />
              <Route path={PATHS.ADMINPAGE} element={<></>} />
              <Route path="*" element={<Error />}/>
          </Routes>
        <Footer />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
