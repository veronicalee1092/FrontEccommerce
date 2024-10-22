
import React from "react";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { getProductById } from "@/helpers/products";




const Detail: React.FC<{params: {productID:string}}> = async ({ params }) => {
  const product = await getProductById(params.productID)
    return (
      
    <ProductDetail {...product}/> 
  )
}

export default Detail;
