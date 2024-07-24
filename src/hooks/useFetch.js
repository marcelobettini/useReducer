import { useEffect, useState } from "react";
const base_url = "https://jsonplaceholder.typicode.com/";
export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = (endpoint) => {
    fetch(base_url + endpoint)
      .then((res) => {
        if (!res.ok) setError("Request Failed");
        return res.json();
      })
      .then((info) => {
        setData((prev) => (prev = info));
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() =>
        setTimeout(() => {
          setIsLoading(false);
        }, 2000)
      );
  };
  useEffect(() => {
    getData(endpoint);
  }, [endpoint]);

  return [data, isLoading, error];
};
