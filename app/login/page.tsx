import { login } from "./action";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <form
        action={login}
        className="flex w-96 flex-col gap-4 rounded border p-6"
      >
        <h1 className="text-2xl font-bold">Login</h1>

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
          className="rounded bg-blue-600 p-2 text-white"
        >
          Login
        </button>
      </form>
    </main>
  );
}