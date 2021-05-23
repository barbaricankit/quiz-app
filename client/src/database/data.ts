import {
  GetQuizData_Type,
  Network_Data_Type,
  Server_Error_Type,
} from "./data.type";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const url = process.env.URL;
console.log({ url });
export const getQuizData = async (): Promise<
  GetQuizData_Type | Server_Error_Type | []
> => {
  try {
    const {
      data: {
        success,
        quiz,
        categories: { category },
      },
    } = await axios.get<Network_Data_Type>(`${url}/quiz`);
    if (success) {
      return { quiz, category };
    } else {
      return [];
    }
  } catch (error) {
    return { errorCode: 500, message: "Something went wrong" };
  }
};
