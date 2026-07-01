import { getProduct, getProducts } from "@/services/productService";
import Image from "next/image";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetails({
  params,
}: Props) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <main className="max-w-5xl mx-auto p-8">

      <Image
        src={product.thumbnail}
        alt={product.title}
        width={400}
        height={400}
      />

      <h1 className="text-4xl font-bold mt-5">
        {product.title}
      </h1>

      <p className="my-4">
        {product.description}
      </p>

      <h2 className="text-2xl text-green-700">
        ${product.price}
      </h2>

    </main>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.slice(0, 10).map((product) => ({
    id: String(product.id),
  }));
}

export async function generateMetadata({
  params,
}: Props) {
  const { id } = await params;

  const product = await getProduct(id);

  return {
    title: product.title,
    description: product.description,
  };
}