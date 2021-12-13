import React, { useState } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./pages/layout/Header";
import LoginPage from "./pages/LoginAndSignup/LoginPage";
import SignupPage from "./pages/LoginAndSignup/SignupPage";
import UserListPage from "./pages/user/UserListPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import "./style.css";
// reach router
export default function App() {
  const defaultLoginState = {
    isLogin: false,
    authToken: ""
  };
  const defaultLoginInfo = {
    userId: "",
    userName: ""
  };
  const [loginState, setLoginState] = useState(defaultLoginState);
  const [loginInfo, setLoginInfo] = useState(defaultLoginInfo);
  const handleLogin = (theauthToken) => {
    setLoginState({
      isLogin: true,
      authToken: theauthToken
    });
  };
  const handleUserInfo = (thisUserId, thisUserName) => {
    setLoginInfo({
      userId: thisUserId,
      userName: thisUserName
    });
  };
  const handleClearLogin = () => {
    setLoginState({
      isLogin: false,
      authToken: ""
    });
    setLoginInfo({
      userId: "",
      userName: ""
    });
    // history.push(`/users/`);
    // console.log("logOut");
  };
  // console.log(loginUserId);
  // console.log(loginState);
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Header loginUserInfo={loginInfo} onLogOut={handleClearLogin} />
        <Box as="main" p="10">
          <Switch>
            <Route exact path="/">
              <h2>homepage</h2>
              <Redirect from="/" to="/users" />
            </Route>
            <Route path="/users" exact>
              <UserListPage />
            </Route>
            <Route path="/users/:userId">
              <UserProfilePage
                ondelete={handleClearLogin}
                loginUserState={loginState}
                loginUserInfo={loginInfo}
                onupdateUserName={handleUserInfo}
              />
            </Route>
            <Route path="/login">
              <LoginPage
                onLogin={handleLogin}
                getThisUserInfo={handleUserInfo}
              />
            </Route>
            <Route path="/signup">
              <SignupPage
                onLogin={handleLogin}
                getThisUserInfo={handleUserInfo}
              />
            </Route>
          </Switch>
        </Box>
      </ChakraProvider>
    </BrowserRouter>
  );
}
