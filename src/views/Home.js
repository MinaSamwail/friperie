import React, { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import "../css/Home.css";
import vestiaire from "../data/vestiaire.json";

function Home() {
  const [vestiaires, setVestiaire] = useState(vestiaire);

  return (
    <div className="home">
      <Banner />
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
