export default function TinkerNodePage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">TinkerNode</h1>

      <div className="space-y-4">
        <p>
          TinkerNode provides an interactive command-line interface for executing JavaScript code and jcc-eloquent
          queries directly in the terminal, allowing for quick testing and debugging of database interactions.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Features</h2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Interactive Console</strong>: TinkerNode provides an interactive console environment, similar to the
            Laravel Tinker, where you can execute JavaScript code and jcc-eloquent queries.
          </li>
          <li>
            <strong>jcc-eloquent Integration</strong>: TinkerNode seamlessly integrates with jcc-eloquent, enabling you
            to work with MySQL databases using jcc-eloquent syntax.
          </li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Getting Started</h2>

        <p>To start TinkerNode, run the following command in your terminal:</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>ts-node artisanNode db-tinker</code>
          </pre>
        </div>

        <p>This will open an interactive console where you can execute JavaScript code and jcc-eloquent queries.</p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Basic Usage</h2>

        <p>Once you're in the TinkerNode console, you can execute various commands:</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`> User.all()
[
  {
    name: "John Doe",
    email: "john@gmail.com"
  }
]

> User.find(1)
{
  id: 1,
  name: "John Doe",
  email: "john@gmail.com",
  created_at: "2023-01-01 12:00:00",
  updated_at: "2023-01-01 12:00:00"
}

> User.where('email', 'john@gmail.com').first()
{
  id: 1,
  name: "John Doe",
  email: "john@gmail.com",
  created_at: "2023-01-01 12:00:00",
  updated_at: "2023-01-01 12:00:00"
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Working with Models</h2>

        <p>
          TinkerNode automatically loads all your models, so you can work with them directly in the console. Here are
          some examples:
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Creating Records</h3>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`> const user = new User()
> user.name = "Jane Smith"
> user.email = "jane@gmail.com"
> await user.save()
{
  id: 2,
  name: "Jane Smith",
  email: "jane@gmail.com",
  created_at: "2023-01-02 12:00:00",
  updated_at: "2023-01-02 12:00:00"
}

> await User.create({ name: "Bob Johnson", email: "bob@gmail.com" })
{
  id: 3,
  name: "Bob Johnson",
  email: "bob@gmail.com",
  created_at: "2023-01-03 12:00:00",
  updated_at: "2023-01-03 12:00:00"
}`}
            </code>
          </pre>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Updating Records</h3>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`> const user = await User.find(1)
> user.name = "John Smith"
> await user.save()
{
  id: 1,
  name: "John Smith",
  email: "john@gmail.com",
  created_at: "2023-01-01 12:00:00",
  updated_at: "2023-01-04 12:00:00"
}

> await User.where('id', 2).update({ name: "Jane Johnson" })
{
  id: 2,
  name: "Jane Johnson",
  email: "jane@gmail.com",
  created_at: "2023-01-02 12:00:00",
  updated_at: "2023-01-04 12:00:00"
}`}
            </code>
          </pre>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Deleting Records</h3>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`> const user = await User.find(3)
> await user.delete()
true

> await User.where('id', 2).delete()
true`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Working with Relationships</h2>

        <p>You can also work with model relationships in TinkerNode. Here are some examples:</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`> const user = await User.find(1)
> const posts = await user.posts().get()
[
  {
    id: 1,
    user_id: 1,
    title: "First Post",
    content: "This is my first post",
    created_at: "2023-01-01 12:30:00",
    updated_at: "2023-01-01 12:30:00"
  },
  {
    id: 2,
    user_id: 1,
    title: "Second Post",
    content: "This is my second post",
    created_at: "2023-01-02 12:30:00",
    updated_at: "2023-01-02 12:30:00"
  }
]

> const post = await Post.with('user').find(1)
{
  id: 1,
  user_id: 1,
  title: "First Post",
  content: "This is my first post",
  created_at: "2023-01-01 12:30:00",
  updated_at: "2023-01-01 12:30:00",
  user: {
    id: 1,
    name: "John Smith",
    email: "john@gmail.com",
    created_at: "2023-01-01 12:00:00",
    updated_at: "2023-01-04 12:00:00"
  }
}`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Executing Raw JavaScript</h2>

        <p>
          TinkerNode allows you to execute any valid JavaScript code, not just jcc-eloquent queries. This is useful for
          testing utility functions, manipulating data, or performing calculations.
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`> const numbers = [1, 2, 3, 4, 5]
> numbers.map(n => n * 2)
[2, 4, 6, 8, 10]

> const sum = numbers.reduce((acc, curr) => acc + curr, 0)
> sum
15

> const now = new Date()
> now.toISOString()
"2023-01-04T12:00:00.000Z"`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Exiting TinkerNode</h2>

        <p>
          To exit the TinkerNode console, you can use the <code>.exit</code> command or press Ctrl+C twice:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`> .exit
Goodbye!`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Benefits of TinkerNode</h2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Quick Testing</strong>: Test database queries and model relationships without writing a full
            application
          </li>
          <li>
            <strong>Debugging</strong>: Debug issues with your models and database interactions
          </li>
          <li>
            <strong>Learning Tool</strong>: Learn how jcc-eloquent works by experimenting with different queries
          </li>
          <li>
            <strong>Data Manipulation</strong>: Quickly create, update, or delete records for testing purposes
          </li>
        </ul>
      </div>
    </div>
  )
}
