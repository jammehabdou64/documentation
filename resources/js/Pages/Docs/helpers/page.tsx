export default function HelpersPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Helpers</h1>

      <div className="space-y-4">
        <p>
          jcc-express-starter provides a variety of helper functions to make common tasks easier. These helpers are
          globally available throughout your application and can be used without requiring any imports.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Available Helpers</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Path Helpers</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium">base_path(path)</h4>
            <p>Returns the fully qualified path to the application's base directory with the given path appended.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`// Returns something like: /var/www/html/my-app/config/app.ts
const configPath = base_path('config/app.ts');`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">app_path(path)</h4>
            <p>Returns the fully qualified path to the application's app directory with the given path appended.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`// Returns something like: /var/www/html/my-app/app/Models/User.ts
const userModelPath = app_path('Models/User.ts');`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">config_path(path)</h4>
            <p>Returns the fully qualified path to the application's config directory with the given path appended.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`// Returns something like: /var/www/html/my-app/config/database.ts
const dbConfigPath = config_path('database.ts');`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">public_path(path)</h4>
            <p>Returns the fully qualified path to the application's public directory with the given path appended.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`// Returns something like: /var/www/html/my-app/public/css/app.css
const cssPath = public_path('css/app.css');`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">storage_path(path)</h4>
            <p>Returns the fully qualified path to the application's storage directory with the given path appended.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`// Returns something like: /var/www/html/my-app/storage/logs/app.log
const logPath = storage_path('logs/app.log');`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">URL Helpers</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium">url(path)</h4>
            <p>Generates a fully qualified URL to the given path.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`// Returns something like: http://example.com/users
const usersUrl = url('users');`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">asset(path)</h4>
            <p>Generates a URL for an asset using the current scheme of the request (HTTP or HTTPS).</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`// Returns something like: http://example.com/css/app.css
const cssUrl = asset('css/app.css');`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">route(name, params)</h4>
            <p>Generates a URL for a named route.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`// Define a named route
Route.get('/users/:id', [UsersController, 'show']).name('users.show');

// Generate a URL for the named route
// Returns something like: http://example.com/users/1
const userUrl = route('users.show', { id: 1 });`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Array and Object Helpers</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium">collect(items)</h4>
            <p>Creates a collection from the given items, providing useful methods for working with arrays.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const collection = collect([1, 2, 3, 4, 5]);

// Filter the collection
const filtered = collection.filter(item => item > 3);
// Returns: [4, 5]

// Map the collection
const doubled = collection.map(item => item * 2);
// Returns: [2, 4, 6, 8, 10]

// Get the first item
const first = collection.first();
// Returns: 1

// Get the sum of all items
const sum = collection.sum();
// Returns: 15`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">data_get(object, path, defaultValue)</h4>
            <p>Gets a value from a nested object using "dot" notation.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const user = {
  name: 'John Doe',
  address: {
    city: 'New York',
    state: 'NY',
    zip: '10001'
  }
};

// Get a nested value
const city = data_get(user, 'address.city');
// Returns: 'New York'

// Get a value with a default
const country = data_get(user, 'address.country', 'USA');
// Returns: 'USA'`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">data_set(object, path, value)</h4>
            <p>Sets a value in a nested object using "dot" notation.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const user = {
  name: 'John Doe',
  address: {
    city: 'New York',
    state: 'NY',
    zip: '10001'
  }
};

// Set a nested value
data_set(user, 'address.country', 'USA');
// user.address.country is now 'USA'

// Set a deeply nested value that doesn't exist yet
data_set(user, 'contact.email', 'john@example.com');
// user.contact.email is now 'john@example.com'`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">String Helpers</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium">str_slug(string)</h4>
            <p>Converts a string to a URL-friendly slug.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const slug = str_slug('Hello World');
// Returns: 'hello-world'

const slug2 = str_slug('This is a test!');
// Returns: 'this-is-a-test'`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">str_random(length)</h4>
            <p>Generates a random string of the specified length.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const random = str_random(10);
// Returns something like: 'a1b2c3d4e5'`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">str_limit(string, limit, end)</h4>
            <p>Limits the number of characters in a string.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const limited = str_limit('This is a long text that will be truncated', 20);
// Returns: 'This is a long text...'

const limitedCustomEnd = str_limit('This is a long text that will be truncated', 20, ' (read more)');
// Returns: 'This is a long text (read more)'`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Miscellaneous Helpers</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium">config(key, defaultValue)</h4>
            <p>Gets a configuration value using "dot" notation.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`// Get the application name from config/app.ts
const appName = config('app.name');

// Get a database configuration with a default value
const dbHost = config('database.connections.mysql.host', 'localhost');`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">env(key, defaultValue)</h4>
            <p>Gets an environment variable value.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`// Get the APP_ENV environment variable
const environment = env('APP_ENV', 'production');

// Get the database host from environment variables
const dbHost = env('DB_HOST', 'localhost');`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">bcrypt(value)</h4>
            <p>Hashes a value using bcrypt.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`// Hash a password
const hashedPassword = await bcrypt('password123');

// Verify a password
const isValid = await bcrypt.compare('password123', hashedPassword);`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">dd(...args)</h4>
            <p>Dumps the given variables and ends the script.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`// Dump and die
dd('Debug message', { key: 'value' }, [1, 2, 3]);`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Creating Custom Helpers</h2>

        <p>
          You can create your own custom helpers by adding them to a <code>helpers.ts</code> file in your application.
          Here's an example of how to create and use custom helpers:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// app/helpers.ts

/**
 * Format a number as currency.
 */
global.formatCurrency = function(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

/**
 * Calculate the percentage of a value.
 */
global.calculatePercentage = function(value, total) {
  return (value / total) * 100;
};

// Usage in your application
const price = formatCurrency(19.99);
// Returns: '$19.99'

const percentage = calculatePercentage(25, 100);
// Returns: 25`}
            </code>
          </pre>
        </div>

        <p>
          Make sure to import your <code>helpers.ts</code> file in your application's entry point (e.g.,{" "}
          <code>bootstrap/app.ts</code>) to make the helpers available globally.
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// bootstrap/app.ts
import '../app/helpers';

// Rest of your bootstrap code...`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
