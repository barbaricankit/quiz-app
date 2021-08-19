import {
  Box,
  Flex,
  Text,
  VStack,
  Button,
  useColorModeValue,
  useAuth,
  useHistory,
} from '.'

const Login = () => {
  const history = useHistory()
  const bg = useColorModeValue('#93EDC7', '#0d324d')
  const {
    authState: { token },
  } = useAuth()
  return (
    <VStack>
      <Text fontSize="4xl" color="gray.500">
        Welcome to CricoQuiz.
      </Text>
      {!token && (
        <Box>
          <Text fontSize="lg">
            Please login to play different cricket quizzes.
          </Text>
          <Flex align="center" justify="center" className="login_page">
            <Flex direction="row" justify="center" className="login_form">
              <Box p={2}>
                <Button bg={bg} onClick={() => history.push('/signin')}>
                  SignIn
                </Button>
              </Box>
              <Box p={2}>
                <Button bg={bg} onClick={() => history.push('/signup')}>
                  SignUp
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Box>
      )}
      {/* {token && <Logout />} */}
    </VStack>
  )
}
export default Login
