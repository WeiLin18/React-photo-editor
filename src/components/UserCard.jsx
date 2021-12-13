import React from "react";
import { Box, Image } from "@chakra-ui/react";
const UserCard = ({ name, image }) => {
  return (
    <Box maxW="200px" p="2" borderWidth="1px" borderRadius="lg">
      <Box w="100px" h="100px">
        <Image borderRadius="50%" src={image} alt={name} />
      </Box>
      <Box
        p="2"
        d="flex"
        alignItems="center"
        justifyContent="space-around"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
      >
        {name}
      </Box>
    </Box>
  );
};

export default UserCard;
