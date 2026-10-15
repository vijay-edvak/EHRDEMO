import type { ErrorRequestHandler, RequestHandler } from 'express';

export const notFound: RequestHandler = (req, res) => {
  res.status(404).json({ error: 'Not Found', requestId: req.requestId });
};

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  void next;
  console.error(error);
  const status = typeof error.statusCode === 'number' ? error.statusCode : 500;
  res.status(status).json({ error: status === 500 ? 'Internal Server Error' : error.message, requestId: req.requestId });
};
