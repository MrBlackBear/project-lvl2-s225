install:
	npm install

start:
	npm run babel-node -- src/bin/gendiff.js -h

publish:
	npm publish

lint:
	npm run eslint .

test:
	npm test