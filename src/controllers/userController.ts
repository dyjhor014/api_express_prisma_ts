import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class userController {
    static async getUsuario(req: Request, res: Response) {
      // Obtener información del usuario de la base de datos
      const users = await prisma.user.findMany();
      res.json(users);
    }
    static async createUsuario(req: Request, res: Response) {
        // Crear un nuevo usuario en la base de datos
        const { name, email, password } = req.body;
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
            },
        });
        res.json({ message: 'Usuario creado exitosamente', user: user });
      }
  }