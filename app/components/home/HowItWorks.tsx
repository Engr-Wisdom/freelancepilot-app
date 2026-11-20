
import { UserPlus, FolderPlus, FileCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Account",
    description: "Sign up and set up your freelance business profile.",
  },
  {
    number: "02",
    icon: FolderPlus,
    title: "Add Clients & Projects",
    description: "Organize your clients and create your first projects.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Manage Your Work",
    description: "Create proposals, track tasks, and send invoices.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track Your Growth",
    description: "Monitor payments, revenue, and business performance.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase">
            Getting started
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-950 sm:text-4xl">
            Your business, organized in four simple steps
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Getting your freelance business organized doesn't have to be
            complicated.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Icon size={28} />
                </div>

                <span className="mt-6 block text-sm font-bold text-indigo-600">
                  STEP {step.number}
                </span>

                <h3 className="mt-3 text-lg font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}