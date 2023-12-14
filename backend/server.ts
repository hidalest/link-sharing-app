import { Request, Response } from 'express';

const express = require('express');

const app = express();

const port = 9000;

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ status: 200, message: 'Success!' });
});

app.listen(port, () => {
  console.log(`Starting server on http://127.0.0.1:${port}`);
});
