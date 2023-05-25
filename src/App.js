import React from "react";
import "./css/App.css";
import PortComposition from "./components/Portfolio/PortComposition";
import Theme from "./components/Theme/Theme";
import { Routes, Route, Outlet } from "react-router-dom";
import LandingPage from "./components/Portfolio/LandingPage";
import PortHeader from "./components/Portfolio/PortHeader";
import AssetAllocation from "./components/Theme/AssetAllocation";
import ViewTheme from "./components/Theme/ViewTheme";
import HomePage from "./components/OpeningPage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>

        <Route exact path="/landingpage" element={<LandingPage />}></Route>
        {/* <Route path='/' element={<LandingPage/>}></Route> */}
        <Route path="/portheader" element={<PortHeader />}></Route>
        <Route path="/portcomposition" element={<PortComposition />}></Route>
        <Route path="/theme" element={<Theme />}></Route>
        <Route path="/themeallocation" element={<AssetAllocation />}></Route>
        <Route path="/viewtheme" element={<ViewTheme />}></Route>
      </Routes>
    </div>
  );
}

export default App;
