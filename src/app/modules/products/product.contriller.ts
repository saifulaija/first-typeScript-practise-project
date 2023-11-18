import { Request, Response } from 'express';

import { ProductServices } from './product.service';

const CreateProduct = async (req: Request, res: Response) => {
  try {
    const {product:productData} = req.body;
    const result = await ProductServices.createProductInToDB(productData);
    res.status(200).json({
      success: true,
      message: 'product is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllProducts=async(req:Request,res:Response)=>{
      try {
            const result = await ProductServices.getAllProductsFromDB();
            res.status(200).json({
                  success:true,
                  messsage:'products is retrieved successfully',
                  data:result
            })
      } catch (error) {
            console.log(error)
      }
}

const getSingleProduct=async(req:Request,res:Response)=>{
      try {
            const {id} = req.params;
            
            console.log(id)
            const result = await ProductServices.getSingleProductFromDB(id);
            res.status(200).json({
                  success:true,
                  message:'product is retrieved successfully',
                  data:result
            })
      } catch (error) {
            console.log(error)
      }
}

export const ProductController={
      CreateProduct,getAllProducts,getSingleProduct,
}
