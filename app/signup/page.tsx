import { signup } from "./action";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <form
        action={signup}
        className="flex w-96 flex-col gap-4 rounded border p-6"
      >
        <h1 className="text-2xl font-bold">Sign Up</h1>

        <input
          name="name"
          placeholder="Name"
          className="border p-2 rounded"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="rounded bg-green-600 p-2 text-white"
        >
          Sign Up
        </button>
      </form>
    </main>
  );
}