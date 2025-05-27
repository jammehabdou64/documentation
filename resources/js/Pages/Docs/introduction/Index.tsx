import DocLayout from "@/Components/doc-layout";
import { Link } from "@inertiajs/react";

export default function IntroductionPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Introduction
        </h1>

        <div className="space-y-4">
          <p>
            jcc-express-mvc is a lightweight Node.js package that simplifies the
            development of Express.js applications using a structure inspired by
            Laravel's file organization. It encourages the use of the
            Model-View-Controller (MVC) architectural pattern, providing a clean
            and organized approach to building and scaling your Express.js
            projects.
          </p>

          <div className="rounded-md bg-yellow-50 p-4 dark:bg-yellow-950">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                  Warning
                </h3>
                <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                  <p>
                    This package is not recommended for use in production
                    environments. It's intended for learning purposes only. Use
                    in production at your own risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Core Features
        </h2>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Express.js Framework (jcc-express-starter)
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Sets up an Express.js web application with MVC architecture</li>
            <li>Opinionated project structure for organized code</li>
            <li>Built-in validation methods</li>
            <li>Two routes file for easy route management</li>
            <li>
              Comes with jsBlade similar to Laravel blade for view rendering,
              but you can use any templating engine of choice
            </li>
            <li>Includes configuration with MySQL</li>
            <li>Includes configuration with dotenv</li>
          </ul>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            ORM (jcc-eloquent)
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Query Builder with methods for complex SQL operations</li>
            <li>Model system with fillable, guarded, and casts properties</li>
            <li>Relationships, including polymorphic relations (morphMany)</li>
            <li>Event hooks (e.g., creating, booted) for action triggers</li>
            <li>
              Schema Builder for migrations, inspired by Laravel's schema API
            </li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link
            href="/docs/installation"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Next: Installation
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
