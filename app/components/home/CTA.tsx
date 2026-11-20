
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-indigo-600 px-7 py-16 text-center text-white sm:px-12 lg:py-20">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
          <Sparkles size={28} />
        </div>

        <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Ready to take control of your freelance business?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-7 text-indigo-100">
          Bring your clients, projects, invoices, and payments together.
          Start building a more organized freelance business with
          FreelancePilot.
        </p>

        <Link
          href="/signup"
          className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-50"
        >
          Get Started Today
          <ArrowRight size={19} />
        </Link>

        <p className="mt-5 text-sm text-indigo-200">
          Your freelance journey starts here.
        </p>
      </div>
    </section>
  );
}