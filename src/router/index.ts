import { Router } from 'express';

import todo from './todo';

let rootRouter = Router();

rootRouter.use('/todo', todo);

export default rootRouter;
