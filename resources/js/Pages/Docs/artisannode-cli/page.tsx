export default function ArtisanNodeCliPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">ArtisanNode CLI</h1>

      <div className="space-y-4">
        <p>
          ArtisanNode CLI is a command-line interface tool for jcc-express-starter that helps you generate code,
          interact with your database, and perform various tasks to speed up your development workflow. It&apos;s
          inspired by Laravel&apos;s Artisan CLI.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Basic Usage</h2>

        <p>
          ArtisanNode commands are run using <code>ts-node</code> from your project&apos;s root directory:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>ts-node artisanNode [command] [options]</code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Available Commands</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Generate Commands</h3>

        <p>These commands help you generate various files for your application:</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`# Generate a controller
ts-node artisanNode make:controller UsersController

# Generate a model
ts-node artisanNode make:model User

# Generate a form request
ts-node artisanNode make:request UserRequest

# Generate a model with controller and migration
ts-node artisanNode make:model User -mcr

# Generate a model with controller, migration, and seeder
ts-node artisanNode make:model User -mcsr`}
            </code>
          </pre>
        </div>

        <h4 className="font-medium">Options for make:model</h4>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <code>-m, --migration</code>: Create a migration file for the model
          </li>
          <li>
            <code>-c, --controller</code>: Create a controller for the model
          </li>
          <li>
            <code>-r, --resource</code>: Indicates if the generated controller should be a resource controller
          </li>
          <li>
            <code>-s, --seeder</code>: Create a seeder file for the model
          </li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Migration Commands</h3>

        <p>These commands help you manage your database migrations:</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`# Run all pending migrations
ts-node artisanNode migrate

# Rollback the last migration operation
ts-node artisanNode migrate:rollback

# Rollback multiple migrations
ts-node artisanNode migrate:rollback --steps=3

# Reset and re-run all migrations
ts-node artisanNode migrate:fresh

# Reset all migrations
ts-node artisanNode migrate:reset`}
            </code>
          </pre>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Seeder Commands</h3>

        <p>These commands help you seed your database with test data:</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`# Run all seeders
ts-node artisanNode db:seed

# Run a specific seeder
ts-node artisanNode db:seed --class=UserSeeder`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Creating a Migration</h2>

        <p>
          When you generate a migration, either directly or through the <code>make:model</code> command with the{" "}
          <code>-m</code> option, a new migration file is created in the <code>database/migrations</code> directory.
        </p>

        <p>Here&apos;s an example of a migration file:</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { Schema } from "jcc-eloquent";

export default class CreateUsersTable {
  public async up() {
    await Schema.create("users", (table) => {
      table.id();
      table.string("name");
      table.string("email").unique();
      table.string("password");
      table.timestamps();
    });
  }

  public async down() {
    await Schema.dropIfExists("users");
  }
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Creating a Seeder</h2>

        <p>
          Seeders are used to populate your database with test data. When you generate a seeder, either directly or
          through the <code>make:model</code> command with the <code>-s</code> option, a new seeder file is created in
          the <code>database/seeders</code> directory.
        </p>

        <p>Here&apos;s an example of a seeder file:</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { User } from "@/Models/User";
import { bcrypt } from "jcc-express-mvc";

export default class UserSeeder {
  public async run() {
    const users = [
      {
        name: "Admin User",
        email: "admin@example.com",
        password: await bcrypt("password"),
      },
      {
        name: "Regular User",
        email: "user@example.com",
        password: await bcrypt("password"),
      },
    ];

    for (const userData of users) {
      await User.create(userData);
    }
  }
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Creating Custom Commands</h2>

        <p>
          You can create your own custom ArtisanNode commands to automate tasks specific to your application. To do
          this, you&apos;ll need to create a command file in the <code>app/Console/Commands</code> directory.
        </p>

        <p>Here&apos;s an example of a custom command:</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// app/Console/Commands/SendEmailsCommand.ts
import { Command } from "jcc-express-mvc/Console/Command";
import { User } from "@/Models/User";

export class SendEmailsCommand extends Command {
  // The name and signature of the console command
  protected signature = "emails:send {user?} {--queue}";

  // The console command description
  protected description = "Send queued emails to users";

  // Execute the console command
  public async handle(args: any, options: any) {
    const userId = args.user;
    const queue = options.queue || false;

    if (userId) {
      this.info(\`Sending emails to user: \${userId}\`);
      // Logic to send emails to a specific user
    } else {
      this.info("Sending emails to all users");
      // Logic to send emails to all users
    }

    if (queue) {
      this.info("Emails will be queued for sending");
      // Logic to queue emails instead of sending immediately
    }

    this.success("Emails sent successfully!");
  }
}`}
            </code>
          </pre>
        </div>

        <p>
          After creating your custom command, you need to register it in the <code>app/Console/Kernel.ts</code> file:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// app/Console/Kernel.ts
import { SendEmailsCommand } from "./Commands/SendEmailsCommand";

export class Kernel {
  protected commands = [
    SendEmailsCommand,
  ];
}`}
            </code>
          </pre>
        </div>

        <p>Then you can run your custom command:</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>ts-node artisanNode emails:send</code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Command Arguments and Options</h2>

        <p>
          Custom commands can accept arguments and options. Arguments are required inputs, while options are optional
          flags.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Arguments</h3>

        <p>
          Arguments are defined in the command signature using curly braces <code>{"{argument}"}</code>. Optional
          arguments are indicated with a question mark <code>{"{argument?}"}</code>.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Options</h3>

        <p>
          Options are defined in the command signature using curly braces with double dashes <code>{"{--option}"}</code>
          . Options that accept values are indicated with an equals sign <code>{"{--option=}"}</code>.
        </p>

        <p>Example of running a command with arguments and options:</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>ts-node artisanNode emails:send john --queue</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
