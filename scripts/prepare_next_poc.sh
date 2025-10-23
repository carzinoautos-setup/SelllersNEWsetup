#!/usr/bin/env bash
set -e

# Safe helper script to scaffold a Next.js + TypeScript + Tailwind POC
# Usage: bash scripts/prepare_next_poc.sh

if [ -d "next" ]; then
  echo "next/ already exists. Aborting to avoid overwrite." >&2
  exit 1
fi

echo "Scaffolding Next.js app (this will call create-next-app)..."
# Create Next app with TypeScript + Tailwind
npx create-next-app@latest next --ts --tailwind --eslint --src-dir --app || true

echo "Copying config and public assets..."
cp -v tailwind.config.ts next/ || true
cp -v postcss.config.js next/ || true
cp -rv public next/ || true

echo "Copying components and lib (shallow copy)..."
mkdir -p next/components next/lib next/pages
if [ -d client/components ]; then
  rsync -a client/components/ next/components/ || true
fi
if [ -d client/lib ]; then
  rsync -a client/lib/ next/lib/ || true
fi

# Copy buy-credits page as POC
if [ -f client/pages/buy-credits.tsx ]; then
  cp -v client/pages/buy-credits.tsx next/pages/buy-credits.tsx
  echo "Attempting basic import replacements in buy-credits.tsx..."
  # Replace react-router Link import (best-effort)
  sed -i "s|import { Link } from \"react-router-dom\";|import Link from 'next/link';|g" next/pages/buy-credits.tsx || true
  # DashboardLayout import path may need manual fix; leave note
  sed -i "s|import { DashboardLayout } from \"../components/DashboardLayout\";|import DashboardLayout from '../components/DashboardLayout';|g" next/pages/buy-credits.tsx || true
fi

echo "Done. Please cd next && npm install && npm run dev to test the POC."

echo "Manual steps you still need to do:"
echo " - Verify imports in next/pages/buy-credits.tsx and adjust to Next's structure (use next/link and next/router where necessary)."
echo " - Move any server endpoints into next/pages/api/ and update fetch URLs."
echo " - Copy env variables into next/.env.local as needed."

exit 0
