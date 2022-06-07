import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

export default function ProductDetail() {
  const { id } = useParams();
  const { isLoading, data, error, fetchData } = useFetch(`products/${id}`);
  return <h1>{isLoading ? "Loading..." : data.title}</h1>;
}
