import { Router } from 'express';
import categoryController from './category.controller';

const categoryRoutes = Router();

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Cria uma nova categoria.
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Categoria Teste"
 *     responses:
 *       201:
 *         description: A categoria criada.
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
 *                   example: "Categoria Teste"
 *       400:
 *         description: Erro de validação ou criação.
 */
categoryRoutes.post('/', categoryController.create);

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Retorna uma categoria pelo ID.
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: A categoria encontrada.
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
 *                   example: "Categoria Teste"
 *       400:
 *         description: Erro ao buscar a categoria.
 */
categoryRoutes.get('/:id', categoryController.show);

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Lista todas as categorias.
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: Uma lista de categorias.
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
 *                     example: "Categoria Teste"
 *       400:
 *         description: Erro ao listar categorias.
 */
categoryRoutes.get('/', categoryController.list);

/**
 * @swagger
 * /categories/{id}:
 *   patch:
 *     summary: Atualiza uma categoria pelo ID.
 *     tags: [Category]
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
 *                 example: "Categoria Teste Atualizada"
 *     responses:
 *       200:
 *         description: A categoria atualizada.
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
 *                   example: "Categoria Teste Atualizada"
 *       400:
 *         description: Erro de validação ou atualização.
 */
categoryRoutes.patch('/:id', categoryController.update);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Deleta uma categoria pelo ID.
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: A categoria deletada.
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
 *                   example: "Categoria Teste"
 *       400:
 *         description: Erro ao deletar a categoria.
 */
categoryRoutes.delete('/:id', categoryController.delete);

/**
 * @swagger
 * /categories/{id}/events:
 *   get:
 *     summary: Retorna os eventos de uma categoria pelo ID.
 *     tags: [Category]
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
categoryRoutes.get('/:id/events', categoryController.getCategoryWithEvents);

/**
 * @swagger
 * /categories/events/list:
 *   get:
 *     summary: Retorna as categorias com mais eventos.
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: Uma lista de categorias com mais eventos.
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
 *                     example: "Categoria Teste"
 *                   events:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           example: 1
 *                         name:
 *                           type: string
 *                           example: "Evento Teste"
 *                         description:
 *                           type: string
 *                           example: "Descrição do evento"
 *                         startDate:
 *                           type: string
 *                           format: date-time
 *                           example: "2025-01-01T20:00:00.000Z"
 *                         endDate:
 *                           type: string
 *                           format: date-time
 *                           example: "2025-01-02T02:00:00.000Z"
 *                         location:
 *                           type: string
 *                           example: "Localização do evento"
 *                         organizerId:
 *                           type: integer
 *                           example: 1
 *                         categoryId:
 *                           type: integer
 *                           example: 1
 *       400:
 *         description: Erro ao buscar as categorias.
 */
categoryRoutes.get('/events/list', categoryController.getCategoriesWithMoreEvents);

export default categoryRoutes;