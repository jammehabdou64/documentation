export default function RoutingPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Routing</h1>

      <div className="space-y-4">
        <p>
          Basic routing is meant to route your request to an appropriate controller. The routes of the application can
          be defined in route/web.js or route/api.js file. Here is the general route syntax for each of the possible
          request. You can define the URLs of your application with the help of routes. These routes can contain
          variable data, connect to controllers or can be wrapped into middlewares.
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { Route } from "jcc-express-mvc/Route";
import { auth } from "jcc-express-mvc";
import { UsersController } from "@Controllers/UsersController";

Route.get("/", (req, res, next) => {
  return res.json({ message: "Hello, World" });
});`}
            </code>
          </pre>
        </div>

        <p>Or</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`Route.get("/", [UsersController, "index"]);

Route.middleware(auth).get("/profile", (req, res, next) => {
  return res.json({ message: "I'm Authenticated" });
});`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Route Group</h2>
        <p>
          Route groups in this framework allow for the organization and sharing of route attributes, such as middleware,
          across multiple routes without the need to specify them individually for each route.
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`Route.prefix("/users").group((Route) => {
  Route.get("/", UsersController.index);
  Route.get("/create", UsersController.create);
  Route.post("/", UsersController.store);
  Route.get("/:id", UsersController.show);
  Route.patch("/:id", UsersController.edit);
  Route.delete("/:id", UsersController.destroy);
});`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Route Prefix</h2>
        <p>
          The prefix method adds a string to the beginning of each route name in the group. The method is used to prefix
          each route name in the group with "users", making it easier to identify and manage routes related to user
          functionality.
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`Route.prefix("/users").group((Route) => {
  Route.get("/", "index");
  Route.get("/create", "create");
  Route.post("/", "store");
  Route.get("/{id}", "show");
  Route.patch("/{id}", "edit");
  Route.delete("/{id}", "destroy");
});`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Route Controller</h2>
        <p>
          If all routes in a group use the same controller, you can use the controller method to set that controller for
          the whole group. Then, when creating routes, you just need to specify the method they call on that controller.
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`Route.controller(UsersController).group((Route) => {
  Route.get("/", "index");
  Route.get("/create", "create");
  Route.post("/", "store");
  Route.get("/{id}", "show");
  Route.patch("/{id}", "edit");
  Route.delete("/{id}", "destroy");
});`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Routes Parameter</h2>
        <p>
          In the `jcc-express-mvc` framework, routes often contain parameters that are dynamic values parsed from the
          URL path. These parameters are defined using placeholders in the route path and are accessible within route
          handlers via the `req.params` object. Routes parameters can be defined in route paths using placeholders
          indicated by : or {} followed by the parameter name.
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { Route } from "jcc-express-mvc/Route";

Route.get("/:id", (req, res) => {
  console.log(req.params.id);
});`}
            </code>
          </pre>
        </div>

        <p>or</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { Route } from "jcc-express-mvc/Route";

Route.get("/{id}", (req, res) => {
  console.log(req.params.id);
});`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
