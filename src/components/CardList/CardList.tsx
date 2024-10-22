import React from "react";
import Card from "../Card/Card";
import Link from "next/link";
import { IProduct } from "@/interfaces/types";



const CardList: React.FC<{products:IProduct[]}> = async ({products}) => {


  return (
    <div className="container m-12 py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products &&
          products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card {...product} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CardList;
