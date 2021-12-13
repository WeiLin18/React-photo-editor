import React, { useEffect, useState } from "react";
import { Box, Progress } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import UserCard from "../../components/UserCard";
import { useUserList } from "../../hooks/useUserList";
// 	[
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
const UserListPage = () => {
  const { userList, error } = useUserList();
  const [UserListState, setUserListState] = useState(null);

  useEffect(() => {
    setUserListState(userList);
    // console.log(userList);
  }, [userList]);

  if (error) {
    return <div>{error.message}</div>;
  } else if (!UserListState) {
    return (
      <Box maxW="200px" mx="auto">
        <Box as="h2" mb="5" textAlign="center">
          loading
        </Box>
        <Progress size="xs" isIndeterminate />
      </Box>
    );
  }
  return (
    <Box d="flex" flexWrap="wrap" justifyContent="center">
      {UserListState &&
        UserListState.data.result.map((user) => (
          <Link to={`/users/${user.id}`} key={user.id}>
            <Box mb="2" mx="1">
              <UserCard
                name={user.username}
                image={
                  user.picture_url || "https://picsum.photos/id/237/200/200"
                }
              />
            </Box>
          </Link>
        ))}
    </Box>
  );
};

export default UserListPage;
