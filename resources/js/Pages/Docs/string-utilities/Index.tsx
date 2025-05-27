import CodeHighLight from "@/Components/CodeHighlight";
import DocLayout from "@/Components/doc-layout";

export default function StringUtilitiesPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          String Utilities
        </h1>

        <div className="space-y-4">
          <p>
            jcc-express-starter provides a comprehensive set of string
            manipulation utilities inspired by Laravel's Str class. These
            utilities make it easy to perform common string operations like
            transformation, manipulation, and comparison.
          </p>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Basic Usage
          </h2>

          <p>
            The string utilities are available through the <code>Str</code>{" "}
            class, which can be imported from the framework:
          </p>

          <CodeHighLight>
            {`import { Str } from "jcc-express-mvc/Core/Str";

// Use the Str class methods
const slug = Str.slug("Hello World");  // "hello-world"`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Available Methods
          </h2>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Case Conversion
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Str.camel(string)</h4>
              <p>Converts a string to camelCase.</p>
              <CodeHighLight>
                {`const camelCase = Str.camel('hello-world');
// Returns: 'helloWorld'

const camelCase2 = Str.camel('Hello World');
// Returns: 'helloWorld'`}
              </CodeHighLight>
            </div>

            <div>
              <h4 className="font-medium">Str.pascal(string)</h4>
              <p>Converts a string to PascalCase (also known as StudlyCase).</p>
              <CodeHighLight>
                {`const pascalCase = Str.pascal('hello-world');
// Returns: 'HelloWorld'

const pascalCase2 = Str.pascal('hello_world');
// Returns: 'HelloWorld'`}
              </CodeHighLight>
            </div>

            <div>
              <h4 className="font-medium">
                Str.snake(string, delimiter = '_')
              </h4>
              <p>Converts a string to snake_case.</p>
              <CodeHighLight>
                {`const snakeCase = Str.snake('helloWorld');
// Returns: 'hello_world'

const snakeCase2 = Str.snake('HelloWorld');
// Returns: 'hello_world'

// With custom delimiter
const snakeCase3 = Str.snake('helloWorld', '-');
// Returns: 'hello-world'`}
              </CodeHighLight>
            </div>

            <div>
              <h4 className="font-medium">Str.kebab(string)</h4>
              <p>Converts a string to kebab-case.</p>
              <CodeHighLight>
                {`const kebabCase = Str.kebab('helloWorld');
// Returns: 'hello-world'

const kebabCase2 = Str.kebab('Hello World');
// Returns: 'hello-world'`}
              </CodeHighLight>
            </div>
          </div>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            String Manipulation
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Str.slug(string, separator = '-')</h4>
              <p>Converts a string to a URL-friendly slug.</p>
              <CodeHighLight>
                {`const slug = Str.slug('Hello World');
// Returns: 'hello-world'

const slug2 = Str.slug('Hello World!');
// Returns: 'hello-world'

// With custom separator
const slug3 = Str.slug('Hello World', '_');
// Returns: 'hello_world'`}
              </CodeHighLight>
            </div>

            <div>
              <h4 className="font-medium">
                Str.limit(string, length, end = '...')
              </h4>
              <p>Limits the number of characters in a string.</p>
              <CodeHighLight>
                {`const limited = Str.limit('This is a long text that will be truncated', 20);
// Returns: 'This is a long text...'

// With custom end string
const limited2 = Str.limit('This is a long text that will be truncated', 20, ' (read more)');
// Returns: 'This is a long text (read more)'`}
              </CodeHighLight>
            </div>

            <div>
              <h4 className="font-medium">Str.random(length = 16)</h4>
              <p>Generates a random string of the specified length.</p>
              <CodeHighLight>
                {`const random = Str.random();
// Returns a random 16-character string

const random2 = Str.random(8);
// Returns a random 8-character string`}
              </CodeHighLight>
            </div>

            <div>
              <h4 className="font-medium">Str.uuid()</h4>
              <p>Generates a UUID (version 4).</p>
              <CodeHighLight>
                {`const uuid = Str.uuid();
// Returns something like: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'`}
              </CodeHighLight>
            </div>
          </div>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            String Inspection
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Str.contains(haystack, needles)</h4>
              <p>Determines if a given string contains a given substring.</p>
              <CodeHighLight>
                {`const contains = Str.contains('Hello World', 'World');
// Returns: true

// Check for multiple needles
const contains2 = Str.contains('Hello World', ['Foo', 'World']);
// Returns: true

const contains3 = Str.contains('Hello World', ['Foo', 'Bar']);
// Returns: false`}
              </CodeHighLight>
            </div>

            <div>
              <h4 className="font-medium">Str.startsWith(haystack, needles)</h4>
              <p>Determines if a given string starts with a given substring.</p>
              <CodeHighLight>
                {`const startsWith = Str.startsWith('Hello World', 'Hello');
// Returns: true

// Check for multiple needles
const startsWith2 = Str.startsWith('Hello World', ['Foo', 'Hello']);
// Returns: true

const startsWith3 = Str.startsWith('Hello World', ['Foo', 'Bar']);
// Returns: false`}
              </CodeHighLight>
            </div>

            <div>
              <h4 className="font-medium">Str.endsWith(haystack, needles)</h4>
              <p>Determines if a given string ends with a given substring.</p>
              <CodeHighLight>
                {`const endsWith = Str.endsWith('Hello World', 'World');
// Returns: true

// Check for multiple needles
const endsWith2 = Str.endsWith('Hello World', ['Foo', 'World']);
// Returns: true

const endsWith3 = Str.endsWith('Hello World', ['Foo', 'Bar']);
// Returns: false`}
              </CodeHighLight>
            </div>

            <div>
              <h4 className="font-medium">Str.length(string)</h4>
              <p>Returns the length of the given string.</p>
              <CodeHighLight>
                {`const length = Str.length('Hello World');
// Returns: 11`}
              </CodeHighLight>
            </div>
          </div>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            String Transformation
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Str.lower(string)</h4>
              <p>Converts a string to lowercase.</p>
              <CodeHighLight>
                {`const lower = Str.lower('HELLO WORLD');
// Returns: 'hello world'`}
              </CodeHighLight>
            </div>

            <div>
              <h4 className="font-medium">Str.upper(string)</h4>
              <p>Converts a string to uppercase.</p>
              <CodeHighLight>
                {`const upper = Str.upper('hello world');
// Returns: 'HELLO WORLD'`}
              </CodeHighLight>
            </div>

            <div>
              <h4 className="font-medium">Str.title(string)</h4>
              <p>Converts a string to title case.</p>
              <CodeHighLight>
                {`const title = Str.title('hello world');
// Returns: 'Hello World'`}
              </CodeHighLight>
            </div>

            <div>
              <h4 className="font-medium">Str.capitalize(string)</h4>
              <p>Converts the first character of a string to uppercase.</p>
              <CodeHighLight>
                {`const capitalized = Str.capitalize('hello world');
// Returns: 'Hello world'`}
              </CodeHighLight>
            </div>
          </div>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            String Replacement
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium">
                Str.replace(search, replace, subject)
              </h4>
              <p>
                Replaces all occurrences of a search string with a replacement
                string.
              </p>
              <CodeHighLight>
                {`const replaced = Str.replace('world', 'universe', 'Hello world!');
// Returns: 'Hello universe!'`}
              </CodeHighLight>
            </div>

            <div>
              <h4 className="font-medium">
                Str.replaceFirst(search, replace, subject)
              </h4>
              <p>
                Replaces the first occurrence of a search string with a
                replacement string.
              </p>
              <CodeHighLight>
                {`const replacedFirst = Str.replaceFirst('world', 'universe', 'Hello world, world!');
// Returns: 'Hello universe, world!'`}
              </CodeHighLight>
            </div>

            <div>
              <h4 className="font-medium">
                Str.replaceLast(search, replace, subject)
              </h4>
              <p>
                Replaces the last occurrence of a search string with a
                replacement string.
              </p>
              <CodeHighLight>
                {`const replacedLast = Str.replaceLast('world', 'universe', 'Hello world, world!');
// Returns: 'Hello world, universe!'`}
              </CodeHighLight>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}
