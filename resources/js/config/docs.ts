import type { SidebarNavItem } from "@/types";

export interface DocsConfig {
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
        },
        {
          title: "Installation",
          href: "/docs/installation",
        },
        {
          title: "Quick Start Guide",
          href: "/docs/quick-start",
        },
        {
          title: "Project Structure",
          href: "/docs/project-structure",
        },
      ],
    },
    {
      title: "Core Concepts",
      items: [
        {
          title: "Routing",
          href: "/docs/routing",
        },
        {
          title: "Controllers",
          href: "/docs/controllers",
        },
        {
          title: "Middlewares",
          href: "/docs/middlewares",
        },
        {
          title: "ORM (jcc-eloquent)",
          href: "/docs/orm",
        },
        {
          title: "Validation",
          href: "/docs/validation",
        },
        {
          title: "Form Requests",
          href: "/docs/form-request",
        },
      ],
    },
    {
      title: "Advanced Features",
      items: [
        {
          title: "Service Container & DI",
          href: "/docs/service-container",
        },
        {
          title: "Service Providers",
          href: "/docs/service-provider",
        },
        {
          title: "ArtisanNode CLI",
          href: "/docs/artisan-node-cli",
        },
        {
          title: "TinkerNode",
          href: "/docs/tinker-node",
        },
      ],
    },
    {
      title: "Frontend",
      items: [
        {
          title: "jsBlade Templating",
          href: "/docs/jsblade-templating",
        },
        {
          title: "Inertia.js Integration",
          href: "/docs/inertia-integration",
        },
      ],
    },
    {
      title: "Utilities",
      items: [
        // {
        //   title: "Helpers",
        //   href: "/docs/helpers",
        // },
        {
          title: "String Utilities",
          href: "/docs/string-utilities",
        },
      ],
    },
  ],
};
