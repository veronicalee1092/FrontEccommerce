import { ILoginProps, IRegisterProps } from "@/interfaces/types";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function register(formData: IRegisterProps) {
    try {
        const res = await fetch(`${APIURL}/users/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (!res.ok) {
            throw new Error(`Error ${res.status}: ${res.statusText}`);
        } else{
            return await res.json(); 

        }


    } catch (error) {
    console.log(error) 
 }
}


export async function login(formData:ILoginProps) {
    try {
      const res = await fetch(`${APIURL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }
  
      return await res.json();
    } catch (error) {
      console.error("Error en la solicitud de login:", error);
      throw error; 
    }
  }
  