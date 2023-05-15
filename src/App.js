import React from "react";
import "./css/App.css";
import PortComposition from "./components/Portfolio/PortComposition";
import Theme from "./components/Portfolio/Theme";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/Portfolio/LandingPage";
import PortHeader from "./components/Portfolio/PortHeader";

function App() {
  return (
    <div className="App">
      <PortComposition />

      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        {/* <Route path='/' element={<LandingPage/>}></Route> */}
        <Route path="/portheader" element={<PortHeader />}></Route>
        <Route path="/portcomposition" element={<PortComposition />}></Route>
        <Route path="/theme" component={<Theme />}></Route>
      </Routes>
    </div>
  );
}

export default App;
