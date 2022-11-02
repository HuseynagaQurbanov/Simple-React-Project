import React from "react";

const Card = (p) => {
  return (
    <div className="card">
      <img src={p.cardImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{p.cardTitle}</h5>
        <p className="card-text">{p.cardDesc}</p>
        <p className="card-text">
          <small className="text-muted">{p.lastUpdatedTime}</small>
        </p>
      </div>
    </div>
  );
};


export default Card;
