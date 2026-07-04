import { getProducts } from "@/services/productService";

export default async function ProductList() {
  const products = await getProducts();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Products</h2>
      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id} className="rounded border p-3">
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
