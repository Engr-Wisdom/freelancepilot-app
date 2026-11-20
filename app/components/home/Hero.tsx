
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  FolderKanban,
  Users,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Your freelance business, simplified
          </div>

          <h1 className="max-w-2xl text-4xl leading-tight font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Run your freelance business{" "}
            <span className="text-indigo-600">with confidence.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
            Manage clients, projects, proposals, invoices, and payments from
            one simple workspace. Spend less time managing work and more time
            growing your business.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              Get Started for Free
              <ArrowRight size={19} />
            </Link>

            <Link
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-4 font-semibold text-gray-700 transition hover:border-indigo-300 hover:text-indigo-600"
            >
              Explore Features
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-green-600" />
              Simple to use
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-green-600" />
              All-in-one workspace
            </span>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="relative">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />

          <div className="relative rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl shadow-indigo-100 sm:p-7">
            <div className="flex items-center justify-between border-b border-gray-100 pb-5">
              <div>
                <p className="text-sm text-gray-500">Welcome back, Alex</p>
                <h3 className="mt-1 text-xl font-bold text-gray-900">
                  Business Overview
                </h3>
              </div>
              <div className="rounded-lg bg-indigo-50 p-3 text-indigo-600">
                <TrendingUp size={23} />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-indigo-50/70 p-4">
                <Users size={21} className="text-indigo-600" />
                <p className="mt-4 text-xs text-gray-500">Total Clients</p>
                <p className="mt-1 text-2xl font-bold text-gray-900">24</p>
                <p className="mt-1 text-xs text-green-600">Active clients</p>
              </div>

              <div className="rounded-xl bg-purple-50 p-4">
                <FolderKanban size={21} className="text-purple-600" />
                <p className="mt-4 text-xs text-gray-500">Active Projects</p>
                <p className="mt-1 text-2xl font-bold text-gray-900">12</p>
                <p className="mt-1 text-xs text-purple-600">In progress</p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-gray-100 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Revenue</p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">
                    $8,450.00
                  </p>
                </div>
                <div className="rounded-lg bg-green-50 p-3 text-green-600">
                  <CircleDollarSign size={24} />
                </div>
              </div>

              <div className="mt-6 flex h-24 items-end gap-2">
                {[35, 55, 42, 70, 52, 85, 65, 100, 75, 90, 70, 95].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-md bg-indigo-500/80 transition hover:bg-indigo-700"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>

              <div className="mt-3 flex justify-between text-xs text-gray-400">
                <span>Jan</span>
                <span>Apr</span>
                <span>Aug</span>
                <span>Dec</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl bg-gray-50 p-4">
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Outstanding Invoices
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Payments awaiting collection
                </p>
              </div>
              <span className="text-lg font-bold text-indigo-600">$1,250</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}