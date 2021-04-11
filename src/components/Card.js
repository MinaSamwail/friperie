import React, { useEffect, useState } from "react";
import "../css/Card.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import apiHandler from "../api/apiHandler";

function Card(props) {
  const { title, price, picture } = props.location.query.vestiaire.vetement;
  const article = props.location.query.vestiaire.vetement;

  const addToCart = (article) => {
    apiHandler
      .transferArticle(article)
      .then((data) => {
        console.log(`data:`, data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card">
      <div className="card__picture">
        <Carousel>
          {picture.map((image) => {
            return <img key={image.index} src={image} alt={title} />;
          })}
        </Carousel>
      </div>
      <div className="card__description">
        <h2>{title}</h2>
        <h3>{price}€</h3>
        <input
          type="submit"
          value="Ajouter au panier"
          onClick={() => addToCart(article)}
        />
      </div>
    </div>
  );
}

export default Card;
