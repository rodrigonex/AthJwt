require("dotenv").config();
import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export class AuthController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;
    const secretHashToken: string = process.env.SECRET_HASH_TOKEN || "secret";
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const isValuePassword = await compare(password, user.password);

    if (!isValuePassword) {
      return res.status(401).json({ error: "Password invalid" });
    }

    const { id } = user;

    const token = sign({ id: user.id }, secretHashToken, { expiresIn: "1h" });
    return res.json({ user: { id, email }, token });
  }
}
