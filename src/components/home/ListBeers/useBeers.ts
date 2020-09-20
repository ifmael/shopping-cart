import { useState, useEffect } from "react";
import IBeer from "models/IBeer";
import API from "config/api";

function useBeers(): IBeer[][] {
  const [beers, setBeers]:IBeer[] | any[] = useState<IBeer[] | any[]>([]);

  useEffect(() => {
    const getBeers = async () => {
      try {
        const beersRaw: Response = await fetch(API);
        const randomBeers: any[] = await beersRaw.json();
        const beersFiltered:IBeer[] = randomBeers.map(({id, name, image_url}:IBeer):IBeer => {
          return {id, name, image_url};
        });

        setBeers(beersFiltered);
      } catch (error) {
        console.log(error);
      }
    };
    getBeers();
  }, []);

  return [ beers ];
}

export default useBeers;
