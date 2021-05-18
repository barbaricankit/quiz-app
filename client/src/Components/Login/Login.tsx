import React from "react";
import { Button } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";
import { Input } from "@chakra-ui/input";

const Login = () => {
  const {
    quizdispatch,
    quizstate: { username },
  } = useQuiz();
  const [userName, setUserName] = useState<string>(username);

  return (
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
              disabled={userName ? false : true}
              onClick={() =>
                quizdispatch({ type: "SET_USERNAME", value: userName })
              }>
              Submit
            </Button>
          </Box>
        </Link>
      </Flex>
    </Flex>
  );
};
export default Login;
