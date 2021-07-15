import { Flex, Button, Logout, useHistory, useColorModeValue } from '.'

const Home = () => {
  const history = useHistory()
  const bg = useColorModeValue(
    'linear-gradient(to right, #61e294, #0575e6)',
    'linear-gradient(to right, #005c97, #363795)',
  )
  return (
    <Flex flexDir="column">
      <Button bg={bg} m={2} onClick={() => history.push('/')}>
        Play
      </Button>
      <Logout bg={bg} />
    </Flex>
  )
}

export default Home
