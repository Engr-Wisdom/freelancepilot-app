
import {
  Users,
  FolderKanban,
  FileText,
  Receipt,
  Wallet,
  CalendarDays,
  BarChart3,
  BellRing,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Client Management",
    description:
      "Keep all your client information organized and accessible in one place.",
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    description:
      "Create projects, assign budgets, monitor progress, and manage deadlines.",
  },
  {
    icon: FileText,
    title: "Professional Proposals",
    description:
      "Create structured proposals that clearly communicate your services and pricing.",
  },
  {
    icon: Receipt,
    title: "Invoice Generation",
    description:
      "Generate professional invoices and keep your billing organized.",
  },
  {
    icon: Wallet,
    title: "Payment Tracking",
    description:
      "Monitor received payments, outstanding balances, and overdue invoices.",
  },
  {
    icon: CalendarDays,
    title: "Tasks & Deadlines",
    description:
      "Stay organized with tasks, project schedules, and upcoming deadlines.",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description:
      "Understand your revenue, expenses, and overall business performance.",
  },
  {
    icon: BellRing,
    title: "Smart Reminders",
    description:
      "Stay informed about upcoming deadlines and outstanding payments.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase">
            Everything in one place
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            Everything you need to run your freelance business
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            FreelancePilot brings your essential business tools together so
            you can stay organized, work efficiently, and focus on growth.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gray-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}