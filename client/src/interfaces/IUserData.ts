import { IParent as IUser } from "../../../src/models/user.model";
import { IChild } from "../../../src/models//child.model";

export interface IUserData {
  token: string;
  user?: IUser;
}

export interface IChildData {
  token: string;
  user?: IChild;
}
