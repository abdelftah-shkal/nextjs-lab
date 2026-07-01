"use client";

import { useActionState } from "react";
import { submitReview } from "@/actions/review";

const initialState = {
  success: false,
  message: "",
};

export default function ReviewPage() {
  const [state, formAction] = useActionState(
    submitReview,
    initialState
  );

  return (
    <main className="max-w-3xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">
        Add Review
      </h1>

      <form action={formAction} className="space-y-4">

        <textarea
          name="review"
          className="border w-full p-3 rounded"
        />

        <button className="bg-green-600 text-white px-5 py-2 rounded">
          Submit
        </button>

      </form>

      {state.message && (
        <p
          className={`mt-5 ${
            state.success
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {state.message}
        </p>
      )}

    </main>
  );
}