import { Box, VStack, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Login from "./Components/Login/Login";
import { Route } from "react-router";
import Category from "./Components/Category/Category";
import Rules from "./Components/Quiz/Rules";
import PlayQuiz from "./Components/Quiz/PlayQuiz";
import FinalScore from "./Components/Quiz/FinalScore";

export const App = () => {
  return (
    <Box textAlign='center' fontSize='xl'>
      <Grid minH='100vh' p={3}>
        <ColorModeSwitcher justifySelf='flex-end' />
        <VStack spacing={8}>
          <Route exact path='/' component={Login} />
          <Route path='/categories' component={Category} />
          <Route path='/:category/rules' component={Rules} />

          <Route path='/:category/play' component={PlayQuiz} />
          <Route path='/finalscore' component={FinalScore} />
        </VStack>
      </Grid>
    </Box>
  );
};
