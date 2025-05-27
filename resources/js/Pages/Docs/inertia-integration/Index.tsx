import CodeHighLight from "@/Components/CodeHighlight";
import DocLayout from "@/Components/doc-layout";

export default function InertiaIntegrationPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Inertia.js Integration
        </h1>

        <div className="space-y-4">
          <p>
            jcc-express-mvc supports Inertia.js, enabling you to build
            single-page applications without the complexity of a full SPA
            framework. Inertia.js allows you to create modern, client-side
            rendered applications while still using server-side routing and
            controllers.
          </p>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Setting Up Inertia.js
          </h2>

          <p>
            To set up Inertia.js in your jcc-express-mvc application, follow
            these steps:
          </p>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            1. Install Required Packages
          </h3>

          <p>For Vue.js:</p>

          <CodeHighLight>
            npm install @inertiajs/inertia @inertiajs/inertia-vue3 vue@next
          </CodeHighLight>

          <p>For React:</p>

          <CodeHighLight>npm install @inertiajs/react</CodeHighLight>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            2. Add Inertia Middleware
          </h3>

          <div>
            Add the Inertia middleware to your{" "}
            <CodeHighLight>app/Http/kernel.ts</CodeHighLight> file:
          </div>

          <CodeHighLight>
            {`import { inertia } from "jcc-express-mvc/Core/Inertia";

export class Kernel {
  // app/Http/kernel.ts
  public middlewares = [
    // Other middleware...
    inertia({ rootView: \`welcome\` }),
  ];
}`}
          </CodeHighLight>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            3. Add Plugin to Vite
          </h3>

          <div>
            Update your <CodeHighLight>vite.config.js</CodeHighLight> file to
            include the appropriate plugin:
          </div>

          <CodeHighLight>
            {`import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    laravel({
      input: ["resources/css/text.css", "resources/js/app.js"],
      refresh: true,
    }),
    // Use react() for React or vue() for Vue
    react(),
  ],
});`}
          </CodeHighLight>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            4. Initialize the Inertia App
          </h3>

          <p>For React:</p>

          <CodeHighLight>
            {`// resources/js/app.js

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
    return pages[\`./Pages/\${name}.jsx\`];
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});`}
          </CodeHighLight>

          <p>For Vue.js:</p>

          <CodeHighLight>
            {`// resources/js/app.js

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
    return pages[\`./Pages/\${name}.vue\`];
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
});`}
          </CodeHighLight>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            5. Create a Base Template for Inertia
          </h3>

          <CodeHighLight>
            {`<!-- resources/views/welcome.blade.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- For react only -->
    @viteReactRefresh
    <!--  -->
    @vite(["/resources/css/text.css", "/resources/js/app.js"])
  </head>
  <body>
    @inertia
  </body>
</html>`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Using Inertia in Controllers
          </h2>

          <p>
            Once Inertia.js is set up, you can use it in your controllers to
            render pages:
          </p>

          <CodeHighLight>
            {`import { Request, Response, Next } from "jcc-express-mvc";
import { User } from "@/Models/User";

export class UserController {
  async index(req: Request, res: Response, next: Next) {
    const users = await User.all();

    return res.inertia("Users/Index", {
      users,
    });
  }

  async show(req: Request, res: Response, next: Next) {
    const user = await User.find(req.params.id);

    return res.inertia("Users/Show", {
      user,
    });
  }
}`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Creating Inertia Pages
          </h2>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            React Example
          </h3>

          <CodeHighLight>
            {`// resources/js/Pages/Users/Index.jsx
import React from "react";
import { Link } from "@inertiajs/react";
import Layout from "../../Layouts/MainLayout";

export default function Index({ users }) {
  return (
    <Layout title="Users">
      <h1>Users</h1>
      
      <div className="mt-4">
        <Link href="/users/create" className="btn btn-primary">
          Create User
        </Link>
      </div>
      
      <div className="mt-6">
        {users.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link href={\`/users/\${user.id}\`} className="btn btn-sm btn-info">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </Layout>
  );
}`}
          </CodeHighLight>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Vue Example
          </h3>

          <CodeHighLight>
            {`<!-- resources/js/Pages/Users/Index.vue -->
<template>
  <Layout title="Users">
    <h1>Users</h1>
    
    <div class="mt-4">
      <Link href="/users/create" class="btn btn-primary">
        Create User
      </Link>
    </div>
    
    <div class="mt-6">
      <table v-if="users.length > 0" class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <Link :href="\`/users/\${user.id}\`" class="btn btn-sm btn-info">
                View
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else>No users found.</p>
    </div>
  </Layout>
</template>

<script>
import { Link } from '@inertiajs/vue3';
import Layout from '../../Layouts/MainLayout.vue';

export default {
  components: {
    Link,
    Layout,
  },
  props: {
    users: Array,
  },
};
</script>`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Creating Layouts
          </h2>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            React Layout Example
          </h3>

          <CodeHighLight>
            {`// resources/js/Layouts/MainLayout.jsx
import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function MainLayout({ children, title }) {
  const { auth } = usePage().props;

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between">
          <div className="flex">
            <Link href="/" className="font-bold text-xl">
              My App
            </Link>
            <div className="ml-10 flex space-x-4">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
              <Link href="/users" className="text-gray-600 hover:text-gray-900">
                Users
              </Link>
            </div>
          </div>
          <div>
            {auth?.user ? (
              <div className="flex items-center space-x-4">
                <span>{auth.user.name}</span>
                <Link
                  href="/logout"
                  method="post"
                  as="button"
                  className="text-red-600 hover:text-red-900"
                >
                  Logout
                </Link>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link href="/login" className="text-gray-600 hover:text-gray-900">
                  Login
                </Link>
                <Link href="/register" className="text-gray-600 hover:text-gray-900">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {title && <h1 className="text-3xl font-bold mb-6">{title}</h1>}
        {children}
      </main>

      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; {new Date().getFullYear()} My App. All rights reserved.
        </div>
      </footer>
    </div>
  );
}`}
          </CodeHighLight>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Vue Layout Example
          </h3>

          <CodeHighLight>
            {`<!-- resources/js/Layouts/MainLayout.vue -->
<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white border-b border-gray-200">
      <div class="container mx-auto px-4 py-4 flex justify-between">
        <div class="flex">
          <Link href="/" class="font-bold text-xl">
            My App
          </Link>
          <div class="ml-10 flex space-x-4">
            <Link href="/dashboard" class="text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
            <Link href="/users" class="text-gray-600 hover:text-gray-900">
              Users
            </Link>
          </div>
        </div>
        <div>
          <div v-if="$page.props.auth?.user" class="flex items-center space-x-4">
            <span>{{ $page.props.auth.user.name }}</span>
            <Link
              href="/logout"
              method="post"
              as="button"
              class="text-red-600 hover:text-red-900"
            >
              Logout
            </Link>
          </div>
          <div v-else class="flex space-x-4">
            <Link href="/login" class="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Link href="/register" class="text-gray-600 hover:text-gray-900">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>

    <main class="container mx-auto px-4 py-8">
      <h1 v-if="title" class="text-3xl font-bold mb-6">{{ title }}</h1>
      <slot />
    </main>

    <footer class="bg-white border-t border-gray-200 py-4">
      <div class="container mx-auto px-4 text-center text-gray-600">
        &copy; {{ new Date().getFullYear() }} My App. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script>
import { Link } from '@inertiajs/vue3';

export default {
  components: {
    Link,
  },
  props: {
    title: String,
  },
};
</script>`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Form Handling with Inertia
          </h2>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            React Form Example
          </h3>

          <CodeHighLight>
            {`// resources/js/Pages/Users/Create.jsx
import React from "react";
import { useForm } from "@inertiajs/react";
import Layout from "../../Layouts/MainLayout";

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/users");
  };

  return (
    <Layout title="Create User">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={data.password}
            onChange={(e) => setData("password", e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
        </div>

        <div className="mb-4">
          <label htmlFor="password_confirmation" className="block mb-1">
            Confirm Password
          </label>
          <input
            id="password_confirmation"
            type="password"
            value={data.password_confirmation}
            onChange={(e) => setData("password_confirmation", e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={processing}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {processing ? "Creating..." : "Create User"}
          </button>
        </div>
      </form>
    </Layout>
  );
}`}
          </CodeHighLight>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Vue Form Example
          </h3>

          <CodeHighLight>
            {`<!-- resources/js/Pages/Users/Create.vue -->
<template>
  <Layout title="Create User">
    <form @submit.prevent="submit" class="max-w-md mx-auto">
      <div class="mb-4">
        <label for="name" class="block mb-1">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          class="w-full px-3 py-2 border rounded"
        />
        <div v-if="form.errors.name" class="text-red-500 text-sm mt-1">
          {{ form.errors.name }}
        </div>
      </div>

      <div class="mb-4">
        <label for="email" class="block mb-1">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="w-full px-3 py-2 border rounded"
        />
        <div v-if="form.errors.email" class="text-red-500 text-sm mt-1">
          {{ form.errors.email }}
        </div>
      </div>

      <div class="mb-4">
        <label for="password" class="block mb-1">Password</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          class="w-full px-3 py-2 border rounded"
        />
        <div v-if="form.errors.password" class="text-red-500 text-sm mt-1">
          {{ form.errors.password }}
        </div>
      </div>

      <div class="mb-4">
        <label for="password_confirmation" class="block mb-1">Confirm Password</label>
        <input
          id="password_confirmation"
          v-model="form.password_confirmation"
          type="password"
          class="w-full px-3 py-2 border rounded"
        />
      </div>

      <div class="mt-6">
        <button
          type="submit"
          :disabled="form.processing"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {{ form.processing ? 'Creating...' : 'Create User' }}
        </button>
      </div>
    </form>
  </Layout>
</template>

<script>
import { useForm } from '@inertiajs/vue3';
import Layout from '../../Layouts/MainLayout.vue';

export default {
  components: {
    Layout,
  },
  setup() {
    const form = useForm({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    });

    function submit() {
      form.post('/users');
    }

    return {
      form,
      submit,
    };
  },
};
</script>`}
          </CodeHighLight>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Benefits of Using Inertia.js
          </h2>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <strong>Server-side routing</strong>: Use your existing
              server-side routes and controllers
            </li>
            <li>
              <strong>Client-side rendering</strong>: Get the benefits of a
              single-page application
            </li>
            <li>
              <strong>No API required</strong>: No need to build a separate API
            </li>
            <li>
              <strong>Progressive enhancement</strong>: Works with or without
              JavaScript
            </li>
            <li>
              <strong>Framework agnostic</strong>: Works with Vue, React, or
              Svelte
            </li>
          </ul>
        </div>
      </div>
    </DocLayout>
  );
}
