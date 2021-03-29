import { Router } from 'express';

import cashiers from './cashiers';

let rootRouter = Router();

rootRouter.use('/cashiers', cashiers);

export default rootRouter;
