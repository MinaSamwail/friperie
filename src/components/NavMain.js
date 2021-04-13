import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { IconButton } from "@material-ui/core";
import "../css/NavMain.css";

// la
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";

function NavMain(props) {
  const [hover, setHover] = useState(false);
  const toggleHover = () => setHover(!hover);

  const { context } = props;
  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="navMain">
      <div className="navMain__up">
        <Link to="/">
          <h1>Kind of Cool - Friperie en Ligne</h1>
        </Link>
        {/* la */}
        <ul className="nav-list">
          {context.isLoggedIn && (
            <React.Fragment>
              <li>
                <NavLink to="/profile">
                  {context.user && context.user.email}
                </NavLink>
              </li>
              <li>
                <p onClick={handleLogout}>Logout</p>
              </li>
            </React.Fragment>
          )}
          {!context.isLoggedIn && (
            <React.Fragment>
              <li>
                <NavLink to="/signin">Log in</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Create account</NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
        {/* a la  */}
        <Link to="/panier">
          <IconButton edge="start" color="inherit">
            <LocalMallIcon fontSize="large" />
          </IconButton>
        </Link>
      </div>

      <div className="navMain__down">
        <NavLink to="/vetements">
          <h2 onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
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

// export default NavMain;
export default withUser(NavMain);
