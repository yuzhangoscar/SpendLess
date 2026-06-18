#!/usr/bin/env sh

branch="$(git rev-parse --abbrev-ref HEAD)"
pattern='^(main|develop|release\/[0-9]+\.[0-9]+\.[0-9]+|(feature|fix|chore|hotfix|docs|test|refactor)\/[a-z0-9]+(-[a-z0-9]+)*)$'

if ! printf '%s' "$branch" | grep -Eq "$pattern"; then
  echo "Invalid branch name: $branch"
  echo "Allowed: main, develop, release/x.y.z, feature/*, fix/*, chore/*, hotfix/*, docs/*, test/*, refactor/*"
  exit 1
fi
