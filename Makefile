install:
	npm install

brain-games:
	node src/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

.PHONY: install lint