const express = require('express');
import { Request, Response, NextFunction } from 'express';

import { loggerMiddleware } from './middleware/logger';
const port = 3000;

var server = express();

server.use(loggerMiddleware);

server.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello ' });
});

server.listen(port, () => {
  console.log(`E11xample awpp listening at http://localhost:${port}`);
});
