import React from "react";
import "./Banner.css";
import { navigate } from "../../../Data/Navigation";
import { NavLink } from "react-router-dom";
import Frame from "../../../assets/Frame.svg";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <nav className="navigation">
          <div className="logo">
            <img src={Frame} alt="" />
          </div>
          {navigate.map((ref, id) => (
            <ul key={id}>
              <li>
                <NavLink to={ref.to}>{ref.path}</NavLink>
              </li>
            </ul>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Banner;
