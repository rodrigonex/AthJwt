import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

type TokenPayload = {
  id: string;
  iat: number;
  exp: number;
};

export function AuthMiddleweres(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  const secretHashToken: string = process.env.SECRET_HASH_TOKEN || "secret";

  if (!authorization) {
    console.log("sem authorize");
    return res.send(401).json({ error: "Token not provided" });
  }

  const [, token] = authorization.split(" ");

  try {
    const decoded = verify(token, secretHashToken);
    const { id } = decoded as TokenPayload;
    req.userId = id;
    next();
  } catch (error) {
    return res.send(401).json({ error: "Token invalid" });
  }
}
