import CodeHighLight from "@/Components/CodeHighlight";
import DocLayout from "@/Components/doc-layout";

export default function ArtisanNodeCliPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          ArtisanNode CLI
        </h1>

        <div className="space-y-4">
          <p>
            ArtisanNode CLI is a command-line interface tool for
            jcc-express-starter that helps you generate code, interact with your
            database, and perform various tasks to speed up your development
            workflow. It&apos;s inspired by Laravel&apos;s Artisan CLI.
          </p>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Basic Usage
          </h2>

          <div>
            ArtisanNode commands are run using{" "}
            <CodeHighLight>ts-node</CodeHighLight> from your project&apos;s root
            directory:
          </div>

          <CodeHighLight>ts-node artisanNode [command] [options]</CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Available Commands
          </h2>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Generate Commands
          </h3>

          <p>
            These commands help you generate various files for your application:
          </p>

          <CodeHighLight>
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
          </CodeHighLight>

          <h4 className="font-medium">Options for make:model</h4>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <CodeHighLight>-m, --migration</CodeHighLight>: Create a migration
              file for the model
            </li>
            <li>
              <CodeHighLight>-c, --controller</CodeHighLight>: Create a
              controller for the model
            </li>
            <li>
              <CodeHighLight>-r, --resource</CodeHighLight>: Indicates if the
              generated controller should be a resource controller
            </li>
            <li>
              <CodeHighLight>-s, --seeder</CodeHighLight>: Create a seeder file
              for the model
            </li>
          </ul>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Migration Commands
          </h3>

          <p>These commands help you manage your database migrations:</p>

          <CodeHighLight>
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
          </CodeHighLight>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Seeder Commands
          </h3>

          <p>These commands help you seed your database with test data:</p>

          <CodeHighLight>
            {`# Run all seeders
ts-node artisanNode db:seed

# Run a specific seeder
ts-node artisanNode db:seed --class=UserSeeder`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Creating a Migration
          </h2>

          <div>
            When you generate a migration, either directly or through the{" "}
            <CodeHighLight>make:model</CodeHighLight> command with the{" "}
            <CodeHighLight>-m</CodeHighLight> option, a new migration file is
            created in the <CodeHighLight>database/migrations</CodeHighLight>{" "}
            directory.
          </div>

          <p>Here&apos;s an example of a migration file:</p>

          <CodeHighLight>
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
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Creating a Seeder
          </h2>

          <div>
            Seeders are used to populate your database with test data. When you
            generate a seeder, either directly or through the{" "}
            <CodeHighLight>make:model</CodeHighLight> command with the{" "}
            <CodeHighLight>-s</CodeHighLight> option, a new seeder file is
            created in the <CodeHighLight>database/seeders</CodeHighLight>{" "}
            directory.
          </div>

          <p>Here&apos;s an example of a seeder file:</p>

          <CodeHighLight>
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
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Creating Custom Commands
          </h2>

          <div>
            You can create your own custom ArtisanNode commands to automate
            tasks specific to your application. To do this, you&apos;ll need to
            create a command file in the{" "}
            <CodeHighLight>app/Console/Commands</CodeHighLight> directory.
          </div>

          <p>Here&apos;s an example of a custom command:</p>

          <CodeHighLight>
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
          </CodeHighLight>

          <div>
            After creating your custom command, you need to register it in the{" "}
            <CodeHighLight>app/Console/Kernel.ts</CodeHighLight> file:
          </div>

          <CodeHighLight>
            {`// app/Console/Kernel.ts
import { SendEmailsCommand } from "./Commands/SendEmailsCommand";

export class Kernel {
  protected commands = [
    SendEmailsCommand,
  ];
}`}
          </CodeHighLight>

          <p>Then you can run your custom command:</p>

          <CodeHighLight>ts-node artisanNode emails:send</CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Command Arguments and Options
          </h2>

          <p>
            Custom commands can accept arguments and options. Arguments are
            required inputs, while options are optional flags.
          </p>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Arguments
          </h3>

          <div>
            Arguments are defined in the command signature using curly braces{" "}
            <CodeHighLight>{"{argument}"}</CodeHighLight>. Optional arguments
            are indicated with a question mark{" "}
            <CodeHighLight>{"{argument?}"}</CodeHighLight>.
          </div>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Options
          </h3>

          <div>
            Options are defined in the command signature using curly braces with
            double dashes <CodeHighLight>{"{--option}"}</CodeHighLight>. Options
            that accept values are indicated with an equals sign{" "}
            <CodeHighLight>{"{--option=}"}</CodeHighLight>.
          </div>

          <p>Example of running a command with arguments and options:</p>

          <CodeHighLight>
            ts-node artisanNode emails:send john --queue
          </CodeHighLight>
        </div>
      </div>
    </DocLayout>
  );
}
