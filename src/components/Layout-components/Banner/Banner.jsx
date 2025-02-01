import React from "react";
import "./Banner.css";
import Button from '../../Reuseable-components/Button/Button'
import { navigate } from "../../../Data/Navigation";
import { NavLink } from "react-router-dom";
import Frame from "../../../assets/Frame.svg";
import Group from '../../../assets/Group.svg'
const Banner = () => {
  return (
    <div className="banner">
      
        <nav className="navigation">
          <div className="logo">
            <img src={Frame} alt="" width={80} />
          </div>
         <div className="refs">
         {navigate.map((ref, id) => (
            <ul key={id} >
              <li>
                <NavLink to={ref.to}>{ref.path}</NavLink>
              </li>
            </ul>
          ))}
         </div>
        </nav>
      
        <div className="content">
        <small>We're here to help you</small>
        <h1>Relax & Rest</h1>
        <p>With the aid of our Melatonin Sleepstiq, we can assure you that you can get quality sleep.</p>
        <Button>Visit Shop</Button>
      </div>
          <img src={Group} alt="group png" />
    </div>
  );
};

export default Banner;
