"use client";

interface Props {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: Props) {
  return (
    <div className="text-center mt-20">

      <h1 className="text-3xl font-bold text-red-600">
        Something went wrong
      </h1>

      <p className="mt-4">
        {error.message}
      </p>

      <button
        onClick={reset}
        className="bg-red-600 text-white px-4 py-2 rounded mt-5"
      >
        Try Again
      </button>

    </div>
  );
}