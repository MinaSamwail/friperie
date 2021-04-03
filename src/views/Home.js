import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import vetement1 from "../images/IMG_2593.jpg";
import "../css/Home.css";

function Home() {
  let vetement = ["../images/IMG_2593.jpg", "../images/IMG_2592.jpeg"];

  return (
    <div className="home">
      <Banner />

      <Link
        className="home__link"
        to={{
          pathname: `/details`,
          query: {
            title: "Veste",
            price: "Prix: 10€",
            avaibility: "Piece disponible: 1",
            images: vetement,
          },
        }}
      >
        <img className="home__icon" src={vetement1} alt={vetement.name} />
        <div className="overlay">
          <p className="text-bloc">10€</p>
          <p className="text">vetement</p>
        </div>
      </Link>

      <Link
        className="home__link"
        to={{
          pathname: `/details`,
          query: {
            title: "Veste",
            price: "Prix: 10€",
            avaibility: "Piece disponible: 1",
            images: vetement,
          },
        }}
      >
        <img className="home__icon" src={vetement1} alt={vetement.name} />
        <div className="overlay">
          <p className="text-bloc">10€</p>
          <p className="text">vetement</p>
        </div>
      </Link>
    </div>
  );
}

export default Home;
