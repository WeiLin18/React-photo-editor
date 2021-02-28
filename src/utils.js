import axios from "axios";

export const getUserProfile = async (userId) => {
  const { data } = await axios.get(
    `https://weblab-react-special-midtern.herokuapp.com/v1/users/${userId}`
  );
  return data.result;
};

export const getUserList = async () => {
  const userList = await axios.get(
    `https://weblab-react-special-midtern.herokuapp.com/v1/users/`
  );
  return userList;
};

export const loginTheMember = async (username, password) => {
  const storeTheMember = await axios.post(
    `https://api.weblab.tw/v1/auth/general-login`,
    {
      appId: "weblab",
      account: username,
      password: password
    }
  );
  // console.log(storeTheMember, "login");
  return storeTheMember;
};

export const signupNewMember = async (email, username, password) => {
  const storeNewMember = await axios.post(
    `https://api.weblab.tw/v1/auth/register`,
    {
      appId: "weblab",
      email: email,
      username: username,
      password: password
    }
  );

  return storeNewMember;
};

export const deleteTheMember = async (userId, authToken) => {
  const headers = {
    Authorization: `Bearer ${authToken}`
  };
  const storeTheMember = await axios.delete(
    `https://weblab-react-special-midtern.herokuapp.com/v1/users/${userId}`,
    { headers }
  );
  return storeTheMember;
};

export const updateTheMember = async (
  userId,
  username,
  description,
  pictureUrl,
  authToken
) => {
  const headers = {
    Authorization: `Bearer ${authToken}`
  };
  const storeTheMember = await axios.post(
    `https://weblab-react-special-midtern.herokuapp.com/v1/users/${userId}`,
    {
      username: username,
      description: description,
      pictureUrl: pictureUrl
    },
    { headers }
  );
  return storeTheMember;
};
