import "./styles.css";
import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Product from "./components/Product";
import Categories from "./components/Categories";

function getAllCategories(products) {
  const categories = products.reduce(
    (categories, product) => categories.add(product.category),
    new Set()
  );
  return Array.from(categories);
}

export default function App() {
  const [displayData, setDisplayData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [limit, setLimit] = useState(5);
  const [activeFilter, setActiveFilter] = useState("");
  const { isLoading, data, error, fetchData } = useFetch(
    `products?limit=${limit}`
  );

  useEffect(() => {
    setCategories(getAllCategories(data));
    setDisplayData(data);
  }, [data]);

  useEffect(() => {
    fetchData(`products?limit=${limit}`);
  }, [limit]);

  function Filter(category) {
    setDisplayData(data.filter((product) => product.category === category));
    if (activeFilter === category) {
      setActiveFilter("");
      setDisplayData(data);
    } else {
      setActiveFilter(category);
    }
  }

  return (
    <div className="App">
      <div className="categories">
        {categories.map((category) => (
          <Categories
            key={category}
            activeFilter={activeFilter}
            filter={() => Filter(category)}
            category={category}
          />
        ))}
      </div>
      <div className="products">
        {displayData.map((product) => (
          <Product item={product} key={product.id} />
        ))}
      </div>
      <button
        className="loading--button"
        disabled={isLoading}
        onClick={() => setLimit((prevLimit) => prevLimit + 5)}
      >
        {isLoading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
}
