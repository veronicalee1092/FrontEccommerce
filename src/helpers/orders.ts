import { IOrder } from "@/interfaces/types";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(products: number[], token:string) {
    try {
        const res = await fetch(`${APIURL}/orders`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            },
            body: JSON.stringify({products})
        });
        return res.json();

    } catch (error) {
    console.log(error) 
 }
}




export async function getOrders(products: IOrder[], token:string) {
    try {
        const res = await fetch(`${APIURL}/users/orders`, {
            method: 'GET',
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            },
        });
        return res.json();

    } catch (error) {
    console.log(error) 
 }
}
