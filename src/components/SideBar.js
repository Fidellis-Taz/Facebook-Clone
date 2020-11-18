import React from "react";
import "../App.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <h1>SideBar</h1>
      <div className="sidebar__list">
        <div className="sidebar_list-img">
          <img src="/images/fawad1.jpg" alt="group imag" />
        </div>
        <div className="sidebar__list-name">React Native Developement</div>
      </div>
    </div>
  );
};

export default SideBar;
