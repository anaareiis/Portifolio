#!/bin/bash
# Usa Node.js 22 e Webpack (mais estável que Turbopack neste ambiente)
export PATH="/usr/local/n/versions/node/22.16.0/bin:$PATH"
cd "$(dirname "$0")"
node /usr/local/lib/node_modules/npm/bin/npm-cli.js run dev -- --webpack
