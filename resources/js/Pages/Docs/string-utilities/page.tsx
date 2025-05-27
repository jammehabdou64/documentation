export default function StringUtilitiesPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">String Utilities</h1>

      <div className="space-y-4">
        <p>
          jcc-express-starter provides a comprehensive set of string manipulation utilities inspired by Laravel's Str
          class. These utilities make it easy to perform common string operations like transformation, manipulation, and
          comparison.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Basic Usage</h2>

        <p>
          The string utilities are available through the <code>Str</code> class, which can be imported from the
          framework:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`import { Str } from "jcc-express-mvc/utils/Str";

// Use the Str class methods
const slug = Str.slug("Hello World");  // "hello-world"`}
            </code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Available Methods</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Case Conversion</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Str.camel(string)</h4>
            <p>Converts a string to camelCase.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const camelCase = Str.camel('hello-world');
// Returns: 'helloWorld'

const camelCase2 = Str.camel('Hello World');
// Returns: 'helloWorld'`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">Str.pascal(string)</h4>
            <p>Converts a string to PascalCase (also known as StudlyCase).</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const pascalCase = Str.pascal('hello-world');
// Returns: 'HelloWorld'

const pascalCase2 = Str.pascal('hello_world');
// Returns: 'HelloWorld'`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">Str.snake(string, delimiter = '_')</h4>
            <p>Converts a string to snake_case.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const snakeCase = Str.snake('helloWorld');
// Returns: 'hello_world'

const snakeCase2 = Str.snake('HelloWorld');
// Returns: 'hello_world'

// With custom delimiter
const snakeCase3 = Str.snake('helloWorld', '-');
// Returns: 'hello-world'`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">Str.kebab(string)</h4>
            <p>Converts a string to kebab-case.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const kebabCase = Str.kebab('helloWorld');
// Returns: 'hello-world'

const kebabCase2 = Str.kebab('Hello World');
// Returns: 'hello-world'`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">String Manipulation</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Str.slug(string, separator = '-')</h4>
            <p>Converts a string to a URL-friendly slug.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const slug = Str.slug('Hello World');
// Returns: 'hello-world'

const slug2 = Str.slug('Hello World!');
// Returns: 'hello-world'

// With custom separator
const slug3 = Str.slug('Hello World', '_');
// Returns: 'hello_world'`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">Str.limit(string, length, end = '...')</h4>
            <p>Limits the number of characters in a string.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const limited = Str.limit('This is a long text that will be truncated', 20);
// Returns: 'This is a long text...'

// With custom end string
const limited2 = Str.limit('This is a long text that will be truncated', 20, ' (read more)');
// Returns: 'This is a long text (read more)'`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">Str.random(length = 16)</h4>
            <p>Generates a random string of the specified length.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const random = Str.random();
// Returns a random 16-character string

const random2 = Str.random(8);
// Returns a random 8-character string`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">Str.uuid()</h4>
            <p>Generates a UUID (version 4).</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const uuid = Str.uuid();
// Returns something like: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">String Inspection</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Str.contains(haystack, needles)</h4>
            <p>Determines if a given string contains a given substring.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const contains = Str.contains('Hello World', 'World');
// Returns: true

// Check for multiple needles
const contains2 = Str.contains('Hello World', ['Foo', 'World']);
// Returns: true

const contains3 = Str.contains('Hello World', ['Foo', 'Bar']);
// Returns: false`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">Str.startsWith(haystack, needles)</h4>
            <p>Determines if a given string starts with a given substring.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const startsWith = Str.startsWith('Hello World', 'Hello');
// Returns: true

// Check for multiple needles
const startsWith2 = Str.startsWith('Hello World', ['Foo', 'Hello']);
// Returns: true

const startsWith3 = Str.startsWith('Hello World', ['Foo', 'Bar']);
// Returns: false`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">Str.endsWith(haystack, needles)</h4>
            <p>Determines if a given string ends with a given substring.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const endsWith = Str.endsWith('Hello World', 'World');
// Returns: true

// Check for multiple needles
const endsWith2 = Str.endsWith('Hello World', ['Foo', 'World']);
// Returns: true

const endsWith3 = Str.endsWith('Hello World', ['Foo', 'Bar']);
// Returns: false`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">Str.length(string)</h4>
            <p>Returns the length of the given string.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const length = Str.length('Hello World');
// Returns: 11`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">String Transformation</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Str.lower(string)</h4>
            <p>Converts a string to lowercase.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const lower = Str.lower('HELLO WORLD');
// Returns: 'hello world'`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">Str.upper(string)</h4>
            <p>Converts a string to uppercase.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const upper = Str.upper('hello world');
// Returns: 'HELLO WORLD'`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">Str.title(string)</h4>
            <p>Converts a string to title case.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const title = Str.title('hello world');
// Returns: 'Hello World'`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">Str.capitalize(string)</h4>
            <p>Converts the first character of a string to uppercase.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const capitalized = Str.capitalize('hello world');
// Returns: 'Hello world'`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">String Replacement</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Str.replace(search, replace, subject)</h4>
            <p>Replaces all occurrences of a search string with a replacement string.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const replaced = Str.replace('world', 'universe', 'Hello world!');
// Returns: 'Hello universe!'`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">Str.replaceFirst(search, replace, subject)</h4>
            <p>Replaces the first occurrence of a search string with a replacement string.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const replacedFirst = Str.replaceFirst('world', 'universe', 'Hello world, world!');
// Returns: 'Hello universe, world!'`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium">Str.replaceLast(search, replace, subject)</h4>
            <p>Replaces the last occurrence of a search string with a replacement string.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const replacedLast = Str.replaceLast('world', 'universe', 'Hello world, world!');
// Returns: 'Hello world, universe!'`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Template Strings</h2>

        <p>
          The <code>Str</code> class also provides methods for working with template strings:
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Str.template(string, data)</h4>
            <p>Replaces placeholders in a string with values from an object.</p>
            <div className="relative rounded-md bg-muted p-4 mt-2">
              <pre className="text-sm">
                <code>
                  {`const template = Str.template('Hello, {name}!', { name: 'John' });
// Returns: 'Hello, John!'

const template2 = Str.template('Hello, {user.name}!', { user: { name: 'John' } });
// Returns: 'Hello, John!'

const template3 = Str.template('The {color} {animal} jumps over the {obstacle}.', {
  color: 'brown',
  animal: 'fox',
  obstacle: 'fence'
});
// Returns: 'The brown fox jumps over the fence.'`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Creating a Custom String Utility</h2>

        <p>
          You can extend the <code>Str</code> class with your own custom methods by adding them to a utility file in
          your application:
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// app/utils/string-extensions.ts
import { Str } from "jcc-express-mvc/utils/Str";

/**
 * Reverse a string.
 */
Str.reverse = function(string) {
  return string.split('').reverse().join('');
};

/**
 * Count the number of words in a string.
 */
Str.wordCount = function(string) {
  return string.trim().split(/\\s+/).length;
};

// Usage in your application
const reversed = Str.reverse('Hello World');
// Returns: 'dlroW olleH'

const wordCount = Str.wordCount('Hello beautiful world');
// Returns: 3`}
            </code>
          </pre>
        </div>

        <p>
          Make sure to import your <code>string-extensions.ts</code> file in your application's entry point (e.g.,{" "}
          <code>bootstrap/app.ts</code>) to make the custom methods available.
        </p>

        <div className="relative rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>
              {`// bootstrap/app.ts
import '../app/utils/string-extensions';

// Rest of your bootstrap code...`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
