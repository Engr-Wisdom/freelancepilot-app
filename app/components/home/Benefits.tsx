
import {
  CheckCircle2,
  Clock3,
  TrendingUp,
  BriefcaseBusiness,
} from "lucide-react";

const benefits = [
  "Keep your client information organized.",
  "Manage multiple projects without losing track.",
  "Create professional proposals and invoices.",
  "Monitor payments and business performance.",
  "Stay ahead of deadlines and important tasks.",
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-gray-50 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase">
            Work smarter
          </span>

          <h2 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-gray-950 sm:text-4xl">
            Spend less time managing your business and more time growing it.
          </h2>

          <p className="mt-6 leading-7 text-gray-600">
            Running a freelance business involves more than delivering great
            work. FreelancePilot helps simplify the administrative side so
            you can focus on what matters most.
          </p>

          <div className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0 text-green-600"
                />
                <p className="text-sm font-medium text-gray-700">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-indigo-600 p-7 text-white sm:p-9">
            <Clock3 size={30} />
            <h3 className="mt-8 text-xl font-bold">Save Time</h3>
            <p className="mt-3 text-sm leading-6 text-indigo-100">
              Reduce repetitive administrative work and keep everything
              organized.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-white p-7 shadow-lg shadow-gray-200/60 sm:p-9">
            <TrendingUp size={30} className="text-indigo-600" />
            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Grow Faster
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-500">
              Understand your business activities and make informed
              decisions.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-lg shadow-gray-200/60 sm:p-9">
            <BriefcaseBusiness size={30} className="text-indigo-600" />
            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Stay Organized
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-500">
              Keep clients, projects, and important business documents
              together.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-purple-100 p-7 sm:p-9">
            <CheckCircle2 size={30} className="text-purple-700" />
            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Work Confidently
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Manage your freelance operations with greater clarity and
              control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}