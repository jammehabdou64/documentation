import { Route } from "jcc-express-mvc/Core";

Route.get("/", (req, res) => {
  return res.inertia("Index");
});

Route.get("/docs/introduction", (req, res) => {
  return res.inertia("Docs/introduction/Index");
});

Route.get("/docs", (req, res) => {
  return res.inertia("Docs/introduction/Index");
});
