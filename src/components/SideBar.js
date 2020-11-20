import React, { useState } from "react";
import "../App.css";
const SideBar = () => {
  const [state] = useState([
    { id: 1, image: "/images/fawad1.jpg", name: "Front-End Developer" },
    { id: 2, image: "/images/fawad2.jpg", name: "React Developer" },
    { id: 3, image: "/images/fawad3.jpg", name: "Javascript Developer" },
    { id: 4, image: "/images/fawad4.jpg", name: "Front-End Developer" },
    { id: 5, image: "/images/fawad1.jpg", name: "Front-End Developer" },
    { id: 6, image: "/images/fawad2.jpg", name: "Front-End Developer" },
  ]);
  return (
    <div className="sidebar">
      {state.map((item) => {
        return (
          <div className="sidebar__list" key={item.id}>
            <div className="sidebar__list-img">
              <img src={item.image} alt="group imag" />
            </div>
            <div className="sidebar__list-name">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
