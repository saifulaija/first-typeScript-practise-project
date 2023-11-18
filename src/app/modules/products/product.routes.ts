import express  from "express";
import { ProductController } from "./product.contriller";
const router = express.Router();
//will call controller function


router.post('/create-product', ProductController.CreateProduct );
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getSingleProduct)


export const productRoutes=router;