import { Mongo } from "meteor/mongo";

export const todoContainer = new Mongo.Collection("todos");
