import { randomUUID } from 'node:crypto';
import type { RequestHandler } from 'express';

export const requestId: RequestHandler = (req, res, next) => {
  const id = req.header('X-Request-Id') || randomUUID();
  req.requestId = id;
  res.setHeader('X-Request-Id', id);
  const started = Date.now();
  res.on('finish', () => console.info(JSON.stringify({ requestId: id, method: req.method, path: req.path, status: res.statusCode, durationMs: Date.now() - started })));
  next();
};
