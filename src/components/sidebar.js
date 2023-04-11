import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCog,
  FaRedo,
  FaCalculator,
  FaFont,
  FaList,
  FaDatabase,
  FaPython
} from "react-icons/fa";
import { MdFunctions } from "react-icons/md";
import LogicSubmenu from "./menu/logic";

import "../css/sidebar.css";

const Sidebar = () => {
  const [showLogicSubmenu, setLogicShowSubmenu] = useState(false);
  const toggleSubmenu = () => {
    setLogicShowSubmenu(!showLogicSubmenu);
  };
  return (
    <div className="sidebar">
      <Link to="#" className="sidebar-button">
        <div className="sidebar-pill" onClick={toggleSubmenu}>
          <FaCog className="sidebar-icon" />
          Logic
        </div>
        {showLogicSubmenu && <LogicSubmenu />}
      </Link>
      <Link to="#" className="sidebar-button">
        <div className="sidebar-pill">
          <FaRedo className="sidebar-icon" />
          Loops
        </div>
      </Link>
      <Link to="#" className="sidebar-button">
        <div className="sidebar-pill">
          <FaCalculator className="sidebar-icon" />
          Math
        </div>
      </Link>
      <Link to="#" className="sidebar-button">
        <div className="sidebar-pill">
          <FaFont className="sidebar-icon" />
          Text
        </div>
      </Link>
      <Link to="#" className="sidebar-button">
        <div className="sidebar-pill">
          <FaList className="sidebar-icon" />
          Lists
        </div>
      </Link>
      <Link to="#" className="sidebar-button">
        <div className="sidebar-pill">
          <FaDatabase className="sidebar-icon" />
          Variables
        </div>
      </Link>
      <Link to="#" className="sidebar-button">
        <div className="sidebar-pill">
          <MdFunctions className="sidebar-icon" />
          Functions
        </div>
      </Link>
      <Link to="#" className="sidebar-button">
        <div className="sidebar-pill">
          <FaPython className="sidebar-icon" />
          Python
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
