import CodeHighLight from "@/Components/CodeHighlight";
import DocLayout from "@/Components/doc-layout";

export default function ControllersPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Controllers
        </h1>

        <div className="space-y-4">
          <p>
            Controllers in jcc-express-mvc handle the logic for processing
            requests and returning responses. They serve as the bridge between
            your routes and your models, organizing your application's logic in
            a clean and maintainable way.
          </p>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Basic Controller Structure
          </h2>

          <p>
            Here's an example of a basic controller that handles user-related
            actions. This controller contains methods to handle various
            user-related operations:
          </p>

          <CodeHighLight>
            {`import { bcrypt, Auth,Request, Response, Next } from "jcc-express-mvc";
import { User } from "@/Model/User";

export class UsersController {
  //
  async index(req: Request, res: Response, next: Next) {
    return res.json({
      message: await User.all(),
    });
  }

  //
  async store(req: Request, res: Response, next: Next) {
    await req.validate({
      name: ["required"],
      email: ["required", "unique:users"],
      password: ["required", "min:6"],
    });

    const save = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt(req.body.password),
      primary_phone: "7501035",
    });

    return save
      ? Auth.attempt(req, res, next)
      : res.json({ message: "Invalid credentials" });
  }

  //
  async show(req: Request, res: Response, next: Next) {
    return res.json({
      message: await User.find(req.params.id),
    });
  }
}`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Controller Methods
          </h2>

          <p>
            Controllers typically include the following RESTful methods to
            handle different types of requests for a resource:
          </p>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <strong>index</strong>: Display a list of all resources
            </li>
            <li>
              <strong>create</strong>: Show the form to create a new resource
            </li>
            <li>
              <strong>store</strong>: Store a newly created resource
            </li>
            <li>
              <strong>show</strong>: Display a specific resource
            </li>
            <li>
              <strong>edit</strong>: Show the form to edit a resource
            </li>
            <li>
              <strong>update</strong>: Update a specific resource
            </li>
            <li>
              <strong>destroy</strong>: Delete a specific resource
            </li>
          </ul>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Creating Controllers
          </h2>

          <p>
            You can create a new controller using the ArtisanNode CLI. This will
            generate a controller file with the basic structure:
          </p>

          <CodeHighLight>
            ts-node artisanNode make:controller PostsController
          </CodeHighLight>

          <div>
            This will create a new controller file at{" "}
            <CodeHighLight>
              app/Http/Controllers/PostsController.ts
            </CodeHighLight>
          </div>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Using Controllers in Routes
          </h2>

          <p>There are several ways to use controllers in your routes:</p>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Method 1: Array Syntax
          </h3>

          <CodeHighLight>
            {`import { Route } from "jcc-express-mvc/Core";
import { UsersController } from "@Controllers/UsersController";

Route.get("/users", [UsersController, "index"]);
Route.get("/users/:id", [UsersController, "show"]);
Route.post("/users", [UsersController, "store"]);`}
          </CodeHighLight>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Method 2: Direct Method Reference
          </h3>

          <CodeHighLight>
            {`import { Route } from "jcc-express-mvc/Core";
import { UsersController } from "@Controllers/UsersController";

Route.get("/users", UsersController.index);
Route.get("/users/:id", UsersController.show);
Route.post("/users", UsersController.store);`}
          </CodeHighLight>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Method 3: Controller Method
          </h3>

          <CodeHighLight>
            {`import { Route } from "jcc-express-mvc/Core";
import { UsersController } from "@Controllers/UsersController";

Route.controller(UsersController).group((Route) => {
  Route.get("/users", "index");
  Route.get("/users/:id", "show");
  Route.post("/users", "store");
});`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Dependency Injection in Controllers
          </h2>

          <div>
            jcc-express-mvc supports dependency injection in controllers. You
            can use the <CodeHighLight>@Inject()</CodeHighLight> decorator to
            automatically inject dependencies:
          </div>

          <CodeHighLight>
            {`import { Inject } from "jcc-express-mvc/lib/Dependancy";
import { Request, Response, Next } from "jcc-express-mvc;
import { UserService } from "@/Services/UserService";

@Inject()
export class UsersController {
  constructor(private userService: UserService) {}

  async index(req: Request, res: Response, next: Next) {
    const users = await this.userService.getAllUsers();
    return res.json({ users });
  }
}`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Rendering Views from Controllers
          </h2>

          <div>
            You can render views from your controllers using the{" "}
            <CodeHighLight>res.render()</CodeHighLight> method:
          </div>

          <CodeHighLight>
            {`import { Request, Response, Next } from "jcc-express-mvc";
import { User } from "@/Models/User";

export class UsersController {
  async index(req: Request, res: Response, next: Next) {
    const users = await User.all();
    return res.render("users/index", { users });
  }

  async show(req: Request, res: Response, next: Next) {
    const user = await User.find(req.params.id);
    return res.render("users/show", { user });
  }
}`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Using Inertia.js with Controllers
          </h2>

          <div>
            If you're using Inertia.js, you can return Inertia responses from
            your controllers using the{" "}
            <CodeHighLight>res.inertia()</CodeHighLight> method:
          </div>

          <CodeHighLight>
            {`import { Request, Response, Next } from "jcc-express-mvc;
import { User } from "@/Models/User";

export class UsersController {
  async index(req: Request, res: Response, next: Next) {
    const users = await User.all();
    return res.inertia("Users/Index", { users });
  }

  async show(req: Request, res: Response, next: Next) {
    const user = await User.find(req.params.id);
    return res.inertia("Users/Show", { user });
  }
}`}
          </CodeHighLight>
        </div>
      </div>
    </DocLayout>
  );
}
