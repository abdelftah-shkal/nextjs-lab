import { getProducts } from "@/services/productService";
import ProductCard from "@/components/ProductCard";
import { redirect } from "next/navigation";
export default async function Home() {
   
  const products = await getProducts();

  return (
    <main className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Products
      </h1>

      <div className="grid grid-cols-4 gap-6">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </main>
  );
}