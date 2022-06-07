import React from "react";
import { Link } from "react-router-dom";

export default function Product({ item }) {
  return (
    <div key={item.id} className="product">
      <Link to={`/${item.id}`}>{item.title}</Link>
      <img src={item.image} alt={item.title} />
      <span>Rating :{item.rating.rate} </span>
      <span> Rating count: {item.rating.count}</span>
    </div>
  );
}
