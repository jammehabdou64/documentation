import CodeHighLight from "@/Components/CodeHighlight";
import DocLayout from "@/Components/doc-layout";

export default function QuickStartPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Quick Start Guide
        </h1>

        <div className="space-y-4">
          <p>
            This guide will help you get started with jcc-express-starter
            quickly. We'll cover the basic steps to set up your project and
            create your first route and controller.
          </p>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            1. Navigate to your project
          </h2>
          <CodeHighLight>cd my-express-app</CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            2. Configure Environment
          </h2>
          <p>
            Edit the <code>.env</code> file to configure your database and other
            environment-specific settings:
          </p>
          <CodeHighLight>
            {`APP_SESSION_SECTRET=app-session-1203-4-556-22
PORT=5500

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=my_database
DB_USERNAME=root
DB_PASSWORD=password`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            3. Start the application
          </h2>
          <CodeHighLight>
            {`# start vite for frontend assets
npm run watch

# start development server
npm run dev`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            4. Create your first model
          </h2>
          <p>
            Use ArtisanNode CLI to generate a model, controller, and migration:
          </p>
          <CodeHighLight>
            {` ts-node artisanNode make:model Post mcr
  or
bun artisanNode make:model Post mcr`}
          </CodeHighLight>
          <p>This will create:</p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              A Post model in <CodeHighLight>app/Models/Post.ts</CodeHighLight>
            </li>
            <li>
              A PostsController in{" "}
              <CodeHighLight>
                app/Http/Controllers/PostsController.ts
              </CodeHighLight>
            </li>
            <li>
              A migration file in{" "}
              <CodeHighLight>database/migrations/</CodeHighLight>
            </li>
          </ul>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            5. Edit your migration
          </h2>
          <p>Open the migration file and define your table schema:</p>
          <CodeHighLight>
            {`import { Schema } from "jcc-eloquent";

export default class CreatePostsTable {
  public async up() {
    await Schema.create("posts", (table) => {
      table.id();
      table.string("title");
      table.text("content");
      table.unsignedBigInteger("user_id");
      table.foreign("user_id").references("id").on("users");
      table.timestamps();
    });
  }

  public async down() {
    await Schema.dropIfExists("posts");
  }
}`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            6. Run the migration
          </h2>

          <CodeHighLight>ts-node artisanNode migrate</CodeHighLight>
          <p>or</p>
          <CodeHighLight>bun artisanNode migrate</CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            7. Edit your model
          </h2>
          <div>
            Open <CodeHighLight>app/Models/Post.ts</CodeHighLight> and define
            your model properties:
          </div>
          <CodeHighLight>
            {`import { Model } from "jcc-eloquent";

export class Post extends Model {
  // Attributes allowed for mass assignment
  protected static fillable: string[] = ["title", "content", "user_id"];

  // Define relationships
  user() {
    return this.belongsTo("User", "user_id");
  }
}`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            8. Edit your controller
          </h2>
          <div>
            Open{" "}
            <CodeHighLight>
              app/Http/Controllers/PostsController.ts
            </CodeHighLight>{" "}
            and implement the methods:
          </div>
          <CodeHighLight>
            {`import { Request, Response, Next } from "jcc-express-mvc";
import { Post } from "@/Models/Post";

export class PostsController {
  async index(req: Request, res: Response, next: Next) {
    const posts = await Post.all();
    return res.render("posts/index", { posts });
  }

  async create(req: Request, res: Response, next: Next) {
    return res.render("posts/create");
  }

  async store(req: Request, res: Response, next: Next) {
    await req.validate({
      title: ["required"],
      content: ["required"],
    });

    await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.user.id, // Assuming user is authenticated
    });

    return res.redirect("/posts");
  }

  async show(req: Request, res: Response, next: Next) {
    const post = await Post.find(req.params.id);
    return res.render("posts/show", { post });
  }
}`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            9. Define your routes
          </h2>
          <div>
            Open <CodeHighLight>routes/web.ts</CodeHighLight> and add routes for
            your posts:
          </div>
          <CodeHighLight>
            {`import { Route } from "jcc-express-mvc/Core";
import { PostsController } from "@Controllers/PostsController";

// Home route
Route.get("/", (req, res) => {
  return res.render("index");
});

// Posts routes
Route.prefix("/posts").group((Route) => {
  Route.get("/", [PostsController, "index"]);
  Route.get("/create", [PostsController, "create"]);
  Route.post("/", [PostsController, "store"]);
  Route.get("/:id", [PostsController, "show"]);
});`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            10. Create your views
          </h2>
          <div>
            Create the necessary view files in{" "}
            <CodeHighLight>resources/views/posts/</CodeHighLight> directory. For
            example, <CodeHighLight>index.blade.html</CodeHighLight>
          </div>
          <CodeHighLight>
            {`@extends('layouts.app')

@section('content')
<div class="container">
  <h1>Posts</h1>
  
  <a href="/posts/create" class="btn">Create New Post</a>
  
  <div class="posts">
    @if(posts.length > 0)
      @foreach(posts as post)
        <div class="post">
          <h2>{{ post.title }}</h2>
          <p>{{ post.content.substring(0, 100) }}...</p>
          <a href="/posts/{{ post.id }}">Read More</a>
        </div>
      @endforeach
    @else
      <p>No posts found.</p>
    @endif
  </div>
</div>
@endsection`}
          </CodeHighLight>

          <div>
            That's it! You've created a basic CRUD application with
            jcc-express-starter. Visit{" "}
            <CodeHighLight>http://localhost:5500</CodeHighLight> to see your
            application in action.
          </div>
        </div>
      </div>
    </DocLayout>
  );
}
