import { Button, useAuth, useHistory } from '.'

const Logout = ({ bg }: any) => {
  const { authDispatch: dispatch } = useAuth()
  const history = useHistory()
  const logoutUser = () => {
    localStorage.removeItem('token')
    dispatch({ type: 'RESET_ALL' })
    history.push('/login')
  }
  return (
    <Button bg={bg} m={2} onClick={() => logoutUser()}>
      Logout
    </Button>
  )
}

export default Logout
