export default function ServiceContainerPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Service Container & Dependency Injection</h1>

      <div className="space-y-4">
        <p>
          jcc-express-starter includes a Laravel-inspired service container and dependency injection system that uses
          reflection to automatically resolve dependencies. This powerful feature allows you to manage class
          dependencies and perform dependency injection with ease.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Defining Services</h2>

        <p>Services are simply classes that provide specific functionality. Here's an example of a simple service:</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`export class Calculator {
  add(a: number, b: number) {
    return a + b;
  }

  subtract(a: number, b: number) {
    return a - b;
  }
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Automatic Dependency Injection</h2>

        <p>
          The framework uses reflection to automatically inject dependencies into your classes. Simply define
          constructor parameters with the correct types and use the <code>@Inject()</code> decorator:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { Inject } from "jcc-express-mvc/lib/Dependancy";
import { Calculator } from "@/Services/Calculator";
import { UserService } from "@/Services/UserService";

@Inject()
export class UserController {
  // Dependencies are automatically injected
  constructor(
    private calculator: Calculator,
    private userService: UserService
  ) {}

  index(req, res) {
    const result = this.calculator.add(5, 10);
    const users = this.userService.getAllUsers();
    
    return res.json({ result, users });
  }
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">The Container Class</h2>

        <p>
          The <code>Container</code> class is the central piece of the dependency injection system. It provides methods
          for registering and resolving services.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Registering Services Manually</h3>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { Container } from "jcc-express-mvc/Container";
import { ServiceProvider } from "jcc-express-mvc/lib/Services/ServiceProvider";
import { Calculator } from "../Services/Calculator";
import { UserService } from "../Services/UserService";

export class AppServiceProvider extends ServiceProvider {
  constructor(app: Container) {
    super(app);
  }

  public register(): void {
    // Register a singleton service
    this.app.singleton<Calculator>('Calculator', new Calculator());

    // Register a transient service
    this.app.bind<UserService>('UserService', new UserService());
  }
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Binding Types</h2>

        <p>The service container supports different types of bindings:</p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Singleton Binding</h3>

        <p>Singleton bindings are only resolved once, and the same instance is returned on subsequent calls:</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// Register a singleton
this.app.singleton<Logger>('Logger', new Logger());

// Or with a factory function
this.app.singleton<Logger>('Logger', () => {
  return new Logger();
});`}
            </code>
          </pre>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Transient Binding</h3>

        <p>Transient bindings are resolved each time they are requested, returning a new instance:</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// Register a transient binding
this.app.bind<UserService>('UserService', new UserService());

// Or with a factory function
this.app.bind<UserService>('UserService', () => {
  return new UserService();
});`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Resolving Services</h2>

        <p>
          You can manually resolve services from the container using the <code>make</code> method:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { Container } from "jcc-express-mvc/Container";

// Get the container instance
const container = Container.getInstance();

// Resolve a service
const calculator = container.make<Calculator>('Calculator');
const result = calculator.add(5, 10);`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Service Providers</h2>

        <p>
          Service providers are the central place for binding services in your application. They are registered in the
          <code>bootstrap/app.ts</code> file:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { Container } from "jcc-express-mvc/Container";
import { AppServiceProvider } from "../app/Providers/AppServiceProvider";
import { RouteServiceProvider } from "../app/Providers/RouteServiceProvider";

const container = Container.getInstance();

// Register service providers
container.register([
  AppServiceProvider,
  RouteServiceProvider,
]);

// Boot service providers
container.boot();`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Creating a Service Provider</h2>

        <p>
          Service providers typically have two methods: <code>register</code> and <code>boot</code>:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { Container } from "jcc-express-mvc/Container";
import { ServiceProvider } from "jcc-express-mvc/lib/Services/ServiceProvider";
import { PaymentService } from "../Services/PaymentService";
import { StripeService } from "../Services/StripeService";

export class PaymentServiceProvider extends ServiceProvider {
  constructor(app: Container) {
    super(app);
  }

  public register(): void {
    // Register services
    this.app.singleton<StripeService>('StripeService', new StripeService());
    this.app.bind<PaymentService>('PaymentService', new PaymentService(
      this.app.make<StripeService>('StripeService')
    ));
  }

  public boot(): void {
    // Perform any actions after all services are registered
    const paymentService = this.app.make<PaymentService>('PaymentService');
    paymentService.initialize();
  }
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Contextual Binding</h2>

        <p>
          Sometimes you may have two classes that use the same interface, but you want to inject different
          implementations based on the class that is receiving the dependency:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { Container } from "jcc-express-mvc/Container";

// Define an interface
interface PaymentGateway {
  processPayment(amount: number): Promise<boolean>;
}

// Implement the interface for different payment providers
class StripeGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    // Stripe-specific implementation
    return true;
  }
}

class PayPalGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    // PayPal-specific implementation
    return true;
  }
}

// Services that depend on the PaymentGateway
class SubscriptionService {
  constructor(private paymentGateway: PaymentGateway) {}
}

class OrderService {
  constructor(private paymentGateway: PaymentGateway) {}
}

// Register contextual bindings
const container = Container.getInstance();

// When SubscriptionService needs a PaymentGateway, give it StripeGateway
container.when(SubscriptionService)
  .needs(PaymentGateway)
  .give(StripeGateway);

// When OrderService needs a PaymentGateway, give it PayPalGateway
container.when(OrderService)
  .needs(PaymentGateway)
  .give(PayPalGateway);`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Benefits of Dependency Injection</h2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Testability</strong>: Makes your code easier to test by allowing you to mock dependencies
          </li>
          <li>
            <strong>Loose Coupling</strong>: Reduces the dependency between classes
          </li>
          <li>
            <strong>Maintainability</strong>: Makes your code more maintainable by centralizing dependency management
          </li>
          <li>
            <strong>Flexibility</strong>: Allows you to swap implementations without changing the dependent code
          </li>
        </ul>
      </div>
    </div>
  )
}
