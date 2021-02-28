import axios from "axios";

export const getHeroProfile = async (heroId) => {
  const heroProfile = await axios.get(
    `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`
  );
  return heroProfile.data;
};

// {
//   str: 2,
//   int: 7,
//   agi: 9,
//   luk: 7
// }
export const getHeroList = async () => {
  const heroList = await axios.get(
    `https://hahow-recruit.herokuapp.com/heroes`
  );
  return heroList;
};

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

export const updateHeroProfile = async (heroId, updatedHeroProfile) => {
  const headers = {
    "Content-Type": "application/json"
  };
  const updateProfile = await axios.patch(
    `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`,
    updatedHeroProfile,
    { headers }
  );
  return updateProfile;
};
