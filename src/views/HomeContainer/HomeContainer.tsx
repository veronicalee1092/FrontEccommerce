import React from "react";
import CardList from "../../components/CardList/CardList"
import Carousel from "../../components/Carousel/Carousel";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const fetchProducts = async () => {
  
    const response = await fetch(`${APIURL}/products`, {
      next: { revalidate: 1200 },
    });
    const parsedProducts = await response.json();
    return parsedProducts;

};

const HomeContainer = async () =>{

   const fetchData = await fetchProducts();
   
   return (
    <div>
      
      <Carousel products={fetchData}/> 
       <CardList products={fetchData}/>
    </div>
   )
}

export default HomeContainer;