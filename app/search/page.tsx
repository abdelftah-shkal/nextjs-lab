import Link from "next/link";
import { getProducts } from "@/services/productService";

interface Props {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({
  searchParams,
}: Props) {
  const { q = "" } = await searchParams;

  const products = await getProducts();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-5">
        Search Products
      </h1>

      <form className="mb-8">
        <input
          type="text"
          name="q"
          defaultValue={q}
          placeholder="Search..."
          className="border p-2 rounded w-80"
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded ml-3"
        >
          Search
        </button>
      </form>

      <div className="space-y-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded"
          >
            <h2 className="font-bold">
              {product.title}
            </h2>

            <Link
              href={`/products/${product.id}`}
              className="text-blue-600"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}