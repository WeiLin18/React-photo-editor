import React from "react";
import { Box, Image } from "@chakra-ui/react";
const HeroCard = ({ id, name, image, onEditing, onEdit }) => {
  return (
    <Box
      maxW="200px"
      borderWidth={onEditing === true ? "3px" : "1px"}
      borderRadius="lg"
      onClick={() => onEdit && onEdit(id)}
    >
      <Image src={image} alt={name} />
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

export default HeroCard;
