import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-5 flex gap-5">

      <Link href="/">Home</Link>

      <Link href="/search">
        Search
      </Link>

      <Link href="/review">
        Review
      </Link>

    </nav>
  );
}