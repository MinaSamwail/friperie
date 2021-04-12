import React, { useState, useEffect } from "react";
import apiHandler from "../api/apiHandler";
import "../css/Panier.css";

function Panier() {
  const [articles, setArticles] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  console.log("ARTICLES", articles);
  // CA
  useEffect(() => {
    total();
  }, [articles]);

  //CA
  const total = () => {
    console.log(articles);
    let totalVal = 0;
    for (let i = 0; i < articles.length; i++) {
      console.log("PRICE", articles[i].price);
      totalVal += articles[i].price;
    }
    setSubTotal(totalVal);
  };

  useEffect((allArticle) => {
    apiHandler.getArticle(allArticle).then((response) => {
      setArticles(response);
    });
  }, []);

  const handleDelete = (id) => {
    apiHandler
      .deleteArticle(id)
      .then((data) => {
        setArticles(articles.filter((article) => article._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="panier">
      <h1>Panier</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <div className="panier__general">
            {articles.map((article) => {
              return (
                <tr key={article._id}>
                  <td>
                    <img
                      style={{ width: 48, height: 48 }}
                      src={article.picture[0]}
                      alt={article.title}
                    />
                  </td>
                  <td>{article.title}</td>
                  <td>{article.price}</td>
                  <td>
                    <button
                      className="panier__deleteBtn"
                      onClick={() => handleDelete(article._id)}
                    >
                      Delete this article
                    </button>
                  </td>
                  <td>TOTAL : {subTotal}</td>
                </tr>
              );
            })}
          </div>
        </tbody>
      </table>
    </div>
  );
}

export default Panier;
