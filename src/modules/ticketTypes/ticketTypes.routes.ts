import { Router } from 'express';
import ticketTypesController from './ticketTypes.controller';

const ticketTypeRoutes = Router();

/**
 * @swagger
 * /ticketTypes:
 *   post:
 *     summary: Cria um novo tipo de ingresso.
 *     tags: [TicketType]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Ingresso Padrão"
 *               price:
 *                 type: number
 *                 example: 100
 *               totalQuantity:
 *                 type: integer
 *                 example: 100
 *               eventId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: O tipo de ingresso criado.
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
 *                   example: "Ingresso Padrão"
 *                 price:
 *                   type: number
 *                   example: 100
 *                 totalQuantity:
 *                   type: integer
 *                   example: 100
 *                 availableQuantity:
 *                   type: integer
 *                   example: 100
 *                 eventId:
 *                   type: integer
 *                   example: 1
 *       400:
 *         description: Erro de validação ou criação.
 */
ticketTypeRoutes.post('/', ticketTypesController.create);

/**
 * @swagger
 * /ticketTypes/{id}:
 *   get:
 *     summary: Retorna um tipo de ingresso pelo ID.
 *     tags: [TicketType]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: O tipo de ingresso encontrado.
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
 *                   example: "Ingresso Padrão"
 *                 price:
 *                   type: number
 *                   example: 100
 *                 totalQuantity:
 *                   type: integer
 *                   example: 100
 *                 availableQuantity:
 *                   type: integer
 *                   example: 100
 *                 eventId:
 *                   type: integer
 *                   example: 1
 *       400:
 *         description: Erro ao buscar o tipo de ingresso.
 */
ticketTypeRoutes.get('/:id', ticketTypesController.getById);

/**
 * @swagger
 * /ticketTypes/{id}/addQuantity:
 *   put:
 *     summary: Adiciona quantidade a um tipo de ingresso pelo ID.
 *     tags: [TicketType]
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
 *               quantity:
 *                 type: integer
 *                 example: 50
 *     responses:
 *       200:
 *         description: O tipo de ingresso atualizado.
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
 *                   example: "Ingresso Padrão"
 *                 price:
 *                   type: number
 *                   example: 100
 *                 totalQuantity:
 *                   type: integer
 *                   example: 150
 *                 availableQuantity:
 *                   type: integer
 *                   example: 150
 *                 eventId:
 *                   type: integer
 *                   example: 1
 *       400:
 *         description: Erro ao adicionar quantidade.
 */
ticketTypeRoutes.put('/:id/addQuantity', ticketTypesController.addQuantity);

/**
 * @swagger
 * /ticketTypes/{id}/removeQuantity:
 *   put:
 *     summary: Remove quantidade de um tipo de ingresso pelo ID.
 *     tags: [TicketType]
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
 *               quantity:
 *                 type: integer
 *                 example: 50
 *     responses:
 *       200:
 *         description: O tipo de ingresso atualizado.
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
 *                   example: "Ingresso Padrão"
 *                 price:
 *                   type: number
 *                   example: 100
 *                 totalQuantity:
 *                   type: integer
 *                   example: 50
 *                 availableQuantity:
 *                   type: integer
 *                   example: 50
 *                 eventId:
 *                   type: integer
 *                   example: 1
 *       400:
 *         description: Erro ao remover quantidade.
 */
ticketTypeRoutes.put('/:id/removeQuantity', ticketTypesController.removeQuantity);

export default ticketTypeRoutes;