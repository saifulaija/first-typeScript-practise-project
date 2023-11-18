import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductInToDB=async(product:Product)=>{
    const result= await ProductModel.create(product);
    return result;

}

const getAllProductsFromDB=async()=>{
      const result =await ProductModel.find();
      return result;
}

const getSingleProductFromDB=async(id:string)=>{
      const result = await ProductModel.findOne({id});
      return result;
}

export const ProductServices={
      createProductInToDB,getAllProductsFromDB,getSingleProductFromDB,
}