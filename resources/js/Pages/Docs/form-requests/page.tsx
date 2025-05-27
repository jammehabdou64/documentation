export default function FormRequestsPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Form Requests</h1>

      <div className="space-y-4">
        <p>
          Form Requests in jcc-express-mvc are dedicated classes that handle validation and authorization logic for
          specific HTTP requests. They help keep your controllers clean by moving validation logic into separate
          classes.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Creating a Form Request</h2>

        <p>You can create a new Form Request using the ArtisanNode CLI:</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>ts-node artisanNode make:request UserRequest</code>
          </pre>
        </div>

        <p>
          This will create a new Form Request class at <code>app/Http/Request/UserRequest.ts</code>.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Basic Form Request Structure</h2>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { FormRequest } from "jcc-express-mvc/core/FormRequest";
import { Request } from "jcc-express-mvc/core/http";

export class UserRequest extends FormRequest {
  constructor(req: Request) {
    super(req);
  }

  async rules() {
    await this.apiValidate({
      name: ["required"],
      email: ["required", "email", "unique:users"],
      password: ["required", "min:6"],
    });
  }

  async save() {
    await this.rules();
  }
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Using Form Requests in Controllers</h2>

        <p>Once you've created a Form Request, you can use it in your controllers to handle validation:</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { Request, Response, Next } from "jcc-express-mvc/core/http";
import { UserRequest } from "@/Http/Request/UserRequest";
import { User } from "@/Models/User";

export class UsersController {
  async store(req: Request, res: Response, next: Next) {
    // Create a new instance of the Form Request
    const userRequest = new UserRequest(req);
    
    // Run validation
    await userRequest.save();
    
    // If validation passes, create the user
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt(req.body.password),
    });
    
    return res.redirect("/users");
  }
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Adding Authorization Logic</h2>

        <p>
          Form Requests can also include authorization logic to determine if the authenticated user can perform the
          requested action:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { FormRequest } from "jcc-express-mvc/core/FormRequest";
import { Request } from "jcc-express-mvc/core/http";

export class UpdateUserRequest extends FormRequest {
  constructor(req: Request) {
    super(req);
  }

  async authorize() {
    // Check if the authenticated user can update this user
    const userId = this.req.params.id;
    return this.req.user && (this.req.user.id === userId || this.req.user.isAdmin);
  }

  async rules() {
    await this.apiValidate({
      name: ["required"],
      email: ["required", "email", "unique:users,email," + this.req.params.id],
    });
  }

  async save() {
    // Check authorization first
    if (!(await this.authorize())) {
      throw new Error("Unauthorized");
    }
    
    // Then run validation
    await this.rules();
  }
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Custom Validation Messages</h2>

        <p>
          You can provide custom validation messages in your Form Request by defining a <code>messages</code> method:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { FormRequest } from "jcc-express-mvc/core/FormRequest";
import { Request } from "jcc-express-mvc/core/http";

export class UserRequest extends FormRequest {
  constructor(req: Request) {
    super(req);
  }

  messages() {
    return {
      "name.required": "Please enter your name",
      "email.required": "Please enter your email address",
      "email.email": "Please enter a valid email address",
      "email.unique": "This email is already registered",
      "password.required": "Please enter a password",
      "password.min": "Password must be at least 6 characters",
    };
  }

  async rules() {
    await this.apiValidate({
      name: ["required"],
      email: ["required", "email", "unique:users"],
      password: ["required", "min:6"],
    }, this.messages());
  }

  async save() {
    await this.rules();
  }
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Handling Validation Errors</h2>

        <p>
          When validation fails, the Form Request will automatically handle the errors. For web requests, it will
          redirect back with the errors and input data. For API requests, it will return a JSON response with the
          validation errors.
        </p>

        <p>
          You can access the validation errors in your views using the <code>errors</code> variable, and the old input
          values using the <code>old</code> variable:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`<input
  type="text"
  name="name"
  value="{{old.name}}"
  class="form-control @if(errors.name) is-invalid @endif"
/>
@if(errors.name)
  <div class="invalid-feedback">{{errors.name}}</div>
@endif`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Benefits of Form Requests</h2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Clean Controllers</strong>: Move validation logic out of controllers for better organization
          </li>
          <li>
            <strong>Reusable Validation</strong>: Reuse validation rules across multiple controllers
          </li>
          <li>
            <strong>Authorization Logic</strong>: Combine validation and authorization in one place
          </li>
          <li>
            <strong>Custom Error Messages</strong>: Define custom error messages for specific validation rules
          </li>
        </ul>
      </div>
    </div>
  )
}
