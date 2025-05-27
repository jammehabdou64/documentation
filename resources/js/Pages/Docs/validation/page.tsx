export default function ValidationPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Validation</h1>

      <div className="space-y-4">
        <p>
          The jcc-express-mvc framework comes with built-in validation rules that enable you to ensure the validity of
          data submitted by users before further processing. These validation rules can be applied either in web routes
          or API routes using the provided methods.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Web Validation</h2>

        <p>
          In web routes, you can use the <code>req.validate()</code> method to validate incoming data. Here's an example
          of how to use it:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { Request, Response, Next } from "jcc-express-mvc/core/http";

class UsersController {
  /**
   *
   *
   * @return Express request response next
   */
  async store(req: Request, res: Response, next: Next) {
    const validateData = await req.validate({
      name: ["required"],
      email: ["email", "unique:user"],
      password: ["min:6"],
    });

    res.json({ validateData });
  }
}`}
            </code>
          </pre>
        </div>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>name</strong>: Specifies the name of the field to be validated.
          </li>
          <li>
            <strong>required</strong>: Ensures that the field is present and not empty.
          </li>
          <li>
            <strong>email</strong>: Validates that the field is a valid email address.
          </li>
          <li>
            <strong>unique:user</strong>: Checks uniqueness of the field value against a database table (e.g., checking
            if an email is already registered).
          </li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">API Validation</h2>

        <p>
          For API routes, the <code>req.apiValidate()</code> method is used to perform validation. Here's an example:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`async store(req: Request, res: Response, next: Next) {
  const validateData = await req.apiValidate({
    name: ["required"],
    email: ["email", "unique:user"],
    password: ["min:6"],
  });

  res.json({ validateData });
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Available Validation Rules</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="font-medium">Basic Validation</h3>
            <ul className="ml-6 list-disc [&>li]:mt-1">
              <li>
                <code>required</code>: Field must be present and not empty
              </li>
              <li>
                <code>min:value</code>: Field must be at least the specified length
              </li>
              <li>
                <code>max:value</code>: Field must not exceed the specified length
              </li>
              <li>
                <code>same:field</code>: Field must match another field (e.g., password confirmation)
              </li>
              <li>
                <code>nullable</code>: Field can be null
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Type Validation</h3>
            <ul className="ml-6 list-disc [&>li]:mt-1">
              <li>
                <code>email</code>: Field must be a valid email address
              </li>
              <li>
                <code>alpha</code>: Field must contain only alphabetic characters
              </li>
              <li>
                <code>alphaNum</code>: Field must contain only alphanumeric characters
              </li>
              <li>
                <code>bool</code>: Field must be a boolean
              </li>
              <li>
                <code>float</code>: Field must be a floating-point number
              </li>
              <li>
                <code>int</code>: Field must be an integer
              </li>
              <li>
                <code>decimal</code>: Field must be a decimal number
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Format Validation</h3>
            <ul className="ml-6 list-disc [&>li]:mt-1">
              <li>
                <code>jwt</code>: Field must be a valid JWT token
              </li>
              <li>
                <code>json</code>: Field must be valid JSON
              </li>
              <li>
                <code>postal</code>: Field must be a valid postal code
              </li>
              <li>
                <code>slug</code>: Field must be a valid slug
              </li>
              <li>
                <code>url</code>: Field must be a valid URL
              </li>
              <li>
                <code>creditCard</code>: Field must be a valid credit card number
              </li>
              <li>
                <code>mongoId</code>: Field must be a valid MongoDB ID
              </li>
              <li>
                <code>phone</code>: Field must be a valid phone number
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Database Validation</h3>
            <ul className="ml-6 list-disc [&>li]:mt-1">
              <li>
                <code>unique:table</code>: Field must be unique in the specified database table
              </li>
              <li>
                <code>exists:table</code>: Field must exist in the specified database table
              </li>
            </ul>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Displaying Validation Errors</h2>

        <p>
          In jcc-express-mvc, the <code>errors</code> variable in the view file holds all the validation errors. To
          access errors for a specific field, use <code>errors.field</code>. The <code>old</code> variable holds all the
          input values.
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`<form action="/auth/register" class="w-11/12 sm:w-[450px] py-2 px-6 bg-white" method="post">
  <h2 class="text-center font-extrabold text-xl my-2 py-2">Register</h2>
  <div class="flex-col mt-1 flex">
    <label for="email" class="text-gray-800">Name</label>
    <input
      type="name"
      placeholder="name"
      class="outline-none border border-gray-400 mt-1 px-3 py-2"
      id="name"
      name="name"
      value="{{old.name}}"
    />
    <small
      class="@if(errors.name) text-red-500 text-xs mx-2 @else hidden @endif"
      >{{errors.name}}</small>
  </div>
  <div class="flex-col mt-1 flex">
    <label for="email" class="text-gray-800">Email</label>
    <input
      type="email"
      placeholder="email"
      class="outline-none border border-gray-400 mt-1 px-3 py-2"
      id="email"
      name="email"
      value="{{old.email}}"
    />
    <small
      class="@if(errors.email) text-red-500 text-xs mx-2 @else hidden @endif"
      >{{errors.email}}</small>
  </div>
  <div class="flex-col mt-4 flex">
    <label for="password" class="text-gray-800">Password</label>
    <input
      type="password"
      placeholder="password"
      class="outline-none border border-gray-400 mt-1 px-3 py-2"
      id="password"
      name="password"
      value=""
    />
    <small
      class="@if(errors.password) text-red-500 text-xs mx-2 @else hidden @endif"
      >{{errors.password}}</small>
  </div>
  <div class="py-2 mt-3">
    <button type="submit" class="bg-orange-500 p-2 w-full text-white">
      login
    </button>
  </div>
  <div class="mb-2 py-3">
    <p class="text-sm">
      Already have an account?
      <a href="/login" class="text-orange-500 underline">login</a>
    </p>
  </div>
</form>`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Custom Validation Messages</h2>

        <p>
          You can provide custom validation messages by passing a second argument to the <code>validate</code> or{" "}
          <code>apiValidate</code> methods:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`const validateData = await req.validate(
  {
    name: ["required"],
    email: ["email", "unique:user"],
    password: ["min:6"],
  },
  {
    "name.required": "Please enter your name",
    "email.email": "Please enter a valid email address",
    "email.unique": "This email is already registered",
    "password.min": "Password must be at least 6 characters",
  }
);`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
