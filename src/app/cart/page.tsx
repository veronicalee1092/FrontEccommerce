import React from "react";
import CartComponent from "../../views/Cart/Cart" 
import { IUserSession } from "@/interfaces/types";
import { cookies } from "next/headers";

const Cart = () => {
  const cookieStore = cookies();
  const userData: IUserSession = JSON.parse(cookieStore.get("userData")?.value??"{}")
  return (
    <CartComponent userData ={userData}/>
    )
};

export default Cart;
