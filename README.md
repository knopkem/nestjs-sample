## Description

[Nest](https://github.com/nestjs/nest) sample application with orm backend support.
From: [here](https://blog.theodo.com/2019/05/an-overview-of-nestjs-typeorm-release-your-first-application-in-less-than-30-minutes/)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# (optional) change ormconfig.json to use mysql instead of postgres
# create database 'test'

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# send POST request to http://localhost:3000/dogs
{
    "name": "hektor",
    "age": 30,
    "breed": "labrador"
}

# view it
http://localhost:3000/dogs

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

Nest is [MIT licensed](LICENSE).
