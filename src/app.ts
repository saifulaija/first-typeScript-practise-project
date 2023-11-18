import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRoutes } from './app/modules/products/product.routes';
const app: Application = express();

//parser------------

app.use(express.json());
app.use(cors());
//application routes

app.use('/api/v1/products', productRoutes);

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});
export default app;
