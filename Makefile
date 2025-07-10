.PHONY: install publish

install:
	npm ci

brain-games: install
	node bin/brain-games.js

publish: install
	npm publish --dry-run

lint:
	npx eslint .
