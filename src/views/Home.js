import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import "../css/Home.css";
import vestiaire from "../data/vestiaire.json";

function Home() {
  const [vestiaires, setVestiaire] = useState(vestiaire);
  const [value, setValue] = useState("");

  const triPrixDecroissant = () => {
    const sortedUp = [...vestiaires].sort((articleA, articleB) => {
      console.log("articleA", articleA);
      return articleB.price - articleA.price;
    });
    setVestiaire(sortedUp);
  };

  const triPrixCroissant = () => {
    const sortedDown = [...vestiaires].sort((articleA, articleB) => {
      console.log("articleA", articleA);
      return articleA.price - articleB.price;
    });
    setVestiaire(sortedDown);
  };

  return (
    <div className="home">
      <Banner />
      <div onClick={triPrixDecroissant}>Trier par prix decroissant</div>
      <div onClick={triPrixCroissant}>Trier par prix croissant</div>

      {vestiaires.map((vetement) => (
        <Link
          key={vetement.id}
          className="home__link"
          to={{
            pathname: `/details`,
            query: {
              vestiaire: { vetement },
            },
          }}
        >
          <img
            className="home__icon"
            src={vetement.picture[0]}
            alt="vetement"
          />
          <div className="overlay">
            <p className="text-bloc">{vetement.price}€</p>
            <p className="text">{vetement.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
