import { useEffect, useState } from "react";

const BASE_URL = "https://fakestoreapi.com/";

const DEFAULT_OPTIONS = {
  headers: {
    "Content-type": "application/json"
  }
};

export default function useFetch(endpoint, options = {}, deffered = false) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const fetchOptions = { ...DEFAULT_OPTIONS, ...options };
      const res = await fetch(BASE_URL + endpoint, fetchOptions);
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!deffered) {
      fetchData();
    }
  }, []);

  return { isLoading, data, error, fetchData };
}
