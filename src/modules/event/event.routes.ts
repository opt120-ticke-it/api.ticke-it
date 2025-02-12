import { Router } from 'express';
import eventController from './event.controller';

const eventRoutes = Router();

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Cria um novo evento.
 *     tags: [Event]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Evento Teste"
 *               description:
 *                 type: string
 *                 example: "Descrição do evento"
 *               startDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-01-01T20:00:00.000Z"
 *               endDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-01-02T02:00:00.000Z"
 *               location:
 *                 type: string
 *                 example: "Localização do evento"
 *               organizerId:
 *                 type: integer
 *                 example: 1
 *               categoryId:
 *                 type: integer
 *                 example: 1
 *               ticketTypes:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Ingresso Padrão"
 *                     price:
 *                       type: number
 *                       example: 100
 *                     totalQuantity:
 *                       type: integer
 *                       example: 100
 *               image4x3:
 *                 type: string
 *                 example: "..."
 *               image16x9:
 *                 type: string
 *                 example: "..."
 *     responses:
 *       201:
 *         description: O evento criado.
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
 *                   example: "Evento Teste"
 *                 description:
 *                   type: string
 *                   example: "Descrição do evento"
 *                 startDate:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-01-01T20:00:00.000Z"
 *                 endDate:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-01-02T02:00:00.000Z"
 *                 location:
 *                   type: string
 *                   example: "Localização do evento"
 *                 organizerId:
 *                   type: integer
 *                   example: 1
 *                 categoryId:
 *                   type: integer
 *                   example: 1
 *       400:
 *         description: Erro de validação ou criação.
 */
eventRoutes.post('/', eventController.createEvent);

/**
 * @swagger
 * /events:
 *   get:
 *     summary: Lista todos os eventos.
 *     tags: [Event]
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
 *         description: Erro ao listar eventos.
 */
eventRoutes.get('/', eventController.list);

/**
 * @swagger
 * /events/{id}:
 *   get:
 *     summary: Retorna um evento pelo ID.
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: O evento encontrado.
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
 *                   example: "Evento Teste"
 *                 description:
 *                   type: string
 *                   example: "Descrição do evento"
 *                 startDate:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-01-01T20:00:00.000Z"
 *                 endDate:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-01-02T02:00:00.000Z"
 *                 location:
 *                   type: string
 *                   example: "Localização do evento"
 *                 organizerId:
 *                   type: integer
 *                   example: 1
 *                 categoryId:
 *                   type: integer
 *                   example: 1
 *       400:
 *         description: Erro ao buscar o evento.
 */
eventRoutes.get('/:id', eventController.show);

/**
 * @swagger
 * /events/{id}:
 *   patch:
 *     summary: Atualiza um evento pelo ID.
 *     tags: [Event]
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
 *                 example: "Evento Teste Atualizado"
 *               description:
 *                 type: string
 *                 example: "Descrição do evento atualizado"
 *               startDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-01-01T20:00:00.000Z"
 *               endDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-01-02T02:00:00.000Z"
 *               location:
 *                 type: string
 *                 example: "Localização do evento atualizado"
 *               organizerId:
 *                 type: integer
 *                 example: 1
 *               categoryId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: O evento atualizado.
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
 *                   example: "Evento Teste Atualizado"
 *                 description:
 *                   type: string
 *                   example: "Descrição do evento atualizado"
 *                 startDate:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-01-01T20:00:00.000Z"
 *                 endDate:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-01-02T02:00:00.000Z"
 *                 location:
 *                   type: string
 *                   example: "Localização do evento atualizado"
 *                 organizerId:
 *                   type: integer
 *                   example: 1
 *                 categoryId:
 *                   type: integer
 *                   example: 1
 *       400:
 *         description: Erro de validação ou atualização.
 */
eventRoutes.patch('/:id', eventController.update);

/**
 * @swagger
 * /events/{id}/ticketTypes:
 *   get:
 *     summary: Retorna os tipos de ingressos de um evento pelo ID.
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Uma lista de tipos de ingressos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "Ingresso Padrão"
 *                   price:
 *                     type: number
 *                     example: 100
 *                   totalQuantity:
 *                     type: integer
 *                     example: 100
 *                   availableQuantity:
 *                     type: integer
 *                     example: 100
 *       400:
 *         description: Erro ao buscar os tipos de ingressos.
 */
eventRoutes.get('/:id/ticketTypes', eventController.getTicketTypes);

export default eventRoutes;