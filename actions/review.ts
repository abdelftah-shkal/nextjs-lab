"use server";

export async function submitReview(
  prevState: {
    success: boolean;
    message: string;
  },
  formData: FormData
) {
  const review = formData.get("review") as string;

  if (!review.trim()) {
    return {
      success: false,
      message: "Review is required.",
    };
  }

  console.log(review);

  return {
    success: true,
    message: "Review submitted successfully!",
  };
}