import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, Stack, Text } from "@chakra-ui/layout";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const Header = () => {
  const bg = useColorModeValue(
    "linear-gradient(to right, #159957, #155799);",
    "linear-gradient(to top, #1f2f3a, #201d40);"
  );
  return (
    <Stack p={3} h='3.5rem' bgGradient={bg} className=''>
      <Flex justifyContent='space-between'>
        <Text
          fontFamily="'Yanone Kaffeesatz', sans-serif;"
          fontSize='3xl'
          fontWeight='500'>
          CricoQuiz
        </Text>

        <ColorModeSwitcher />
      </Flex>
    </Stack>
  );
};

export default Header;
