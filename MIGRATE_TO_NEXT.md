Conversion to Next.js - Migration POC

Overview

This repository contains the current React app. You created the branch Convert-To-Next-JS to contain migration work. This document provides a safe, repeatable set of steps to scaffold a Next.js + Tailwind POC in a sibling folder called `next/` without modifying the existing React app.

High level flow (run locally)

1. Ensure you're on the Convert-To-Next-JS branch locally:

   git fetch origin
   git checkout Convert-To-Next-JS

2. Run the included helper script to scaffold a Next app and copy a small POC (buy-credits page) and shared components into `next/`:

   bash scripts/prepare_next_poc.sh

3. Install and run the Next app:

   cd next
   npm install
   npm run dev

What the script does

- Runs create-next-app@latest to make a new Next + TypeScript + Tailwind project in `next/`.
- Copies Tailwind and PostCSS config files from this repo into `next/`.
- Copies `public/` assets into `next/public/`.
- Copies `client/components/` and `client/lib/` into `next/components/` and `next/lib/`.
- Copies the `client/pages/buy-credits.tsx` page into `next/pages/buy-credits.tsx` as a starting POC.
- Makes simple text replacements in the copied buy-credits page to help it run in Next (basic Link import replacement). Manual adjustments will still be required for router and API changes.

Manual follow-ups (after script runs)

- Inspect `next/pages/buy-credits.tsx` and adapt any imports that reference `react-router` to use `next/link` and `next/router` (the script attempts a basic replacement but verify).
- Adjust any absolute or relative CSS imports to match Next's structure.
- Move any server/API code into `next/pages/api/` and update fetch URLs accordingly.
- Migrate auth & environment variables: copy .env.example content into `next/.env.local` and update keys.
- Test `npm run dev` and iterate on issues.

Notes and cautions

- This script will not overwrite the existing React app. It scaffolds a new folder `next/` and copies files there.
- The script performs simple text replacements and cannot fully convert React Router usages or complex server logic. Use this as a POC to test layout and styling in Next.
- Follow the README here for precise manual edits to make the POC functional.

If you want, I can prepare the exact edits to `buy-credits.tsx` to fully convert it to Next usage (replace Link, adjust DashboardLayout import, and fix any TypeScript issues). Reply "convert buy-credits POC" and I'll prepare that commit.
