import React, { useState } from "react";
import { signupNewMember, getUserList } from "../../utils";
import {
  Box,
  Flex,
  Button,
  FormControl,
  Input,
  useToast
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
const SignupPage = ({ onLogin, getThisUserInfo }) => {
  const defaultprofile = {
    email: "",
    username: "",
    password: ""
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profile, setProfile] = useState(defaultprofile);
  const handleAddProfileItem = (e) => {
    const profileItem = e.currentTarget.getAttribute("data-role");
    setProfile({ ...profile, [profileItem]: e.currentTarget.value.trim() });

    // console.log("inner", profile);
  };
  const toast = useToast();
  const history = useHistory();
  const handleStoreProfile = () => {
    let allInputsDone = true;
    const profileValues = Object.values(profile);
    profileValues.forEach((profileValue) => {
      if (profileValue === "") {
        allInputsDone = false;
      }
    });

    if (!allInputsDone) {
      console.log("請填完全");
    } else if (allInputsDone) {
      setIsSubmitting(true);
      signupNewMember(profile.email, profile.username, profile.password)
        .then((res) => {
          console.log(res);
          if (res.data.result) {
            toast({
              title: "Success!",
              description: "Welcome to the playground!",
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "top"
            });
            onLogin(res.data.result.authToken);
            return getUserList();
          } else {
            setIsSubmitting(false);
            throw new Error(res.data.message);
          }
        })
        .then((res) => {
          const usersList = res.data.result;
          // console.log(usersList);
          const thisUser = usersList.find(
            (user) => user.username === profile.username
          );
          getThisUserInfo(thisUser.id, thisUser.username);
          setProfile(defaultprofile);
          setIsSubmitting(false);
          history.push(`/users/${thisUser.id}`);
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <Box mx="auto" maxW="300px">
      <Flex as="nav" justifyContent="space-around" mb="10" px="4">
        <Link to="/login">
          <Button colorScheme="teal" variant="link">
            會員登入
          </Button>
        </Link>
        <Link to="/signup">
          <Button colorScheme="teal" bg="gray.100" variant="link">
            加入會員
          </Button>
        </Link>
      </Flex>
      <FormControl id="email">
        <Input
          type="email"
          placeholder="電子信箱"
          mb="5"
          w="100%"
          value={profile.email || ""}
          data-role="email"
          onChange={handleAddProfileItem}
        />
      </FormControl>
      <FormControl id="username">
        <Input
          type="text"
          placeholder="使用者名稱"
          mb="5"
          w="100%"
          value={profile.username || ""}
          data-role="username"
          onChange={handleAddProfileItem}
        />
      </FormControl>
      <FormControl id="password">
        <Input
          type="password"
          placeholder="密碼"
          mb="5"
          w="100%"
          value={profile.password || ""}
          data-role="password"
          onChange={handleAddProfileItem}
        />
      </FormControl>
      <Button
        isLoading={isSubmitting ? "Submitting" : ""}
        loadingText={isSubmitting ? "Submitting" : ""}
        colorScheme="teal"
        w="100%"
        onClick={handleStoreProfile}
      >
        加入
      </Button>
    </Box>
  );
};

export default SignupPage;
