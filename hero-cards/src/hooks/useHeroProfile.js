import { useEffect, useState } from "react";
import { getHeroProfile } from "../utils";

// {
//   str: 2,
//   int: 7,
//   agi: 9,
//   luk: 7
// }

// custom hook
export const useHeroProfile = (heroId) => {
  const [profileState, setprofileState] = useState({
    isLoading: false,
    error: null,
    data: null
  });

  useEffect(() => {
    setprofileState({
      isLoading: true,
      error: null,
      data: null
    });
    getHeroProfile(heroId)
      .then((res) => {
        setprofileState({
          isLoading: false,
          error: null,
          data: res
        });
      })
      .catch((error) => {
        console.log(error);
        setprofileState({
          isLoading: false,
          error: error,
          data: null
        });
      });
  }, [heroId]);

  return {
    isLoading: profileState.isLoading,
    error: profileState.error,
    heroProfile: profileState.data
    //   refetchUser: async () => {
    //     setIsLoading(true);
    //     getUser(userId)
    //       .then((data) => {
    //         setUser(data);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         setError(error);
    //       })
    //       .finally(() => setIsLoading(false));
    //   },
    //   updateUser: async (name, job) => {
    //     const res = await axios.put(`https://reqres.in/api/users/${userId}`, {
    //       name,
    //       job
    //     });
    //     return res;
    //   },
    //   deleteUser: async () => {
    //     // call delete user api
    //   }
  };
};
