import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <h1>Facebook Clone</h1>
      <Navbar />
      <div className="facebook">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
