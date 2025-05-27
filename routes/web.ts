import { Route } from "jcc-express-mvc/Core";

Route.get("/", (req, res) => {
  return res.inertia("Index");
});

Route.get("/docs/introduction", (req, res) => {
  return res.inertia("Docs/introduction/Index");
});

Route.get("/docs", (req, res) => {
  return res.inertiaRedirect("/docs/introduction");
});

Route.get("/docs/installation", (req, res) => {
  return res.inertia("Docs/installation/Index");
});

Route.get("/docs/quick-start", (req, res) => {
  return res.inertia("Docs/quick-start/Index");
});

Route.get("/docs/project-structure", (req, res) => {
  return res.inertia("Docs/project-structure/Index");
});

Route.get("/docs/routing", (req, res) => {
  return res.inertia("Docs/routing/Index");
});

Route.get("/docs/controllers", (req, res) => {
  return res.inertia("Docs/controllers/Index");
});

Route.get("/docs/middlewares", (req, res) => {
  return res.inertia("Docs/middlewares/Index");
});

Route.get("/docs/orm", (req, res) => {
  return res.inertia("Docs/orm/Index");
});

Route.get("/docs/validation", (req, res) => {
  return res.inertia("Docs/validation/Index");
});

Route.get("/docs/form-request", (req, res) => {
  return res.inertia("Docs/form-request/Index");
});

Route.get("/docs/service-container", (req, res) => {
  return res.inertia("Docs/service-container/Index");
});

Route.get("/docs/service-provider", (req, res) => {
  return res.inertia("Docs/service-provider/Index");
});

Route.get("/docs/artisan-node-cli", (req, res) => {
  return res.inertia("Docs/artisan-node-cli/Index");
});

Route.get("/docs/tinker-node", (req, res) => {
  return res.inertia("Docs/tinker-node/Index");
});

Route.get("/docs/jsblade-templating", (req, res) => {
  return res.inertia("Docs/jsblade-templating/Index");
});

Route.get("/docs/inertia-integration", (req, res) => {
  return res.inertia("Docs/inertia-integration/Index");
});

// Route.get("/docs/helpers", (req, res) => {
//   return res.inertia("Docs/helpers/Index");
// });

Route.get("/docs/string-utilities", (req, res) => {
  return res.inertia("Docs/string-utilities/Index");
});
