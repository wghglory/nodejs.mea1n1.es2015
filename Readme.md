## Nodejs backend based on es2015, no angularjs

1. decompress db.zip
1. run `npm update/install --save`
1. run `mongod --dbpath=/Users/derek/Work/Bitbucket/nodejs.mea1n1.ES2015/db --port=27020`
1. run `node server`
1. needs to register new username and password

> note: if need newest packages, replace package.json version to *, and `npm update --save`
> currently only passport-local works

### Package List

| package | version | usage |
| --- | --- | --- |
| body-parser | ^1.16.0 | request.body parser, json |
| compression | ^1.6.2 | compress in production |
| connect-flash | ^0.1.1 | error, info message pass |
| ejs | ^2.5.5 | template engine |
| express | ^4.14.1 | high level http server |
| express-session| ^1.15.0 | session management, default in memory |
| method-override| ^2.3.7 | http get post delete put |
| mongoose| ^4.8.1 | mongodb schema, connect to mongodb |
| morgan| ^1.7.0 | error info log |
| passport| ^0.3.2 | login |
| passport-facebook | ^2.1.1 | |
| passport-google-oauth | ^1.0.0 | |
| passport-local | ^1.0.0 | |
| passport-twitter | ^1.0.4 | |
