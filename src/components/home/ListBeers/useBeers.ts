import { useState, useEffect } from "react";
import API from "config/api";

function useBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getBeers = async () => {
      try {
        const beersRaw = await fetch(API);
        const randomBeers = await beersRaw.json();
        setBeers(randomBeers);
      } catch (error) {
        console.log(error);
      }
    };
    getBeers();
  }, []);

  return [beers];
}

export default useBeers;
