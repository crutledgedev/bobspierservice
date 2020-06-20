import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Navbar from "./components/NavBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <Body />
      </Route>
      <Route path="/gallery">
        <Gallery />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
