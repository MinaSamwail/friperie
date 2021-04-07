import React from "react";
import "../css/Card.css";
// import vetement1 from "../imgs/haut/IMG-2591.jpeg";

function Card(props) {
  console.log(props);
  // const { title, price, avaibility, images } = props.location.query;
  console.log(props.location.query.vestiaire.vestiaire);
  const { title, price, avaibility, images } = props.location.query.vestiaire;
  return (
    <div className="card">
      <div>
        {props.location.query.vestiaire.vestiaire.map((element) => {
          console.log(element);
          <img src={element.picture} />;
          {
            /* <h2>{title}</h2>
          <h3>{price}</h3>
          <h4>{avaibility}</h4>  */
          }
        })}
      </div>
    </div>
  );
}

export default Card;
