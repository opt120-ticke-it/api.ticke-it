import { Router } from 'express';
import * as authController from './auth.controller';

const authRoutes = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Autentica um usuário e retorna um token JWT e as informações do usuário.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: senha123
 *     responses:
 *       200:
 *         description: Um objeto contendo o token JWT e as informações do usuário.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: "User Teste"
 *                     email:
 *                       type: string
 *                       example: "user@example.com"
 *                     cpf:
 *                       type: string
 *                       example: "123.456.789-01"
 *                     birthDate:
 *                       type: string
 *                       format: date-time
 *                       example: "1990-01-01T00:00:00.000Z"
 *                     gender:
 *                       type: string
 *                       example: "Masculino"
 *       400:
 *         description: Erro de validação ou autenticação.
 */
authRoutes.post('/login', authController.login);

export default authRoutes;