
import Link from "next/link";
import { Plane, ArrowLeft, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg sm:p-10">

        <Link href="/" className="mb-8 flex items-center justify-center gap-2">
          <div className="rounded-lg bg-indigo-600 p-2 text-white">
            <Plane size={22} />
          </div>
          <span className="text-2xl font-bold text-gray-900">
            Freelance<span className="text-indigo-600">Pilot</span>
          </span>
        </Link>

        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-indigo-100 p-4 text-indigo-600">
            <Mail size={30} />
          </div>
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Forgot password?
          </h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            Don't worry! Enter the email address associated with your account
            and we'll help you reset your password.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            <ArrowLeft size={16} />
            Back to Login
          </Link>
        </div>
      </div>
    </main>
  );
}
