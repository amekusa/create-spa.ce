# SPA Development Environment
Scaffolds a SPA (Single Page Application) project with a sophisticated build system.


## How to use
```sh
npm init spade my_project
```

This command creates `my_project` directory, which includes:

- `package.json` with necessary `devDependencies`
- `gulpfile.js` with necessary build tasks
- `src` directory with basic HTML, CSS, JS, and Vue components


## Why Gulp?
Because unlike the other popular build systems, you have 100% control over the build pipeline of your project with Gulp, since its API is just a few functions for basic file stream manipulation.
You don't need to learn some magical configuration DSLs.


## Why Vue.js?
"Reactive" HTML templates are nice things to have without a doubt.
And Vue.js works pretty well for that single purpose. Nothing more, nothing less. Just keep it simple.


## Why Browser-sync?
- It can act as an HTTP server
- Supports live-reloading
- Can sync scroll-positions between multiple clients 


## Why Less CSS?
Less's syntax is designed to be compatible with the vanilla CSS syntax, which is cleaner and more robust than the other CSS pre-processors.
Also, since the compiler is written in JS, it doesn't spawn an extra process when it's used via Gulp.


## License
MIT © 2025 [Satoshi Soma](https://github.com/amekusa)

