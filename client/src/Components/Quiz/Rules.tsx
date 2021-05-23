import { Flex, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/layout";

import PlayOptions from "./PlayOptions";

const Rules = () => {
  return (
    <Flex
      align='left'
      direction='column'
      boxShadow='dark-lg'
      p='6'
      rounded='md'>
      <VStack>
        <Text fontSize='2xl' mb={3} color='gray.500'>
          Rules
        </Text>
      </VStack>
      <VStack>
        <UnorderedList>
          <ListItem fontSize='md' textAlign='left'>
            There are 10 questions in this quiz.
          </ListItem>
          <ListItem fontSize='md' textAlign='left'>
            Each question will have only one correct answer.
          </ListItem>
          <ListItem fontSize='md' textAlign='left'>
            You will have 10 seconds to answer each question.
          </ListItem>
          <ListItem fontSize='md' textAlign='left'>
            For each correct answer you will get 1 point.
          </ListItem>
          <ListItem fontSize='md' textAlign='left'>
            There are 5 bonus questions, if you answer correct you will get 2
            points.
          </ListItem>
          <ListItem fontSize='md' textAlign='left'>
            For bonus questions, if you answer incorrect you will get -1 points.
          </ListItem>
          <ListItem fontSize='md' textAlign='left'>
            There is no negative points for the non bonus questions.
          </ListItem>
          <ListItem fontSize='md' textAlign='left'>
            If you skip the question there will be no negative points.
          </ListItem>
          <ListItem fontSize='md' textAlign='left'>
            The quiz is of total 15 points. Let's see how much you can score.
          </ListItem>
        </UnorderedList>
      </VStack>
      <VStack mt={6}>
        <PlayOptions />
      </VStack>
    </Flex>
  );
};

export default Rules;
