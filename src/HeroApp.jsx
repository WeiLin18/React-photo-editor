import React from "react";
import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom";
import { ChakraProvider, Container } from "@chakra-ui/react";
import HeroProfilePage from "./pages/HeroProfilePage";
import HeroCollectionPage from "./pages/HeroCollectionPage";
import HeroListPage from "./pages/HeroListPage";

const HeroApp = () => {
  const { path } = useRouteMatch();
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Container maxW="900px" pt="5" bg="gray.100">
          <HeroListPage />
          <Switch>
            <Route path={path} exact>
              <HeroCollectionPage />
            </Route>
            <Route path={`${path}/:heroId`}>
              <HeroProfilePage />
            </Route>
          </Switch>
        </Container>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default HeroApp;
