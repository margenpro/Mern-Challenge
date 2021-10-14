import { Schema, model } from "mongoose";
import { UserSchema } from "./base.model"
import { IUser } from "./base.model";
import { IChild } from "./child.model";

export interface IParent extends IUser{
    childsQ: Number;
    childs: Array<IChild>;
  }

  const Parent: Schema = UserSchema.add({
    childsQ: {type: Number, required: false},
    childs: {type: Array, required: false}
  })

  export default model<IParent>("User", Parent)