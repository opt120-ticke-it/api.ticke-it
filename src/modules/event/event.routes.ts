import { Router } from 'express';
import eventController from './event.controller';

import multer from 'multer';
import path from 'path';

const storage4x3 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../../images/event/4x3'));
  },
  filename: function (req, file, cb) {
    cb(null, req.params.id + '.png');
  },
});
const upload4x3 = multer({ storage: storage4x3 });

const storage16x9 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../../images/event/16x9'));
  },
  filename: function (req, file, cb) {
    cb(null, req.params.id + '.png');
  },
});
const upload16x9 = multer({ storage: storage16x9 });

const eventRoutes = Router();

eventRoutes.post('/', eventController.create);
eventRoutes.get('/', eventController.list);
eventRoutes.get('/:id', eventController.show);
eventRoutes.patch('/:id', eventController.update);
eventRoutes.get('/:id/ticketTypes', eventController.getTicketTypes);
eventRoutes.put(
  '/:id/updadeImage4x3',
  upload4x3.single('file'),
  eventController.updateImage
);
eventRoutes.put(
  '/:id/updadeImage16x9',
  upload16x9.single('file'),
  eventController.updateImage
);

eventRoutes.get('/getEventImage4x3/:id', async (req, res) => {
  return res.sendFile(
    path.join(__dirname, '../../../images/event/4x3', req.params.id + '.png')
  );
});

eventRoutes.get('/getEventImage16x9/:id', async (req, res) => {
  return res.sendFile(
    path.join(__dirname, '../../../images/event/16x9', req.params.id + '.png')
  );
});

export default eventRoutes;
