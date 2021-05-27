import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useState,
} from "react";
import { io } from "socket.io-client";
import dotenv from "dotenv";
dotenv.config();
const url = process.env.REACT_APP_URL;
type SocketContextType = {
  websocket: any;
  userId: string;
  roomId: string;
  setRoomId: Dispatch<string>;
};
type User_Id_Type = {
  userId: string;
};
const SocketContext = createContext({});
export const SocketProvider = ({ children }: any) => {
  const [websocket, setWebSocket] = useState<any>();
  const [userId, setUserId] = useState<string>();
  const [roomId, setRoomId] = useState<string>("");
  useEffect(() => {
    const socket = io(url!);

    socket.on("connection", () => {});
    socket.on("user id", (data: User_Id_Type) => {
      setUserId(data.userId);
    });
    setWebSocket(socket);
  }, []);
  return (
    <SocketContext.Provider value={{ websocket, userId, roomId, setRoomId }}>
      {children}
    </SocketContext.Provider>
  );
};
export const useSocket = () => useContext(SocketContext) as SocketContextType;
