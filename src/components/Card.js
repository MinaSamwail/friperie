import React from "react";
import "../css/Card.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Card(props) {
  const { title, price, picture } = props.location.query.vestiaire.vetement;

  return (
    <div className="card">
      <div className="card__picture">
        <Carousel>
          {picture.map((image) => {
            return <img src={image} alt={title} />;
          })}
        </Carousel>
      </div>
      <div className="card__description">
        <h2>{title}</h2>
        <h3>{price}</h3>
        <button className="card__btn">Ajouter au panier</button>
      </div>
    </div>
  );
}

export default Card;
