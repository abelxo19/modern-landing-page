# MAKEIT

**A little structure. More making.**

MAKEIT is a project-planning product concept for turning an idea into a clear brief, a manageable set of tasks, and a visible next step. This repository is a **software engineering portfolio demonstration**: a responsive product landing page with a small, working project-board demo.

It is not a launched service. There is no authentication, checkout, backend, shared workspace, or saved account data. Demo changes live in React state and reset when the page is refreshed.

## Run locally

Use Node.js 20 or later and npm.

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). No environment variables or external service credentials are required.

For a production build:

```bash
npm run build
npm start
```

## Features

- A cohesive product story, from project brief to completed work.
- An interactive sample project with Board and Brief views, six task checkboxes, progress updates, and a reset action.
- Responsive navigation and layouts for mobile, tablet, and desktop.
- Working section links, a repository link, and an email contact link that opens the visitor's mail app.
- Semantic page landmarks, a skip link, visible keyboard focus, accessible controls, and reduced-motion support.
- A navy, white, and pale lavender visual identity, with system fonts and lightweight CSS/SVG product visuals. No remote font or image downloads are needed to render the page.
- Product metadata and a custom SVG favicon.

There are no paid tiers. The demo access section explains what visitors can try in the free browser preview and links directly to the sample project. The demo illustrates the interaction design; it does not implement a full project-management application.

## Stack and structure

The redesign keeps the existing Next.js App Router, React, TypeScript, and Tailwind CSS stack. Components are organized by page section; shared product contact details live in one configuration file.

```text
app/
  components/       Page sections and interactive product demo
  globals.css       Design tokens, layout, responsive styles, and motion preferences
  icon.svg          MAKEIT favicon
  layout.tsx        Metadata and shared page landmarks
  page.tsx          Landing-page composition
components/ui/      Shared UI primitives
lib/
  site.ts           Product name, contact email, and repository URL
  utils.ts          Shared class-name helper
```

## Checks

The Next.js, React, and React DOM versions are pinned and reproduced by `package-lock.json`. A targeted npm override makes Next.js use the patched PostCSS version declared in this project; recheck that override when upgrading Next.js. Run `npm audit` when updating dependencies as well as the checks below.

```bash
npm run lint
npm run typecheck
npm run build
```

For a manual browser review:

1. Check desktop, tablet, and narrow mobile layouts, including 320px width. Confirm that text, cards, demo access, and the demo fit without page-level horizontal scrolling.
2. Follow every navigation and call-to-action link. Section headings should remain visible below the header.
3. Use the keyboard to reveal the skip link, open and close the mobile menu, follow links, switch demo views, toggle tasks, and reset the demo. Focus should always be visible; Escape should close the mobile menu.
4. Complete and uncheck tasks to verify the progress display, then reset the demo. Refresh the page to confirm that sample data returns to its initial state.
5. Enable the operating system's reduced-motion preference and verify that motion is reduced without hiding content or disabling controls.

## Scope

This project demonstrates frontend implementation, responsive product design, and accessible interactions. It does not send form submissions, process payments, collect account data, or persist project changes. The email contact action depends on the visitor having a configured email application.
