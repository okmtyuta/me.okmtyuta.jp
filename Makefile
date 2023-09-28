pre-push: format lint build

lint:
	pnpm lint

format:
	pnpm format

build:
	pnpm build

auto-push:
	git add .
	git commit -m "auto-commit"
	git push origin HEAD

