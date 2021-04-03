import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { IconButton } from "@material-ui/core";
import "../css/NavMain.css";

function NavMain() {
  const [hover, setHover] = useState(false);

  const toggleHover = () => setHover(!hover);

  return (
    <div className="navMain">
      <div className="navMain__up">
        <Link to="/">
          <h1>Kind of Cool - Friperie en Ligne</h1>
        </Link>
        <IconButton edge="start" color="inherit">
          <LocalMallIcon fontSize="large" />
        </IconButton>
      </div>

      <div className="navMain__down">
        <NavLink to="/vetements">
          <h2
            // className='navMain__'
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            Kind Of Cool - Clothes
          </h2>
        </NavLink>

        <NavLink to="/accessoires">
          <h2>Kind Of Cool - Stuff</h2>
        </NavLink>

        <NavLink to="/creation">
          <h2>Kind Of Cool - Creators</h2>
        </NavLink>
      </div>
      <div className="navMain__sousCategories">
        <NavLink to="/haut">
          <div>{hover ? <p>Haut</p> : ""}</div>
        </NavLink>
        <NavLink to="/bas">
          <div>{hover ? <p>Bas</p> : ""}</div>
        </NavLink>
      </div>
    </div>
  );
}

export default NavMain;
