import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow">
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={250}
        height={250}
        className="rounded"
      />

      <h2 className="text-xl font-semibold mt-4">{product.title}</h2>

      <p className="text-blue-600 font-bold">${product.price}</p>

      <Link href={`/products/${product.id}`} className="text-red-500">
        View Details
      </Link>
    </div>
  );
}
