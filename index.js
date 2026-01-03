#!/usr/bin/env node

const {exit, cwd, argv} = require('node:process');
const {join, isAbsolute} = require('node:path');
const {existsSync, cpSync} = require('node:fs');

function die(msg) {
	console.error(`[ERROR]`, msg);
	exit(1);
}

if (!argv[2]) die(`You need to specify the destination directory as an argument.`);
const dst = isAbsolute(argv[2]) ? argv[2] : join(cwd(), argv[2]);
if (existsSync(dst)) die(`The destination already exists: "${dst}"`);

console.log(`Creating "${dst}"...`);

const src = join(__dirname, 'deploy');
const ignore = [
	'.git',
	'version.sh',
].map(each => join(src, each));

cpSync(src, dst, {
	errorOnExist: true,
	force: false,
	preserveTimestamps: false,
	recursive: true,
	filter(s, d) {
		if (ignore.includes(s)) return false;
		console.log(`Created: "${d}`);
		return true;
	}
});

console.log(`Done.`);
console.log(`
  cd "${dst}";
  npm install;
`);

