import React, { useState } from "react";

export default function Categories({ activeFilter, filter, category }) {
  return (
    <div
      className={`category ${activeFilter === category ? "active" : ""}`}
      onClick={filter}
    >
      <p>{category}</p>
    </div>
  );
}

Categories.defaultProps = {
  activeFilter: "Hello",
  filter: "Hello2",
  category: "Hello3"
};
