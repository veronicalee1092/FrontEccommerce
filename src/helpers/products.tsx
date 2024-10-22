import { fetchProducts } from "@/views/HomeContainer/HomeContainer";
import { IProduct } from "@/interfaces/types";

export async function getProductById(id: string): Promise<IProduct | null> {
  try {
    const products: IProduct[] = await fetchProducts(); 
    const productFiltered = products.find(
      (product) => product.id.toString() === id
    );

    if (!productFiltered) {
      throw new Error(`Producto con id ${id} no encontrado`);
    }

    return productFiltered;
  } catch (error) {
    console.error("Error obteniendo el producto:", error);
    return null; 
  }
}
