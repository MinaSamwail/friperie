import React, { useState, useEffect } from "react";
import apiHandler from "../api/apiHandler";
import "../css/Panier.css";

function Panier() {
  // Afin de mettre un message
  //   const [panier, setPanier] = useState(true);

  //   function toggle() {
  //     setPanier(!panier);
  //   }

  const [articles, setArticles] = useState([]);
  // console.log("ART", articles);

  useEffect((allArticle) => {
    apiHandler.getArticle(allArticle).then((response) => {
      // console.log("RES", response);
      setArticles(response);
    });
  }, []);

  const handleDelete = (id) => {
    apiHandler
      .deleteArticle(id)
      .then((data) => {
        console.log("Data", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="panier">
      <h1>Panier</h1>
      <div className="panier__general">
        {articles.map((article) => {
          return (
            <div key={article._id} className="panier__description">
              <h1>{article.title}</h1>
              <button
                className="panier__deleteBtn"
                onClick={() => handleDelete(article._id)}
              >
                Delete this article
              </button>
            </div>
          );
        })}
      </div>
      {/* <h2 onClick={toggle}>
        <div className="toggle">
          {panier ? <span>Ton panier est vide</span> : <span>No! 👎</span>}
        </div>
      </h2> */}
    </div>
  );
}

export default Panier;
