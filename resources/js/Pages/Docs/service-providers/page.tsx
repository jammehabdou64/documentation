export default function ServiceProvidersPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Service Providers</h1>

      <div className="space-y-4">
        <p>
          Service providers are the central place for binding services, configuring dependencies, and bootstrapping
          essential components in your framework. They allow you to define how different parts of your application are
          registered and initialized.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">RouteServiceProvider</h2>

        <p>
          The <code>RouteServiceProvider</code> is responsible for loading routes from your application's route files.
          It serves as the central place to register all your application's routes.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Understanding the Route Service Provider</h3>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { loadRoute } from "jcc-express-mvc";
import { ServiceProvider } from "jcc-express-mvc/core/ServiceProvider";

export class RouteServiceProvider extends ServiceProvider {
  //
  static HOME: string = "/home";
  //
  constructor(app: any) {
    super(app);
  }

  public register(): void {
    //
  }

  public boot(): void {
    loadRoute("api");
    loadRoute("web");
  }
}`}
            </code>
          </pre>
        </div>

        <p>
          The <code>RouteServiceProvider</code> is located in the app/Providers directory along with other service
          providers like <code>AppServiceProvider</code>. It contains:
        </p>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>HOME</strong> – constant: Defines the default route for redirects after authentication.
          </li>
          <li>
            <strong>boot</strong> method: Loads route files using the loadRoute() function.
          </li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Adding Custom Route Files</h3>

        <p>You can create additional route files for different sections of your application:</p>

        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li>Create a new route file in the routes directory:</li>
        </ol>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// routes/admin.ts
import { Route } from "jcc-express-mvc/Route";

Route.basePath("/admin").group((Route) => {
  Route.get("/", "index");
  Route.get("/users", "users");
  Route.get("/settings", "settings");
});`}
            </code>
          </pre>
        </div>

        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" start={2}>
          <li>Update the RouteServiceProvider to load the new route file:</li>
        </ol>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`public boot(): void {
  loadRoute("api");
  loadRoute("web");
  loadRoute("admin"); // Load the admin routes
}`}
            </code>
          </pre>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Route Organization</h3>

        <p>Organizing routes into separate files helps maintain a clean and structured codebase:</p>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>web.ts</strong>: Routes for web pages and user-facing features
          </li>
          <li>
            <strong>api.ts</strong>: Routes for API endpoints
          </li>
          <li>
            <strong>admin.ts</strong>: Routes for administration interface
          </li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Route Loading Order</h3>

        <p>
          The order in which routes are loaded can be important. Routes are loaded in the sequence they appear in the{" "}
          <code>boot()</code> method. If you have overlapping routes, the last loaded route will take precedence.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Example: Complete Route Structure</h3>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// routes/web.ts
import { Route } from "jcc-express-mvc/Route";
import { HomeController } from "@Controllers/HomeController";

Route.get("/", [HomeController, "index"]);
Route.get("/about", [HomeController, "about"]);
Route.get("/contact", [HomeController, "contact"]);

// routes/api.ts
import { Route } from "jcc-express-mvc/Route";
import { ApiController } from "@Controllers/ApiController";

Route.prefix("/api/v1").group((Route) => {
  Route.get("/users", [ApiController, "getUsers"]);
  Route.post("/users", [ApiController, "createUser"]);
});

// routes/admin.ts
import { Route } from "jcc-express-mvc/Route";
import { AdminController } from "@Controllers/AdminController";

Route.basePath("/admin").group((Route) => {
  Route.get("/", [AdminController, "dashboard"]);
  Route.get("/users", [AdminController, "users"]);
});

