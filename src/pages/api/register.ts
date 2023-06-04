import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/dist/server/api-utils';

const saltRounds = 10; // Número de rondas de hash (ajusta según tus necesidades)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    try {
      const existingUser = await prisma.user.findUnique({
        "where": { 
          "email": email 
        },
      });

      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });
      console.log(newUser);
      return res.status(201).json({ message: 'User created successfully', statusCode: 201, error: false });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating user' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
