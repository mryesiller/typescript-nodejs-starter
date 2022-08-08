import express, { Request, Response, Application } from 'express';

const app: Application = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Typescript Starter with Nodemon' });
});

export default app;
