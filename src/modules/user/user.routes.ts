import { Router } from 'express';
import * as userController from './user.controller';

const userRoutes = Router();

/**
 * @swagger
 * /user/registrar:
 *   post:
 *     summary: Cria um novo usuário.
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "User Teste"
 *               email:
 *                 type: string
 *                 example: "teste@example.com"
 *               password:
 *                 type: string
 *                 example: "senha123"
 *               cpf:
 *                 type: string
 *                 example: "123.456.789-01"
 *               birthDate:
 *                 type: string
 *                 format: date-time
 *                 example: "1990-01-01T00:00:00.000Z"
 *               gender:
 *                 type: string
 *                 example: "Masculino"
 *     responses:
 *       201:
 *         description: O usuário criado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "User Teste"
 *                 email:
 *                   type: string
 *                   example: "teste@example.com"
 *                 cpf:
 *                   type: string
 *                   example: "123.456.789-01"
 *                 birthDate:
 *                   type: string
 *                   format: date-time
 *                   example: "1990-01-01T00:00:00.000Z"
 *                 gender:
 *                   type: string
 *                   example: "Masculino"
 *       400:
 *         description: Erro de validação ou criação.
 */
userRoutes.post('/registrar', userController.register);

/**
 * @swagger
 * /user/:
 *   get:
 *     summary: Lista todos os usuários.
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Uma lista de usuários.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "User Teste"
 *                   email:
 *                     type: string
 *                     example: "teste@example.com"
 *                   cpf:
 *                     type: string
 *                     example: "123.456.789-01"
 *                   birthDate:
 *                     type: string
 *                     format: date-time
 *                     example: "1990-01-01T00:00:00.000Z"
 *                   gender:
 *                     type: string
 *                     example: "Masculino"
 *       400:
 *         description: Erro ao listar usuários.
 */
userRoutes.get('/', userController.list);

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Retorna um usuário pelo ID.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: O usuário encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "User Teste"
 *                 email:
 *                   type: string
 *                   example: "teste@example.com"
 *                 cpf:
 *                   type: string
 *                   example: "123.456.789-01"
 *                 birthDate:
 *                   type: string
 *                   format: date-time
 *                   example: "1990-01-01T00:00:00.000Z"
 *                 gender:
 *                   type: string
 *                   example: "Masculino"
 *       400:
 *         description: Erro ao buscar o usuário.
 */
userRoutes.get('/:id', userController.show);

/**
 * @swagger
 * /user/{id}:
 *   patch:
 *     summary: Atualiza um usuário pelo ID.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "User Teste Atualizado"
 *               email:
 *                 type: string
 *                 example: "teste_atualizado@example.com"
 *               password:
 *                 type: string
 *                 example: "nova_senha123"
 *               oldPassword:
 *                 type: string
 *                 example: "senha123"
 *               cpf:
 *                 type: string
 *                 example: "123.456.789-01"
 *               birthDate:
 *                 type: string
 *                 format: date-time
 *                 example: "1990-01-01T00:00:00.000Z"
 *               gender:
 *                 type: string
 *                 example: "Masculino"
 *     responses:
 *       200:
 *         description: O usuário atualizado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "User Teste Atualizado"
 *                 email:
 *                   type: string
 *                   example: "teste_atualizado@example.com"
 *                 cpf:
 *                   type: string
 *                   example: "123.456.789-01"
 *                 birthDate:
 *                   type: string
 *                   format: date-time
 *                   example: "1990-01-01T00:00:00.000Z"
 *                 gender:
 *                   type: string
 *                   example: "Masculino"
 *       400:
 *         description: Erro de validação ou atualização.
 */
userRoutes.patch('/:id', userController.update);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Deleta um usuário pelo ID.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: O usuário deletado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "User Teste"
 *                 email:
 *                   type: string
 *                   example: "teste@example.com"
 *                 cpf:
 *                   type: string
 *                   example: "123.456.789-01"
 *                 birthDate:
 *                   type: string
 *                   format: date-time
 *                   example: "1990-01-01T00:00:00.000Z"
 *                 gender:
 *                   type: string
 *                   example: "Masculino"
 *       400:
 *         description: Erro ao deletar o usuário.
 */
userRoutes.delete('/:id', userController.deleteUser);

/**
 * @swagger
 * /user/{id}/events:
 *   get:
 *     summary: Retorna os eventos de um usuário pelo ID.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Uma lista de eventos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Evento Teste"
 *                   description:
 *                     type: string
 *                     example: "Descrição do evento"
 *                   startDate:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-01-01T20:00:00.000Z"
 *                   endDate:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-01-02T02:00:00.000Z"
 *                   location:
 *                     type: string
 *                     example: "Localização do evento"
 *                   organizerId:
 *                     type: integer
 *                     example: 1
 *                   categoryId:
 *                     type: integer
 *                     example: 1
 *       400:
 *         description: Erro ao buscar os eventos.
 */
userRoutes.get('/:id/events', userController.getUserEvents);

/**
 * @swagger
 * /user/{id}/tickets:
 *   get:
 *     summary: Retorna os ingressos de um usuário pelo ID.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Uma lista de ingressos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   qrCode:
 *                     type: string
 *                     example: "qrcode123"
 *                   status:
 *                     type: string
 *                     example: "DISPONIVEL"
 *                   ticketTypeId:
 *                     type: integer
 *                     example: 1
 *                   orderId:
 *                     type: integer
 *                     example: 1
 *                   userId:
 *                     type: integer
 *                     example: 1
 *                   eventId:
 *                     type: integer
 *                     example: 1
 *                   event:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: "Evento Teste"
 *                       description:
 *                         type: string
 *                         example: "Descrição do evento"
 *                       startDate:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-01-01T20:00:00.000Z"
 *                       endDate:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-01-02T02:00:00.000Z"
 *                       location:
 *                         type: string
 *                         example: "Localização do evento"
 *                       organizerId:
 *                         type: integer
 *                         example: 1
 *                       categoryId:
 *                         type: integer
 *                         example: 1
 *                   ticketType:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: "Ingresso Padrão"
 *                       price:
 *                         type: number
 *                         example: 100
 *                       totalQuantity:
 *                         type: integer
 *                         example: 100
 *                       availableQuantity:
 *                         type: integer
 *                         example: 100
 *       400:
 *         description: Erro ao buscar os ingressos.
 */
userRoutes.get('/:id/tickets', userController.getUserTickets);

export default userRoutes;