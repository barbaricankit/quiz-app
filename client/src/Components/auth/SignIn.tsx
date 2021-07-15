import {
  Box,
  Flex,
  Text,
  VStack,
  Button,
  useState,
  useColorModeValue,
  Username,
  Password,
  signIn,
  useAuth,
  useHistory,
} from '.'

import './login.css'
const SignIn = () => {
  const {
    authState: { username, password },
    authDispatch: dispatch,
  } = useAuth()
  const history = useHistory()
  const [error, setError] = useState<string | null>(null)
  const bg = useColorModeValue('#93EDC7', '#0d324d')
  const loginHandler = async () => {
    const data = await signIn({ username, password })
    if (data.token) {
      dispatch({ type: 'SET_TOKEN', payload: { token: data.token } })
      dispatch({ type: 'SET_USERNAME', payload: { username: data.username } })
      history.push('/')
      localStorage.setItem('token', JSON.stringify(data.token))
    } else {
      setError(data.message)
    }
  }
  return (
    <VStack>
      <Flex align="center" justify="center" className="login_page">
        <Flex direction="column" justify="center" className="login_form">
          <Username />
          <Password />

          <Text color="red" fontSize="md">
            {error}
          </Text>

          <Box p={2}>
            <Button
              bg={bg}
              disabled={username ? false : true}
              onClick={() => loginHandler()}
            >
              Submit
            </Button>
          </Box>
        </Flex>
      </Flex>
    </VStack>
  )
}
export default SignIn
