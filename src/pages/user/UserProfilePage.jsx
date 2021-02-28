import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Image,
  SkeletonCircle,
  SkeletonText,
  useToast,
  Text,
  Input,
  Textarea
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useUserProfile } from "../../hooks/useUserProfile";
import { deleteTheMember, updateTheMember, getUserProfile } from "../../utils";

const UserProfilePage = ({
  ondelete,
  onupdateUserName,
  loginUserState,
  loginUserInfo
}) => {
  const { userId } = useParams();
  const { userProfile, error } = useUserProfile(userId);
  const [thisUserProfile, setthisUserProfile] = useState(null);
  const [isOnEditing, setIsOnEditing] = useState(false);
  const [updateProfile, setupdateProfile] = useState(null);
  useEffect(() => {
    setthisUserProfile(userProfile);
    setupdateProfile(userProfile);
  }, [userProfile]);
  // console.log(loginUserState);
  // console.log(userProfile);

  const getImageUrl = () => {
    if (!thisUserProfile) {
      return "https://picsum.photos/id/237/200/200";
    } else if (thisUserProfile.picture_url === null) {
      // console.log("picture_url === null");
      return "https://picsum.photos/id/237/200/200";
    } else {
      return thisUserProfile.picture_url;
    }
  };
  const toast = useToast();

  const hadleEdit = () => {
    if (loginUserState.isLogin === false) {
      alert("請先登入");
    } else if (loginUserInfo.userId !== userId) {
      alert("你沒權限編輯此人");
    } else {
      setIsOnEditing(true);

      // console.log(updateProfile, "init");
    }
  };
  const handleAddProfileItem = (e) => {
    const profileItem = e.currentTarget.getAttribute("data-role");
    setupdateProfile({
      ...updateProfile,
      [profileItem]: e.currentTarget.value
    });
    // console.log(updateProfile);
  };

  const hanleFileChange = (e) => {
    let file = e.currentTarget.files[0];
    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener("load", function () {
      setupdateProfile({
        ...updateProfile,
        picture_url: readFile.result
      });
      // console.log(file);
    });
  };
  const handleUpdate = () => {
    updateTheMember(
      userId,
      updateProfile.username,
      updateProfile.description,
      updateProfile.pictureUrl,
      loginUserState.authToken
    )
      .then((res) => {
        console.log(res);
        if (res.data.result) {
          toast({
            title: "Successfully update the profile!",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top"
          });
          return getUserProfile(userId);
        } else {
          throw new Error(res.data.message);
        }
      })
      .then((res) => {
        setthisUserProfile(res);
        setupdateProfile(res);
        onupdateUserName(userId, res.username);
        setIsOnEditing(false);
      })
      .catch((err) => {
        alert(err);
      });
    // userId,
    // username,
    // description,
    // pictureUrl,
    // authToken
  };
  const handleDelete = () => {
    if (loginUserState.isLogin === false) {
      alert("請先登入");
    } else if (loginUserInfo.userId !== userId) {
      alert("你沒權限刪除此人");
    } else if (loginUserState.isLogin && confirm("確定刪除？")) {
      deleteTheMember(userId, loginUserState.authToken)
        .then((res) => {
          console.log(res);
          toast({
            title: "Successfully delete the member!",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top"
          });
          ondelete && ondelete();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  if (!userProfile) {
    return (
      <Box maxW="400px" padding="6" boxShadow="lg" bg="white" mx="auto">
        <SkeletonCircle size="10" mx="auto" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    );
  } else if (error) {
    return (
      <Box p="10" textAlign="center">
        {error.message}
      </Box>
    );
  }
  if (isOnEditing) {
    return (
      <Box maxW="400px" borderRadius="lg" mx="auto" textAlign="center">
        <Image
          mx="auto"
          borderRadius="50%"
          src={
            updateProfile.pictureUrl || "https://picsum.photos/id/237/200/200"
          }
          mb="2"
        />

        <input type="file" onChange={hanleFileChange} />
        <Text>上限300kb</Text>
        <Input
          type="text"
          placeholder="使用者名稱"
          mb="5"
          w="100%"
          value={updateProfile.username || ""}
          data-role="username"
          onChange={handleAddProfileItem}
        />
        <Textarea
          placeholder="Here is a sample placeholder"
          value={updateProfile.description || ""}
          data-role="description"
          onChange={handleAddProfileItem}
        />

        <Button
          colorScheme="teal"
          variant="outline"
          mr="5"
          onClick={() => {
            setIsOnEditing(false);
          }}
        >
          取消
        </Button>
        <Button colorScheme="teal" variant="solid" onClick={handleUpdate}>
          儲存
        </Button>
      </Box>
    );
  }
  return (
    <Box maxW="400px" borderRadius="lg" mx="auto" textAlign="center">
      <Image mx="auto" borderRadius="50%" src={getImageUrl()} />
      <Box as="h2" p="2" fontWeight="semibold" textAlign="center">
        {thisUserProfile && thisUserProfile.username}
      </Box>

      <Box as="p" textAlign="center" mb="5">
        {thisUserProfile && thisUserProfile.description}
      </Box>
      <Button colorScheme="teal" variant="outline" mr="5" onClick={hadleEdit}>
        編輯
      </Button>
      <Button colorScheme="red" variant="link" onClick={handleDelete}>
        刪除此會員
      </Button>
    </Box>
  );
};

export default UserProfilePage;
