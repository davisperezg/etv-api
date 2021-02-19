import { Response, RequestHandler } from "express";
import Plans from "../models/Plans";

export const findPlans: RequestHandler = async (req, res) => {
  const allPLans = await Plans.find().select("name").select("createdAt");
  return res.status(200).json(allPLans);
};
