import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  initialSocketValue,
  manageSocket,
} from '.'

import { Socket_Context_Type } from './socket-context.type'

export type User_Id_Type = {
  userId: string
}
const SocketContext = createContext({})
export const SocketProvider = ({ children }: any) => {
  const [socketState, socketDispatch] = useReducer(
    manageSocket,
    initialSocketValue,
  )

  useEffect(() => {}, [])
  return (
    <SocketContext.Provider value={{ socketState, socketDispatch }}>
      {children}
    </SocketContext.Provider>
  )
}
export const useSocket = () => useContext(SocketContext) as Socket_Context_Type
