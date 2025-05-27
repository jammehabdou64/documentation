import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Installation</h1>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Prerequisites</h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Node.js and npm installed</li>
          <li>ts-node globally installed</li>
        </ul>

        <p>
          Make sure you have Node.js and npm (Node Package Manager) installed and install ts-node globally on your
          machine.
        </p>

        <Tabs defaultValue="npx">
          <TabsList>
            <TabsTrigger value="npx">NPX</TabsTrigger>
            <TabsTrigger value="npm">NPM</TabsTrigger>
          </TabsList>
          <TabsContent value="npx">
            <div className="relative rounded-md bg-muted p-4">
              <pre className="text-sm">
                <code>npx jcc-express-starter my-express-app</code>
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="npm">
            <div className="relative rounded-md bg-muted p-4">
              <pre className="text-sm">
                <code>npm init jcc-express-starter my-express-app</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>

        <p>This will create a new directory named my-express-app and set up the Express.js application inside it.</p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Configure Environment</h2>
        <p>Edit the .env file to configure your database and other environment-specific settings. Example .env:</p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`APP_SESSION_SECTRET=app-session-1203-4-556-22
PORT=5500

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=my_database
DB_USERNAME=root
DB_PASSWORD=password`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Start the application</h2>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`# start vite
npm run watch
# start development server
npm run dev`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
