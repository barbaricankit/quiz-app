import { Button } from "@chakra-ui/button";
import { Flex, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/layout";
import { useHistory, useParams } from "react-router";
type ParamType = {
  category: string;
};
const Rules = () => {
  const { category } = useParams<ParamType>();
  const history = useHistory();

  return (
    <Flex
      align='left'
      direction='column'
      boxShadow='dark-lg'
      p='6'
      rounded='md'>
      <VStack>
        <Text>Rules</Text>
      </VStack>
      <VStack>
        <UnorderedList>
          <ListItem fontSize='md' textAlign='left'>
            There are 10 questions in this quiz.
          </ListItem>
          <ListItem fontSize='md' textAlign='left'>
            You will have 10 sec to answer the question.
          </ListItem>
          <ListItem fontSize='md' textAlign='left'>
            If you answer correct you will get 1 points for the first 5
            question.
          </ListItem>
          <ListItem fontSize='md' textAlign='left'>
            If you answer correct you will get 2 points for the last 5 question.
          </ListItem>
          <ListItem fontSize='md' textAlign='left'>
            There is no negative points for the first 5 question.
          </ListItem>
          <ListItem fontSize='md' textAlign='left'>
            If you answer incorrect you will get -1 points for the last 5
            question.
          </ListItem>
        </UnorderedList>
      </VStack>
      <VStack>
        <Button mt={2} onClick={() => history.push(`/${category}/play`)}>
          Let's Play
        </Button>
      </VStack>
    </Flex>
  );
};

export default Rules;
