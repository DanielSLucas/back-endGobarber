import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import SessiosController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessiosController = new SessiosController();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessiosController.create,
);

export default sessionsRouter;
