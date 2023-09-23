// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../entities/User";

type UserType = {
  name: string;
  menssage: string;
  age: number;
  setName: (name: string) => void;
  setMenssage: (menssage: string) => void;
  setAge: (age: number) => void;
};
const user: UserType = new User("nathalia", "eu te amo", 17);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserType>
) {
  res.status(200).json(user);
}
