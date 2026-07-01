import { Product } from "@/types/product";

const API = "https://dummyjson.com/products";

// Get all products
export async function getProducts(): Promise<Product[]> {
  const response = await fetch(API, {
    next: {
      revalidate: 60,
    },
  });

  const data = await response.json();

  return data.products;
}

// Get one product
export async function getProduct(id: string): Promise<Product> {
  const response = await fetch(`${API}/${id}`, {
    cache: "no-store",
  });

  return response.json();
}