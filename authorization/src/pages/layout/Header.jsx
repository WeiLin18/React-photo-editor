import React from "react";
import { Flex, Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Header = ({ loginUserInfo, onLogOut }) => {
  // console.log(loginUserState, "header");
  const handleLogOut = () => {
    onLogOut && onLogOut();
  };
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Link to="/">
        <Box as="h1" fontSize="20px" fontWeight="600">
          Home
        </Box>
      </Link>

      <Link to={`/users/${loginUserInfo.userId}`}>
        <Text fontWeight="bold">{loginUserInfo.userName}</Text>
      </Link>
      {loginUserInfo.userId ? (
        // <Link to="/login">
        <Button
          bg="white"
          variant="solid"
          color="teal.500"
          onClick={handleLogOut}
        >
          登出
        </Button>
      ) : (
        <Link to="/login">
          <Button bg="white" variant="solid" color="teal.500">
            登入
          </Button>
        </Link>
      )}
    </Flex>
  );
};

export default Header;
