import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { IconButton } from "@material-ui/core";
import "../css/NavMain.css";

import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";

// TEST
// import { getCardItems } from "../module/logique";
// import cartContext from "../module/cart-context";

function NavMain(props) {
  // const [hover, setHover] = useState(false);
  // const toggleHover = () => setHover(!hover);

  //TEST
  const [panier, setPanier] = useState([]);
  const addToCart = (product) => {
    setPanier((prev) => [...prev, product]);
  };
  // useEffect(() => {
  //   addToCart();
  // }, [panier]);

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

        {context.isLoggedIn && (
          <React.Fragment>
            <h3>
              <NavLink to="/panier">
                {context.user && context.user.email}
              </NavLink>
            </h3>

            <h3 onClick={handleLogout}>Logout</h3>
          </React.Fragment>
        )}
        {!context.isLoggedIn && (
          <React.Fragment>
            <h3>
              <NavLink to="/signin">Log in</NavLink>
            </h3>
            <h3>
              <NavLink to="/signup">Create account</NavLink>
            </h3>
          </React.Fragment>
        )}

        <Link to="/panier">
          <IconButton edge="start" color="inherit">
            <LocalMallIcon fontSize="large" />
          </IconButton>
          {/* ({getCardItems().length}) */}
        </Link>
      </div>

      <div className="navMain__down">
        <NavLink to="/vetements">
          {/* <h2 onMouseEnter={toggleHover} onMouseLeave={toggleHover}> */}
          <h2>Kind Of Cool - Clothes</h2>
          {/* </h2> */}
        </NavLink>

        <NavLink to="/accessoires">
          <h2>Kind Of Cool - Stuff</h2>
        </NavLink>

        <NavLink to="/creation">
          <h2>Kind Of Cool - Creators</h2>
        </NavLink>
      </div>
      {/* <div className="navMain__sousCategories">
        <NavLink to="/haut">
          <div>{hover ? <p>Haut</p> : ""}</div>
        </NavLink>
        <NavLink to="/bas">
          <div>{hover ? <p>Bas</p> : ""}</div>
        </NavLink>
      </div> */}
    </div>
  );
}

// export default NavMain;
export default withUser(NavMain);
