import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import Auth from "./Pages/Login/Login";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Register from "./Pages/Register/Register";
import ClipLoader from "react-spinners/ClipLoader";
import { useContext, useEffect, useState } from "react";
import Hello from "./components/Welcome/Hello";
import Header from "./components/Header/Header";

import Home from "./Pages/home/Home";
import OpenPhoto from "./components/OpenPhoto/OpenPhoto";
import ArticlcePosts from "./components/ArticlcePosts/ArticlcePosts";
import Articlces from "./components/Articlces/Articlces";
import ArticleAndSearches from "./components/ArticleAndSearches/ArticleAndSearches";
import Searches from "./components/Searches/Searches";
import Contects from "./components/Contects/Contects";
import PortfolioJob from "./components/PortfolioJob/PortfolioJob";

function App() {
  let [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 000);
  // }, []);

  return (
    <div>
      {loading ? (
        <Hello />
      ) : (
        <Routes>
          <Route element={<Home />} path="/home" />
          {/* <Route
            element={<ArticleAndSearches />}
            path="/home/article-and-searches"
          /> */}
          <Route element={<Welcome />} path="/" />
          <Route element={<Register />} path="/register" />
          <Route element={<Auth />} path="/login" />
          <Route element={<ForgetPassword />} path="/ForgetPassword" />
          <Route element={<OpenPhoto />} path="/photo" />
          <Route element={<Articlces />} path="/articlces" />
          <Route element={<Searches />} path="/searches" />
          <Route element={<Home />} path="/contact/:id" />
          <Route element={<Home />} path="/portfolioJob/:id" />
          <Route element={<Home />} path="/frindes-page" />
          <Route element={<Home />} path="/portfolio/:id" />
          <Route element={<Home />} path="/settings" />
        </Routes>
      )}
    </div>
  );
}

export default App;
