import { useEffect, useState } from "react";
import { getHeroList } from "../utils";

// [
//   {
//       id: "1",
//       name: "Daredevil",
//       image: "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg"
//   },
//   {
//       id: "2",
//       name: "Thor",
//       image: "http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg"
//   },
//   ...
// ]

// custom hook
export const useHeroList = () => {
  const [listState, setListState] = useState({
    isLoading: false,
    error: null,
    data: null
  });

  useEffect(() => {
    setListState({
      isLoading: true,
      error: null,
      data: null
    });
    getHeroList()
      .then((res) => {
        setListState({
          isLoading: false,
          error: null,
          data: res
        });
      })
      .catch((error) => {
        console.log(error);
        setListState({
          isLoading: false,
          error: error,
          data: null
        });
      });
  }, []);

  return {
    isLoading: listState.isLoading,
    error: listState.error,
    heroList: listState.data
  };
};
