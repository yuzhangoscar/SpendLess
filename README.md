# Spend Less

Cross-platform mobile app for iOS and Android, built with [Expo](https://expo.dev) and React Native.

## Prerequisites

- Node.js 22.13+ (recommended for React Native 0.85)
- [Expo Go](https://expo.dev/go) on a physical device, or Xcode / Android Studio for simulators

## Getting started

```bash
cd spend-less
npm install
npm start
```

Then press `i` for iOS simulator, `a` for Android emulator, or scan the QR code with Expo Go.

## Authentication (Clerk)

This app uses [Clerk](https://clerk.com) for sign-in and sign-up. Linked application: `app_3FIJMsNsc0VafppFP1YTznfVEpB`.

1. Install the Clerk CLI: `brew install clerk/stable/clerk` or `npm install -g clerk`
2. Sign in: `clerk auth login`
3. Link this project: `clerk init --app app_3FIJMsNsc0VafppFP1YTznfVEpB`
4. Pull env vars: `clerk env pull` (or copy `.env.example` to `.env` and add your Publishable Key)
5. Start the app: `npm start`

See the [Expo quickstart](https://clerk.com/docs/expo/getting-started/quickstart) for more details.

## Scripts

| Command                | Description                        |
| ---------------------- | ---------------------------------- |
| `npm start`            | Start Expo dev server              |
| `npm run ios`          | Run on iOS                         |
| `npm run android`      | Run on Android                     |
| `npm run web`          | Run web build (used by Playwright) |
| `npm run lint`         | ESLint check                       |
| `npm run lint:fix`     | ESLint auto-fix                    |
| `npm run format`       | Prettier write                     |
| `npm run format:check` | Prettier check                     |
| `npm test`             | Unit & component tests (watch)     |
| `npm run test:ci`      | Unit & component tests (CI)        |
| `npm run test:e2e`     | Playwright e2e tests               |
| `npm run test:e2e:ui`  | Playwright UI mode                 |

## Project structure

```
spend-less/
├── App.tsx              # App entry
├── src/
│   ├── components/      # UI components (+ component tests)
│   └── utils/           # Pure logic (+ unit tests)
├── e2e/                 # Playwright end-to-end tests
└── .github/workflows/   # CI pipeline
```

## Git conventions

### Branch names

- `main`, `develop`
- `feature/my-feature`
- `fix/bug-description`
- `chore/task-name`
- `release/1.0.0`

Enforced locally via Husky `pre-push` and in CI.

### Commit messages

[Conventional Commits](https://www.conventionalcommits.org/) format, e.g.:

```
feat: add expense tracking screen
fix: correct currency formatting
chore: update dependencies
```

Enforced via Husky `commit-msg` hook and CI commitlint on pull requests.

## Testing

- **Unit tests** — pure functions in `src/utils/`
- **Component tests** — React Native Testing Library + Jest
- **E2E tests** — Playwright against the Expo web build, with mobile viewport projects for iOS/Android-style testing

```bash
# Unit & component
npm test

# E2E (starts web server automatically)
npm run test:e2e
```

## GitHub setup

1. Create a repo on GitHub (e.g. `spend-less`)
2. From the `spend-less` directory:

```bash
git remote add origin git@github.com:<your-username>/spend-less.git
git push -u origin main
```

CI runs lint, tests, Playwright e2e, and commit message checks on pull requests.
