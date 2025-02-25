import React from "react";
import "./Card.css";
import CardCarousel from "../CardCarousel/CardCarousel";

export function Card({ title, location, price, rating, images }) {
  return (
    <div className="card">
      <CardCarousel images={images} />
      <div className="card-Header">
        <h6>{title}</h6>
        <p>⭐ {rating}</p>
      </div>
      <div className="card-Body">
        <p className="card-text-location">{location}</p>
        <p>
          <strong>{price} COP </strong>
          noche
        </p>
      </div>
    </div>
  );
}
