# Project Instructions

## Environment

This project uses [mise](https://mise.jdx.dev/) for runtime version management. The Node.js version is pinned in `mise.toml`.

## Dependency Installations

Whenever you install any additional packages or tools, reflect the change appropriately:

- **npm project packages** (`npm install <pkg>`): captured automatically in `package.json` / `package-lock.json` — no other change needed.
- **Global npm tools** (`npm install -g <pkg>`): document in this file or in a setup script.
- **Runtime versions** (Node, etc.): update `mise.toml`.

## Git Commits

Do not include `Co-Authored-By` trailers in commit messages.

## Pull Requests

Do not include a test plan section in PR descriptions.
