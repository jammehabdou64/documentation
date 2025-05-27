export default function MiddlewaresPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Middlewares</h1>

      <div className="space-y-4">
        <p>
          Middleware in jcc-express-mvc provides a convenient mechanism for filtering HTTP requests entering your
          application. Middleware can perform tasks like authentication, logging, or modifying the request or response
          objects.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">The Kernel Class</h2>

        <p>
          The <code>Kernel</code> class in <code>app/Http/kernel.ts</code> is responsible for managing middleware in
          your framework. It consists of two main properties:
        </p>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>middleware</strong>: An array of globally registered middleware that runs on every request.
          </li>
          <li>
            <strong>middlewareAliases</strong>: An object that allows middleware to be referenced by a string alias when
            defining route-specific middleware.
          </li>
        </ul>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// app/Http/kernel.ts
export class Kernel {
    protected middleware = [
        morgan("dev"),
        cookieParser(),
        cors(),
        session({
            secret: "ggggggg",
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 60000 },
        }),
        flash(),
        fileUpload(),
    ];

    static middlewareAliases = {
        auth: auth,
        guest: guest,
    };
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Creating Custom Middleware</h2>

        <p>
          Middleware can be created inside the <code>app/Http/Middlewares</code> directory. Each middleware should be
          exported so it can be used in routes, registered as an alias, or as a global middleware.
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// app/Http/Middlewares/AuthMiddleware.ts
export function AuthMiddleware(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Using Middleware in Routes</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Method 1: Direct Import</h3>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// in routes
import { AuthMiddleware } from "@Middleware/AuthMiddleware";

Route.middleware(AuthMiddleware).get("/home", (req, res, next) => {
  return res.inertia("Home");
});`}
            </code>
          </pre>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Method 2: Using Aliases</h3>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// First, register the middleware alias in kernel.ts
import { AuthMiddleware } from "../Http/Middlewares/AuthMiddleware";

export class Kernel {
  static middlewareAliases = {
    authMiddleware: AuthMiddleware,
  };
}

// Then use it in routes
Route.middleware(["authMiddleware"]).get("/home", (req, res, next) => {
  return res.inertia("Home");
});`}
            </code>
          </pre>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Method 3: Inline Middleware</h3>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`Route.middleware(function (req, res, next) {
  console.log("Custom middleware executed");
  next();
}).get("/", (req, res) => {
  return res.json({ hello: "Hello" });
});`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Middleware Groups</h2>

        <p>
          You can apply multiple middleware to a group of routes using the <code>group</code> method:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`Route.middleware([AuthMiddleware, LogMiddleware]).group((Route) => {
  Route.get("/dashboard", DashboardController.index);
  Route.get("/profile", ProfileController.show);
  Route.post("/settings", SettingsController.update);
});`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Built-in Middleware</h2>

        <p>jcc-express-mvc comes with several built-in middleware:</p>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>auth</strong>: Ensures the user is authenticated
          </li>
          <li>
            <strong>guest</strong>: Ensures the user is not authenticated
          </li>
          <li>
            <strong>apiAuth</strong>: Ensures the request has a valid JWT token
          </li>
        </ul>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { Route, auth } from "jcc-express-mvc";

// Only authenticated users can access this route
Route.middleware(auth).get("/profile", ProfileController.show);

// Only guests can access this route
Route.middleware(guest).get("/login", AuthController.showLoginForm);`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Middleware Parameters</h2>

        <p>You can create middleware that accepts parameters by returning a function from your middleware function:</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// app/Http/Middlewares/RoleMiddleware.ts
export function RoleMiddleware(role) {
  return function(req, res, next) {
    if (!req.user || req.user.role !== role) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
}

// Usage in routes
Route.middleware(RoleMiddleware('admin')).get("/admin/dashboard", AdminController.dashboard);`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Summary</h2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Global middleware</strong>: Defined in Kernel.middleware and runs on all requests.
          </li>
          <li>
            <strong>Middleware aliases</strong>: Allow shorthand referencing of middleware functions in routes.
          </li>
          <li>
            <strong>Custom middleware</strong>: Can be created in app/Http/Middlewares and exported for use.
          </li>
          <li>
            <strong>Route-specific middleware</strong>: Can be applied as a string (single middleware), an array
            (multiple middleware), or an inline function.
          </li>
        </ul>
      </div>
    </div>
  )
}
