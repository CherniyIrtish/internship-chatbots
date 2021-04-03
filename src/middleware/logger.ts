import express, { Application, Request, Response, NextFunction } from 'express';

const winston = require('winston');

interface IGetUserAuthInfoRequest extends Request {
  state: { [key: string]: any }; // or any other type
}

export const loggerMiddleware = async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
  const logger = winston.createLogger({
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
  });
  req.state.logger = logger;

  return next();
};
