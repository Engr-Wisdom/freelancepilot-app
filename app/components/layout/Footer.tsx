
import Link from "next/link";
import { Plane } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Benefits", href: "#benefits" },
    { name: "How it works", href: "#how-it-works" },
  ],
  Account: [
    { name: "Sign Up", href: "/signup" },
    { name: "Log In", href: "/login" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600">
                <Plane size={21} />
              </span>

              <span className="text-xl font-bold">
                Freelance<span className="text-indigo-400">Pilot</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Your all-in-one workspace for managing clients, projects,
              proposals, invoices, and payments. Focus on your work while
              FreelancePilot helps you stay organized.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-semibold">{heading}</h3>

              <ul className="mt-5 space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-gray-800 pt-7 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 FreelancePilot. All rights reserved.
          </p>

          <p>Built to help freelancers work smarter.</p>
        </div>
      </div>
    </footer>
  );
}
