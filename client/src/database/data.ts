import {
  Get_Quiz_Data_Type,
  Network_Data_Type,
  Server_Error_Type,
} from "./data.type";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getQuizData = async (): Promise<
  Get_Quiz_Data_Type | Server_Error_Type | []
> => {
  const url = process.env.REACT_APP_URL as string;
  try {
    const {
      data: {
        success,
        quiz,
        categories: { category },
      },
    } = await axios.get<Network_Data_Type>(`${url}quiz`);
    if (success) {
      return { quiz, category };
    } else {
      return [];
    }
  } catch (error) {
    return { errorCode: 500, message: "Something went wrong" };
  }
};
