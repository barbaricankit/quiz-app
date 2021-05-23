import React from "react";
import { Button } from "@chakra-ui/button";
import { Box, Flex, Text, VStack } from "@chakra-ui/layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";
import { Input } from "@chakra-ui/input";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Login = () => {
  const {
    quizdispatch,
    quizstate: { username },
  } = useQuiz();
  const [userName, setUserName] = useState<string>(username);
  const bg = useColorModeValue("#93EDC7", "#0d324d");
  const loginHandler = async () => {
    quizdispatch({ type: "SET_USERNAME", value: { userName } });
    localStorage.setItem("quizUser", JSON.stringify({ username: userName }));
  };
  return (
    <VStack>
      <Text fontSize='4xl' color='gray.500'>
        Welcome to CricoQuiz.
      </Text>
      <Text fontSize='lg'>
        Please enter a username to play different cricket quizzes.
      </Text>
      <Flex align='center' justify='center' className='login_page'>
        <Flex direction='row' justify='center' className='login_form'>
          <Box p={2}>
            <Input
              type='text'
              placeholder='Username'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Box>
          <Link to='/categories'>
            <Box p={2}>
              <Button
                bg={bg}
                disabled={userName ? false : true}
                onClick={() => loginHandler()}>
                Submit
              </Button>
            </Box>
          </Link>
        </Flex>
      </Flex>
    </VStack>
  );
};
export default Login;
