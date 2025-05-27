import CodeHighLight from "@/Components/CodeHighlight";
import DocLayout from "@/Components/doc-layout";

export default function ServiceProvidersPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Service Providers
        </h1>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            AppServiceProvider
          </h2>

          <p>
            The <code>AppServiceProvider</code> is responsible for registering
            global services and bindings needed across the application.
          </p>

          <CodeHighLight>
            {`// app/Providers/AppServiceProviders.ts

import { Application } from "jcc-express-mvc/Core";
import { ServiceProvider } from "jcc-express-mvc/core/ServiceProvider";
import { Calculator } from "../Services/CalculatorService.ts"
import { UserService } from "../Services/UserService.ts"

export class AppServiceProvider extends ServiceProvider {
  constructor(app: Container) {
    super(app);
  }

  public register(): void {
    this.app.singleton<Calculator>('Calculator',  Calculator);
    this.app.bind<UserService>('UserService',  UserService);
  }

  public boot(): void {}
}`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Creating Custom Service Providers
          </h2>

          <p>
            You can create custom service providers to organize the
            bootstrapping of different parts of your application. For example,
            you might create a <code>MailServiceProvider</code> to handle
            email-related services:
          </p>

          <CodeHighLight>
            {`// app/Providers/MailServiceProvider.ts

import { Application } from "jcc-express-mvc/Core";
import { ServiceProvider } from "jcc-express-mvc/core/ServiceProvider";
import { MailService } from "../Services/MailService";
import { SmtpTransport } from "../Services/SmtpTransport";

export class MailServiceProvider extends ServiceProvider {
  constructor(app: Application) {
    super(app);
  }

  public register(): void {
    // Register the mail transport
    this.app.singleton('SmtpTransport', ()=>new SmtpTransport(
      process.env.MAIL_HOST,
      process.env.MAIL_PORT,
      process.env.MAIL_USERNAME,
      process.env.MAIL_PASSWORD
    ));

    // Register the mail service
    this.app.singleton<MailService>('MailService', new MailService(
      this.app.resolve<SmtpTransport>('SmtpTransport')
    ));
  }

  public boot(): void {
    // Configure the mail service
    const mailService = this.app.make<MailService>('MailService');
    mailService.setDefaultFrom(process.env.MAIL_FROM_ADDRESS, process.env.MAIL_FROM_NAME);
  }
}`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Service Provider Lifecycle
          </h2>

          <p>
            Service providers have two main methods that define their lifecycle:
          </p>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <strong>register()</strong>: This method is called when the
              service provider is registered with the container. It should only
              bind things into the service container. You should never attempt
              to register any event listeners, routes, or any other piece of
              functionality within the register method.
            </li>
            <li>
              <strong>boot()</strong>: This method is called after all service
              providers have been registered, meaning you have access to all
              other services that have been registered by the framework.
            </li>
          </ul>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Deferred Service Providers
          </h2>

          <p>
            If your service provider is only needed in certain situations, you
            can defer its loading until it's actually needed:
          </p>

          <CodeHighLight>
            {`// app/Providers/ReportingServiceProvider.ts

import { Application } from "jcc-express-mvc/Core";
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

  constructor(app: Application) {
    super(app);
  }

  public register(): void {
    // Register services only when they're needed
    this.app.singleton('ReportGenerator',  ReportGenerator);
    this.app.singleton('PdfExporter',  PdfExporter);
    this.app.singleton('CsvExporter',  CsvExporter);
  }
}`}
          </CodeHighLight>
        </div>
      </div>
    </DocLayout>
  );
}
