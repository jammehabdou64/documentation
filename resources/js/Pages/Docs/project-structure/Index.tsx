import CodeHighLight from "@/Components/CodeHighlight";
import DocLayout from "@/Components/doc-layout";

export default function ProjectStructurePage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Project Structure
        </h1>

        <div className="space-y-4">
          <p>
            jcc-express-starter follows a Laravel-inspired directory structure
            to organize your code in a logical and maintainable way.
            Understanding this structure is key to working effectively with the
            framework.
          </p>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Directory Structure
          </h2>

          <CodeHighLight>
            {`project-root/
|--app
| |--Config/
| | | --app.ts
| | |--egine.ts
| |--Http
| | |--Controllers/
| | | |--UsersController.ts
| | |--Middlewares/
| | |--Request/
| | |  |--UserRequest.ts
| | |--kernel.ts
| |--Models/
| | |--User.ts
| |--Providers
| | |--AppServiceProvider.ts
| | |--RouteServiceProvider.ts
|--bootstrap
| |-app.ts
|--database
| |--migrations
| | |--create_users_table.ts
| |--seeders
| | |--UserSeeder.ts
|--public/
| |--css/
| | |--app.css
| |--js/
| | |--app.js
|--resources/
| |--views/
| | |--partials/
| | | |--header.blade.html
| | |--layout/layout.blade.html
| | |--index.blade.html
| |--css/
| | |--app.css
| |--js/
| | |--app.js
|--routes/
| |--web.ts
| |--api.ts`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Key Directories
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                app/
              </h3>
              <p>
                The app directory contains the core code of your application.
                This is where most of your application's logic will be placed.
              </p>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>
                  <strong>Config/</strong>: Configuration files for the
                  application
                </li>
                <li>
                  <strong>Http/Controllers/</strong>: Controllers handling the
                  application logic
                </li>
                <li>
                  <strong>Http/Middlewares/</strong>: Middleware classes for
                  request filtering
                </li>
                <li>
                  <strong>Http/Request/</strong>: Form request classes for
                  validation
                </li>
                <li>
                  <strong>Http/kernel.ts</strong>: Global middleware
                  configuration
                </li>
                <li>
                  <strong>Models/</strong>: Models for database interactions
                </li>
                <li>
                  <strong>Providers/</strong>: Service providers for the
                  application
                </li>
              </ul>
            </div>

            <div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                bootstrap/
              </h3>
              <p>
                The bootstrap directory contains files that bootstrap the
                framework and configure autoloading.
              </p>
            </div>

            <div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                database/
              </h3>
              <p>
                The database directory contains your database migrations and
                seeders.
              </p>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>
                  <strong>migrations/</strong>: Database migration files
                </li>
                <li>
                  <strong>seeders/</strong>: Database seeder files
                </li>
              </ul>
            </div>

            <div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                public/
              </h3>
              <p>
                The public directory contains compiled assets and other files
                that should be publicly accessible. This is the document root
                for your web server.
              </p>
            </div>

            <div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                resources/
              </h3>
              <p>
                The resources directory contains your views as well as
                uncompiled assets like CSS and JavaScript files.
              </p>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>
                  <strong>views/</strong>: View templates using jsBlade or other
                  templating engines
                </li>
                <li>
                  <strong>css/</strong>: Uncompiled CSS files
                </li>
                <li>
                  <strong>js/</strong>: Uncompiled JavaScript files
                </li>
              </ul>
            </div>

            <div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                routes/
              </h3>
              <p>
                The routes directory contains all of the route definitions for
                your application.
              </p>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>
                  <strong>web.ts</strong>: Routes for web interface
                </li>
                <li>
                  <strong>api.ts</strong>: Routes for API endpoints
                </li>
              </ul>
            </div>
          </div>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Key Files
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                app/Config/engine.ts
              </h3>
              <p>Configures the templating engine for views.</p>
            </div>

            <div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                app/Http/kernel.ts
              </h3>
              <p>Defines global middleware that runs on every request.</p>
            </div>

            <div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                bootstrap/app.ts
              </h3>
              <p>
                Bootstraps the application and sets up the service container.
              </p>
            </div>
          </div>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Naming Conventions
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Controllers
              </h3>
              <div>
                Controller names should be plural and end with "Controller". For
                example, <CodeHighLight>UsersController</CodeHighLight>
              </div>
            </div>

            <div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Models
              </h3>
              <div>
                Model names should be singular. For example,{" "}
                <CodeHighLight>User</CodeHighLight> for a users table.
              </div>
            </div>

            <div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Migrations
              </h3>
              <div>
                Migration names should describe what they do. For example,{" "}
                <CodeHighLight>create_users_table</CodeHighLight> or{" "}
                <CodeHighLight>add_email_to_users</CodeHighLight>
              </div>
            </div>

            <div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Views
              </h3>
              <div>
                View files should use the{" "}
                <CodeHighLight>.blade.html</CodeHighLight> extension for jsBlade
                templates.
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}