// RouteServiceProvider.ts
public boot(): void {
  loadRoute("web");
  loadRoute("api");
  loadRoute("admin");
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">AppServiceProvider</h2>

        <p>
          The <code>AppServiceProvider</code> is responsible for registering global services and bindings needed across
          the application.
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// app/Providers/AppServiceProviders.ts

import { Container } from "jcc-express-mvc/core/Container";
import { ServiceProvider } from "jcc-express-mvc/core/ServiceProvider";
import { Calculator } from "../Services/CalculatorService.ts"
import { UserService } from "../Services/UserService.ts"

export class AppServiceProvider extends ServiceProvider {
  constructor(app: Container) {
    super(app);
  }

  public register(): void {
    this.app.singleton<Calculator>('Calculator', new Calculator());
    this.app.bind<UserService>('UserService', new Calculator());
  }

  public boot(): void {}
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Creating Custom Service Providers</h2>

        <p>
          You can create custom service providers to organize the bootstrapping of different parts of your application.
          For example, you might create a <code>MailServiceProvider</code> to handle email-related services:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// app/Providers/MailServiceProvider.ts

import { Container } from "jcc-express-mvc/core/Container";
import { ServiceProvider } from "jcc-express-mvc/core/ServiceProvider";
import { MailService } from "../Services/MailService";
import { SmtpTransport } from "../Services/SmtpTransport";

export class MailServiceProvider extends ServiceProvider {
  constructor(app: Container) {
    super(app);
  }

  public register(): void {
    // Register the mail transport
    this.app.singleton<SmtpTransport>('SmtpTransport', new SmtpTransport(
      process.env.MAIL_HOST,
      process.env.MAIL_PORT,
      process.env.MAIL_USERNAME,
      process.env.MAIL_PASSWORD
    ));

    // Register the mail service
    this.app.singleton<MailService>('MailService', new MailService(
      this.app.make<SmtpTransport>('SmtpTransport')
    ));
  }

  public boot(): void {
    // Configure the mail service
    const mailService = this.app.make<MailService>('MailService');
    mailService.setDefaultFrom(process.env.MAIL_FROM_ADDRESS, process.env.MAIL_FROM_NAME);
  }
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Registering Service Providers</h2>

        <p>
          After creating a custom service provider, you need to register it in the <code>bootstrap/app.ts</code> file:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// bootstrap/app.ts

import { Container } from "jcc-express-mvc/core/Container";
import { AppServiceProvider } from "../app/Providers/AppServiceProvider";
import { RouteServiceProvider } from "../app/Providers/RouteServiceProvider";
import { MailServiceProvider } from "../app/Providers/MailServiceProvider";

const container = Container.getInstance();

// Register service providers
container.register([
  AppServiceProvider,
  MailServiceProvider, // Register your custom service provider
  RouteServiceProvider,
]);

// Boot service providers
container.boot();`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Service Provider Lifecycle</h2>

        <p>Service providers have two main methods that define their lifecycle:</p>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>register()</strong>: This method is called when the service provider is registered with the
            container. It should only bind things into the service container. You should never attempt to register any
            event listeners, routes, or any other piece of functionality within the register method.
          </li>
          <li>
            <strong>boot()</strong>: This method is called after all service providers have been registered, meaning you
            have access to all other services that have been registered by the framework.
          </li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Deferred Service Providers</h2>

        <p>
          If your service provider is only needed in certain situations, you can defer its loading until it's actually
          needed:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// app/Providers/ReportingServiceProvider.ts

import { Container } from "jcc-express-mvc/core/Container";
import { ServiceProvider } from "jcc-express-mvc/core/ServiceProvider";

export class ReportingServiceProvider extends ServiceProvider {
  // Flag to indicate this provider should be loaded on demand
  public static deferred = true;

  // Services provided by this provider
  public static provides = [
    'ReportGenerator',
    'PdfExporter',
    'CsvExporter',
  ];

  constructor(app: Container) {
    super(app);
  }

  public register(): void {
    // Register services only when they're needed
    this.app.singleton('ReportGenerator', () => new ReportGenerator());
    this.app.singleton('PdfExporter', () => new PdfExporter());
    this.app.singleton('CsvExporter', () => new CsvExporter());
  }
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
