import { useEffect, useState } from "react";
import { getUserList } from "../utils";

// {
// 	"code":"SUCCESS",
// 	"message":"get member list successfully",
// 	"result":[
// 		{
// 			"id":"24ef6092-7dde-4455-8910-55b820544bbc",
// 			"username":"ken",
// 			"picture_url":null
// 		},
// 		{
// 			"id":"2bfdfd24-732a-43c8-8aa8-722e4b521941",
// 			"username":"Web 實驗室",
// 			"picture_url":"https://static.kolable.com/avatars/weblab/2bfdfd24-732a-43c8-8aa8-722e4b521941"
// 		}
// 	]
// }

// custom hook
export const useUserList = () => {
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
    getUserList()
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
    userList: listState.data
  };
};
