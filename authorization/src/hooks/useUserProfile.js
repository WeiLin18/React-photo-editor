import { useEffect, useState } from "react";
import { getUserProfile } from "../utils";

// custom hook
export const useUserProfile = (userId) => {
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

    getUserProfile(userId)
      .then((res) => {
        console.log(res);
        setprofileState({
          isLoading: false,
          error: null,
          data: res
        });
        // console.log(res);
      })
      .catch((error) => {
        console.log(error);
        setprofileState({
          isLoading: false,
          error: error,
          data: null
        });
      });
  }, [userId]);

  return {
    isLoading: profileState.isLoading,
    error: profileState.error,
    userProfile: profileState.data
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
