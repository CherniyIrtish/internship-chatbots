const express = require('express');
import { Request, Response, NextFunction } from 'express';

import { loggerMiddleware } from './middleware/logger';
import rootRouter from './router';
const port = 3000;
export const server = express();

server.use('/', rootRouter);

server.use(loggerMiddleware);

server.listen(port, () => {
  console.log(`E11xample awpp listening at http://localhost:${port}`);
});
