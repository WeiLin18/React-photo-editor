import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HeroCard from "../components/HeroCard";
import { useHeroList } from "../hooks/useHeroList";
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
const HeroListPage = () => {
  const { heroList, error } = useHeroList();
  const [heroListState, setheroListState] = useState(null);
  const [theTargetUserId, settheTargetUserId] = useState("");

  useEffect(() => {
    setheroListState(heroList);
    console.log(heroList);
  }, [heroList]);

  const HandleEdit = (targetId) => {
    settheTargetUserId(targetId);
  };
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <Box d="flex" flexWrap="wrap" justifyContent="center">
      {heroListState ? "" : "loading"}
      {heroListState &&
        heroListState.data.map((hero, index) => (
          <Link key={index} to={`/heros/${Number(index) + 1}`}>
            <HeroCard
              name={hero.name}
              image={hero.image}
              id={hero.id}
              onEditing={hero.id === theTargetUserId}
              onEdit={HandleEdit}
            />
          </Link>
        ))}
    </Box>
  );
};

export default HeroListPage;
