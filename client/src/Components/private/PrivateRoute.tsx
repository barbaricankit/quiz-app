import { useEffect } from 'react'
import {
  useAuth,
  useHistory,
  Redirect,
  Route,
  setupAuthHeader,
  verifyToken,
} from '.'

export type PrivateRoute_Prop_Type = {
  component: React.FC
  path: string
  exact?: boolean
}
const PrivateRoute = ({ path, ...props }: PrivateRoute_Prop_Type) => {
  const {
    authState: { token },
    authDispatch: dispatch,
  } = useAuth()
  const history = useHistory()
  const savedToken = JSON.parse(localStorage?.getItem('token') || ' null')
  console.log({ savedToken, token })
  setupAuthHeader(savedToken)
  useEffect(() => {
    ;(async () => {
      if (savedToken && !token) {
        const { username, token } = await verifyToken()
        console.log({ username })
        if (username) {
          dispatch({ type: 'SET_USERNAME', payload: { username } })
          dispatch({ type: 'SET_TOKEN', payload: { token } })
          history.push({ pathname: '/' })
          console.log('Called 33')
        } else {
          history.push({ pathname: '/login' })
          console.log('Called 36')
        }
      } else if (!savedToken && !token) {
        console.log('Called 37')
        history.push({ pathname: '/login' })
      }
    })()
    //eslint-disable-next-line
  }, [])

  return token || savedToken ? (
    <Route {...props} path={path} />
  ) : (
    <Redirect to="/login" />
  )
}
export default PrivateRoute
