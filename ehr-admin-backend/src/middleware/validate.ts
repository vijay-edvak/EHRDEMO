import type { RequestHandler } from 'express';
import type Joi from 'joi';

export const validate = (schema: Joi.ObjectSchema): RequestHandler => (req, res, next) => {
  const { error, value } = schema.validate({ body: req.body, params: req.params, query: req.query }, { abortEarly: false, stripUnknown: true });
  if (error) return res.status(400).json({ error: 'Validation failed', details: error.details, requestId: req.requestId });
  req.body = value.body;
  req.params = value.params;
  req.query = value.query;
  next();
};
