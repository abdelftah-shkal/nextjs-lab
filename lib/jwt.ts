import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET!;

export function createToken(id: number) {
  return jwt.sign(
    { id },
    SECRET,
    {
      expiresIn: "1d",
    }
  );
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET);
}