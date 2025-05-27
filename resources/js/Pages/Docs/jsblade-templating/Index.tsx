import CodeHighLight from "@/Components/CodeHighlight";
import DocLayout from "@/Components/doc-layout";

export default function JsBladeTemplatingPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          jsBlade Templating
        </h1>

        <div className="space-y-4">
          <p>
            jcc-express-starter allows you to use any templating engine of your
            choice for rendering views. The package comes pre-configured with
            jsBlade, which is similar to Laravel's Blade templating engine.
            jsBlade provides a clean, simple way to write dynamic templates with
            features like conditionals, loops, and template inheritance.
          </p>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Basic Usage
          </h2>

          <div>
            jsBlade templates are stored in the{" "}
            <CodeHighLight>resources/views</CodeHighLight> directory and have
            the <CodeHighLight>.blade.html</CodeHighLight> extension. Here's a
            simple example:
          </div>

          <CodeHighLight>
            {`<!-- resources/views/welcome.blade.html -->
<html>
  <head>
    <title>Welcome to jcc-express-mvc</title>
  </head>
  <body>
    <h1>Hello, {{ name }}</h1>

    @if(items)
    <ul>
      @foreach(items as item)
      <li>{{ item.name }}</li>
      @endforeach
    </ul>
    @else
    <p>No items found</p>
    @endif
  </body>
</html>`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Rendering Views from Controllers
          </h2>

          <p>
            To render a view from a controller, use the{" "}
            <code>res.render()</code> method:
          </p>

          <CodeHighLight>
            {`import { Request, Response, Next } from "jcc-express-mvc/core/http";

export class HomeController {
  async index(req: Request, res: Response, next: Next) {
    return res.render("welcome", {
      name: "User",
      items: [{ name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }],
    });
  }
}`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Template Inheritance
          </h2>

          <p>
            jsBlade supports template inheritance, allowing you to define a base
            layout and extend it in child views:
          </p>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Creating a Layout
          </h3>

          <CodeHighLight>
            {`<!-- resources/views/layouts/app.blade.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>@section('title')My App@endsection</title>
    <link rel="stylesheet" href="/css/app.css" />
  </head>
  <body>
    <header>@include('partials.nav')</header>

    <main>
      @section('content')
      <!-- Default content -->
      @endsection
    </main>

    <footer>@include('partials.footer')</footer>

    <script src="/js/app.js"></script>
  </body>
</html>`}
          </CodeHighLight>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Extending a Layout
          </h3>

          <CodeHighLight>
            {`<!-- resources/views/dashboard.blade.html -->
@extends('layouts.app')

@section('title', 'Dashboard')

@section('content')
<div class="dashboard">
  <h1>Dashboard</h1>
  <p>Welcome to your dashboard!</p>
</div>
@endsection`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Including Partials
          </h2>

          <p>
            You can include partial views using the <code>@include</code>{" "}
            directive:
          </p>

          <CodeHighLight>
            {`<!-- resources/views/partials/nav.blade.html -->
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<!-- Usage in another view -->
@include('partials.nav')`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Directives
          </h2>

          <p>
            jsBlade provides several directives that you can use in your views:
          </p>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Conditionals
          </h3>

          <CodeHighLight>
            {`@if(condition)
  <!-- Content to render if condition is true -->
@else
  <!-- Content to render if condition is false -->
@endif

@ternary(condition ? 
  <!-- content if true -->
  : 
  <!-- content if false -->
)`}
          </CodeHighLight>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Loops
          </h3>

          <CodeHighLight>
            {`@foreach(array as item)
  <!-- Content to render for each item in the array -->
@endforeach`}
          </CodeHighLight>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Authentication
          </h3>

          <CodeHighLight>
            {`@auth
  <!-- Content to render for authenticated users -->
@endauth

@guest
  <!-- Content to render for guests (unauthenticated users) -->
@endguest`}
          </CodeHighLight>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Sections
          </h3>

          <CodeHighLight>
            {`@section('content')
  <!-- Content to render in the section -->
@endsection`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Form Handling
          </h2>

          <p>
            jsBlade makes it easy to work with forms, including displaying
            validation errors and old input values:
          </p>

          <CodeHighLight>
            {`<form action="/users" method="POST">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" value="{{ old.name }}" />
    @if(errors.name)
    <small class="text-danger">{{ errors.name }}</small>
    @endif
  </div>

  <button type="submit">Submit</button>
</form>`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Configuring a Different Templating Engine
          </h2>

          <p>
            If you prefer to use a different templating engine, you can
            configure it in the <code>app/Config/engine.ts</code> file:
          </p>

          <CodeHighLight>
            {`const ejs = require("ejs");

module.exports = (app) => {
  app.set("view engine", "ejs");
  return;
};`}
          </CodeHighLight>

          <div>
            You can also enable or disable the templating engine by setting the{" "}
            <CodeHighLight>TEMPLATE_ENGINE</CodeHighLight> variable in your{" "}
            <CodeHighLight>.env</CodeHighLight> file.
          </div>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Best Practices
          </h2>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <strong>Organize Views</strong>: Keep your views organized in
              subdirectories based on their purpose (e.g., layouts, partials,
              pages)
            </li>
            <li>
              <strong>Use Layouts</strong>: Create reusable layouts to maintain
              consistency across your application
            </li>
            <li>
              <strong>Partials for Reusable Components</strong>: Extract
              reusable components into partial views
            </li>
            <li>
              <strong>Keep Logic Minimal</strong>: Keep complex logic in your
              controllers and keep your views focused on presentation
            </li>
          </ul>
        </div>
      </div>
    </DocLayout>
  );
}
