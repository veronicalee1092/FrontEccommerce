
export interface IProduct{
    id:number;
    name:string;
    description:string;
    price:number;
    stock: number;
    image: string;
    categoryId:number
}


export interface ICategory {
    id: number;
    name:string
}

export interface IRegisterProps {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
  }

  export interface ILoginProps {
    email: string;
    password: string;

  }

  export interface IUserSession {
    token: string;
    user:{
      id:number;
      email:string;
      name: string;
      address:string;
      phone: string;
      role:string;
      credential:{
        id:number;
        password:string
      }
    }
  }

  export interface Order {
    id: string;
    productName: string;
    quantity: number;
    totalPrice: number;
  }
  
export interface IOrder{
  id:number;
  status: string;
  date:Date;
  products: IProduct[]
}