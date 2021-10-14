import { Schema, model } from "mongoose";
import { UserSchema } from "./base.model"
import { IUser } from "./base.model";

export interface IChild extends IUser {}

  const Child: Schema = UserSchema

  export default model<IChild>("Child", Child)