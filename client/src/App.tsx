import { Box, VStack, Grid, useColorModeValue } from "@chakra-ui/react";
import "./App.css";

import Login from "./Components/Login/Login";
import { Route } from "react-router";
import Category from "./Components/Category/Category";
import Rules from "./Components/Quiz/Rules";
import PlayQuiz from "./Components/Quiz/PlayQuiz";
import FinalScore from "./Components/Quiz/FinalScore";
// import Multiplayer from "./Components/Multiplayer/MultiplayerRoom";
// import WaitingRoom from "./Components/Multiplayer/WaitingRoom";
import Header from "./Components/Header/Header";

export const App = () => {
  const bg = useColorModeValue(
    "gray.100",
    "linear-gradient(to right, #1d2e4e, #243b55)"
  );

  return (
    <Box textAlign='center' fontSize='xl' bg={bg}>
      <Grid minH='100vh'>
        <Header />
        <VStack spacing={8}>
          <Route exact path='/' component={Login} />
          <Route path='/categories' component={Category} />
          <Route path='/:category/rules' component={Rules} />
          {/* <Route path='/:category/rooms' component={Multiplayer} /> */}
          <Route path='/:category/play' component={PlayQuiz} />
          <Route path='/finalscore' component={FinalScore} />
          {/* <Route path='/:category/roomarea' component={WaitingRoom} /> */}
        </VStack>
      </Grid>
    </Box>
  );
};
