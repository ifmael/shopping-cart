import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBeersStore, setBeersStore } from "utils/beerSlice";
import IBeer from "models/IBeer";
import API from "config/api";

function useBeers(): IBeer[][] {
  const beersStore:IBeer[] | any[] = useSelector(getBeersStore);
  const dispatch = useDispatch();

  useEffect(() => {
    const getBeersFromAPI = async () => {
      try {
        const beersRaw: Response = await fetch(API);
        const randomBeers: any[] = await beersRaw.json();
        const beersFiltered:IBeer[] = randomBeers.map(({id, name, image_url}:IBeer):IBeer => {
          return {id, name, image_url};
        });

        dispatch(setBeersStore(beersFiltered));
      } catch (error) {
        console.log(error);
      }
    };

    if (beersStore && beersStore.length > 0) return;

    getBeersFromAPI();
  }, [beersStore, dispatch]);

  return [ beersStore ];
}

export default useBeers;
