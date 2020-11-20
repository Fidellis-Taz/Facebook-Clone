import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Posts from "./components/Post";

function App() {
  return (
    <div className="App">
      <h1>Facebook Clone</h1>
      <Navbar />
      <div className="facebook">
        <SideBar />
        <Posts />
      </div>
    </div>
  );
}

export default App;
