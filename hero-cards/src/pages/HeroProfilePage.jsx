import React, { useState, useEffect } from "react";
import { Box, Button, useToast } from "@chakra-ui/react";
import AbilityInput from "../components/AbilityInput";
import { useParams } from "react-router-dom";
import { useHeroProfile } from "../hooks/useHeroProfile";
import { updateHeroProfile } from "../utils";
// {
//   isLoading: false,
//   error: error,
//   data: null
// }

// {
//   str: 2,
//   int: 7,
//   agi: 9,
//   luk: 7
// }
const HeroProfilePage = () => {
  const { heroId } = useParams();
  const { heroProfile, error } = useHeroProfile(heroId);
  const [thepoint, setthepoint] = useState(0);
  const [theabilities, settheabilities] = useState(null);

  useEffect(() => {
    settheabilities(heroProfile);
  }, [heroProfile]);

  const toast = useToast();
  const handleStoreProfile = () => {
    updateHeroProfile(heroId, theabilities)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    toast({
      title: "Success!",
      description: "hero's abilities are stored",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top"
    });
  };

  const handleAdjust = (targetAbilityName, adjustOrder, currentPoint) => {
    if (adjustOrder === "up" && thepoint > 0) {
      setthepoint((prevpoints) => prevpoints - 1);
      settheabilities({
        ...theabilities,
        [targetAbilityName]: currentPoint + 1
      });
    } else if (adjustOrder === "down" && currentPoint > 0) {
      setthepoint((prevpoints) => prevpoints + 1);
      settheabilities({
        ...theabilities,
        [targetAbilityName]: currentPoint - 1
      });
    }
  };
  if (!heroProfile) {
    return (
      <Box p="10" textAlign="center">
        loading...
      </Box>
    );
  } else if (error) {
    return (
      <Box p="10" textAlign="center">
        {error.message}
      </Box>
    );
  }

  return (
    <Box
      mt="4"
      p="4"
      mx="auto"
      maxW="800px"
      borderWidth="1px"
      borderRadius="lg"
      d="flex"
      alignItems="flex-end"
    >
      <Box w="70%">
        {theabilities &&
          Object.keys(theabilities).map((ability, index) => {
            return (
              <AbilityInput
                key={index}
                name={ability}
                points={theabilities[ability]}
                onAdjust={handleAdjust}
              />
            );
          })}
      </Box>

      <Box w="30%" ml="auto" mr="10">
        <Box mb="6">
          剩餘點數:
          <Box as="span" ml="2">
            {thepoint}
          </Box>
        </Box>
        <Button
          mb="2"
          w="100%"
          borderWidth="1px"
          borderRadius="lg"
          colorScheme="teal"
          variant="solid"
          isDisabled={thepoint === 0 ? false : true}
          onClick={handleStoreProfile}
        >
          儲存
        </Button>
      </Box>
    </Box>
  );
};

export default HeroProfilePage;

// {
//   str: 2,
//   int: 7,
//   agi: 9,
//   luk: 7
// }
