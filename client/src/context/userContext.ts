import React, { createContext } from "react";
import { IUserData } from "../interfaces/IUserData";

export default createContext<{
  userData: IUserData;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
} | null>(null);
