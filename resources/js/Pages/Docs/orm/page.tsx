export default function OrmPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">ORM (jcc-eloquent)</h1>

      <div className="space-y-4">
        <p>
          `jcc-eloquent` is an ORM for Node.js designed to provide Eloquent-style features and database interaction. It
          simplifies complex queries and supports models, relationships, mass assignment, and events.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Key Features</h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Model relationships: hasOne, hasMany, morphMany, etc.</li>
          <li>Eloquent-like mass assignment with fillable and guarded properties</li>
          <li>Attribute casting with casts and hidden properties for sensitive fields</li>
          <li>Event hooks for lifecycle methods (booted, creating, etc.)</li>
          <li>QueryBuilder with chainable methods like select, where, orderBy, and pagination</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Basic Usage</h2>
        <p>Define models with properties like fillable, guarded, hidden, casts, and event hooks.</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { Model } from "jcc-eloquent";

class User extends Model {
    // Attributes hidden from JSON serialization
  protected static hidden: string[] = ["password"];

  // Attributes allowed for mass assignment
  protected static fillable: string[] = ["name"];

  // Attributes excluded from mass assignment
  protected static guarded: string[] = ["role_id"];

  // Enables soft delete functionality
  protected static softDelete: boolean = true;

  // Cast attributes with custom transformations
  protected static casts = {
      created_at: 'date', // 2024-05-23
      created_at:'time',// 12:58
      created_at:'datetime'// 2024-05-23 12:58
      updated_at:'now'// 2 hours ago
      updated_at:'date:d-m-y' // 23-05-2024
      updated_at:'date:d/m/y' // 23/05/2024
      getEmail: this.getEmail
      setEmail: this.setEmail
      id:'integer' // return the id as an integer  1;
      price:'string' //  return the price as an string "20000"
      draft:'array' // Will parse or stringyfy the data
    };

     // Attribute getter - retrieves email in lowercase
    protected static getEmail(value)
    {
      return value.toUppercase()
    }

  // Attribute setter - sets email in uppercase
    protected static setEmail(value)
    {
      return value.toLowercase()
    }
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Available Relationships</h2>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`class Post extends Model {
  author() {
    return this.belongsTo("User", "author");
  }

  comments() {
    return this.hasMany("Comment", "id");
  }

  likes() {
    return this.morphyMany("likes");
  }

  //Implement custom events to hook into model actions.
  static booted(): void {
    this.creating((data) => {
      // Custom logic before creating a post (e.g., setting defaults)
    });

    this.created((data) => {
      // Custom logic after creating a post (e.g., setting defaults)
    });

    this.updating((data) => {
      // Custom logic before updating a post (e.g., setting defaults)
    });

    this.updated((data) => {
      // Custom logic after updating a post (e.g., setting defaults)
    });

    this.deleting((data) => {
      // Custom logic before deleting a post (e.g., setting defaults)
    });
  }
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Querying the Database</h2>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { bcrypt, Auth } from "jcc-express-mvc";
import { Request, Response, Next } from "jcc-express-mvc/core/http";
import { Post } from "@/Model/Post";
import { Blueprint } from "jcc-eloquent/QueryBuilder";
export class PostsController {
  //

  async index(req: Request, res: Response, next: Next) {
    return res.json({
      message: await Post.with("author",{comments(query:QueryBuilder)=>query.where('status','active').with('user')
      }).paginate(req, 100),
    });
  }

  //

  async store(req: Request, res: Response, next: Next) {
    const attributes = await req.validate({
      name: ["required"],
      email: ["required", "unique:post"],
      password: ["required", "min:6"],
    });

    const save = await Post.create({ attributes });
    return save
      ? Auth.attempt(req, res, next)
      : res.json({ message: "Invalid credentials" });
  }

  //

  async show(req: Request, res: Response, next: Next) {
    return res.json({
      message: await Post.find(req.params.id),
    });
  }
}`}
            </code>
          </pre>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Common Query Methods</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Model.all()</h4>
            <p>Retrieves all records from the database table associated with the current model.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const users = await User.all();
console.log(users);`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">Model.find(id)</h4>
            <p>Retrieves a single record from the database table associated with the current model by its ID.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const user = await User.find(1);
console.log(user);`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">Model.create(data)</h4>
            <p>Creates one or more records in the database table associated with the current model.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const user = await User.create({
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
});
console.log(user);

const users = await User.create([
  { name: "Jane Doe", email: "jane.doe@example.com", age: 28 },
  { name: "John Smith", email: "john.smith@example.com", age: 35 },
]);
console.log(users);`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">save()</h4>
            <p>
              Saves the current instance to the database. If the instance has an id, it performs an update; otherwise,
              it performs an insert.
            </p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const user = new User();
user.name = "Abdou";
await user.save();`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Schema Builder</h2>
        <p>Define database schemas with `Blueprint` for migrations.</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { Schema } from "jcc-eloquent";

Schema.create("users", (table) => {
  table.id();
  table.string("name");
  table.unsignedBigInteger("role_id");
  table.foreign("role_id").references("id").on("roles");
  table.timestamps();
});`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
