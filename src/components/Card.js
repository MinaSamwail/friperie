import React from "react";
import "../css/Card.css";

function Card(props) {
  console.log("props", props.location.query.images[0]);
  const { title, price, avaibility, images } = props.location.query;
  return (
    <div className="card">
      {images.map((image) => {
        return <img className="project-picture" src={image} alt={title} />;
      })}

      <div className="card__info">
        <h2>{title}</h2>
        <h3>{price}</h3>
        <h4>{avaibility}</h4>
      </div>
    </div>
  );
}

export default Card;
