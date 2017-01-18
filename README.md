# Body Size

## Summary
The application is about the body measurement. It collects measurement statistics, shows dynamics of changes, tries to make advises.  

## Aims
* Create a simple application FullStack NodeJS application that uses all DevOps features.

## Stack Of Technologies and Main Utils.
- Coding Language - **TypeScript**
- Language Compiler - **TypeScript**
- Executable Language - **JavaScript**
- Runtime Built - **NodeJS**
- Web Server - **ExpressJS**
- Routing - **ExpressJS**
- Testing Framework - **Mocha**

## Node packages those are installed globally.
- node-inspector
- gulp

## Packages.
- [express-decorators](https://www.npmjs.com/package/express-decorators)

## Links.
- [Module Resolutions Full Documentation](https://www.typescriptlang.org/docs/handbook/module-resolution.html)
- [Module Resolutions](https://github.com/typings/typings/blob/master/docs/faq.md#module-resolutions)
- [Hello Typescript and Mocha](http://jonnyreeves.co.uk/2015/hello-typescript-and-mocha/)
- [Angular2 TypeScript Gulp and ExpressJS](http://blog.edenmsg.com/angular2-typescript-gulp-and-expressjs/)
- [Github Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
- [gulp-express](https://www.npmjs.com/package/gulp-express)
- [node-inspector](https://github.com/node-inspector/node-inspector)

## FAQ, how to...
###  Cannot find module node's module declarations.
It requires core declarations.
```
npm-run typings install env~node --global
```

### Link typings to the project.
If you are using files in tsconfig.json, add the index file:
```
{
  "files": [
    "typings/index.d.ts"
  ]
}
```
If you are not using tsconfig.json, add as a reference to the top of TypeScript files:
```
/// <reference path="../typings/index.d.ts" />
```
### See typings resolving.
```
tsc app.ts moduleA.ts --noResolve
```
