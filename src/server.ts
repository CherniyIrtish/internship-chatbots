const express = require('express');
import { Request, Response, NextFunction } from 'express';
const bodyParser = require('body-parser');
import { loggerMiddleware } from './middleware/logger';
import rootRouter from './router';
const port = 3000;
export const server = express();
server.use(bodyParser.json());
server.use('/api/v1', rootRouter);

server.use(loggerMiddleware);

server.listen(port, () => {
  console.log(`E11xample awpp listening at http://localhost:${port}`);
});
