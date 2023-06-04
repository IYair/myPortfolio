import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      
      if (!user || !user.password || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid credentials', statusCode: 401, error: true });
      }

      const expirationDate = new Date(Date.now());
      const token = jwt.sign({ id: user.id, exp: Math.floor(expirationDate.getTime() / 1000) }, process.env.JWT_SECRET as string);
      
      // Almacenar la sesión en la base de datos
      const nuevaSesion = await prisma.session.create({
        data: {
          userId: user.id,
          expires: expirationDate,
          sessionToken: token,
        },
      });

      return res.status(200).json({ data: { token, user }, message: 'User found', statusCode: 200, error: false });
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong', statusCode: 500, error: true });
    }
  }
  
  return res.status(400).json({ message: 'Method not allowed', statusCode: 400, error: true });
}
