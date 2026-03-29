# Project Instructions

## Environment

This project is developed exclusively inside a devcontainer (`.devcontainer/devcontainer.json`).

## Dependency Installations

Whenever you install any additional packages or tools, reflect the change in `.devcontainer/devcontainer.json`:

- **npm project packages** (`npm install <pkg>`): these are already captured in `package.json`, which `postCreateCommand` installs automatically — no devcontainer change needed.
- **Global npm tools** (`npm install -g <pkg>`): add the install command to `postCreateCommand`.
- **System packages** (apt, curl-installed tools, etc.): add the install command to `postCreateCommand` or a `postStartCommand` as appropriate.

This ensures the devcontainer stays reproducible for fresh rebuilds.
