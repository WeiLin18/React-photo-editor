import React from "react";
import { Box, Button } from "@chakra-ui/react";

const AbilityInput = ({ name, points, onAdjust }) => {
  const handleAdjust = (e) => {
    const adjustOrder = e.target.dataset.role;
    onAdjust && onAdjust(name, adjustOrder, points);
  };
  return (
    <Box p="2" d="flex" alignItems="center" fontWeight="bold" as="h4">
      {name}
      <Button
        ml="auto"
        mr="6"
        borderWidth="1px"
        borderRadius="lg"
        onClick={handleAdjust}
        data-role="up"
      >
        +
      </Button>
      <Box as="span" w="25px" textAlign="center">
        {points}
      </Box>
      <Button
        mx="6"
        borderWidth="1px"
        borderRadius="lg"
        onClick={handleAdjust}
        data-role="down"
        isDisabled={points === 0 ? true : false}
      >
        -
      </Button>
    </Box>
  );
};

export default AbilityInput;

//   {
//     name: "STR",
//     point: 5
//   }
