import React from "react";
import "../css/Card.css";

function Card(props) {
  const { title, price, picture } = props.location.query.vestiaire.vetement;

  return (
    <div className="card">
      <div className="card__picture">
        {picture.map((image) => {
          return <img src={image} alt={title} />;
        })}
      </div>
      <div className="card__description">
        <h2>{title}</h2>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
