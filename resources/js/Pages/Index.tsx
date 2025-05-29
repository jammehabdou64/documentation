import React from "react";
import { Link, Head } from "@inertiajs/react";
import { ArrowRight, Github, Package } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";

import { Button } from "@/Components/ui/button";
import Layout from "@/Components/layout";
const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-[calc(100vh-theme(spacing.16))] container mx-auto py-12">
        <div className="flex-1 py-12 md:py-24 lg:py-32">
          <div className="space-y-8">
            <div className="space-y-6 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                JCC-EXPRESS
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                A Laravel-inspired MVC framework for Express.js
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/docs/introduction">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://github.com/yourusername/jcc-express-starter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>MVC Architecture</CardTitle>
                  <CardDescription>
                    Organized project structure inspired by Laravel
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-900 dark:text-gray-300">
                    Enjoy a clean separation of concerns with Models, Views, and
                    Controllers. Organize your code in a way that makes sense.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/docs/project-structure"
                    className="text-sm text-logo-cyan-muted hover:underline dark:text-logo-cyan"
                  >
                    Learn more
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Eloquent-like ORM</CardTitle>
                  <CardDescription>
                    Powerful database interactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-300">
                    Use jcc-eloquent for elegant model definitions,
                    relationships, and query building similar to Laravel's
                    Eloquent.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/docs/orm"
                    className="text-sm text-logo-cyan-muted hover:underline dark:text-logo-cyan"
                  >
                    Learn more
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>ArtisanNode CLI</CardTitle>
                  <CardDescription>Powerful command-line tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-300">
                    Generate controllers, models, migrations, and more with
                    simple CLI commands inspired by Laravel's Artisan.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/docs/artisannode-cli"
                    className="text-sm text-logo-cyan-muted hover:underline dark:text-logo-cyan"
                  >
                    Learn more
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="mx-auto max-w-[700px] text-center">
              <div className="inline-flex items-center justify-center rounded-lg border border-yellow-200 bg-yellow-100 px-3 py-1 text-sm text-yellow-800 dark:border-yellow-800/30 dark:bg-yellow-800/20 dark:text-yellow-500">
                <Package className="mr-1 h-3 w-3" />
                <span>Warning: Not recommended for production use</span>
              </div>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                This framework is intended for learning purposes only. Use in
                production at your own risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
