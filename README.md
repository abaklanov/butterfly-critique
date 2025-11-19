# Disclaimer

## Node version

left as in package.json

# Changes made

## es modules

usually it's a big consideration, but this is still on the initial stage, decision might be made

## typescript

## versioning

Updated versions. esling-config-mapbox is fixed due to unavailability of one dependency

## Git

### .gitignore

Database

### DDD

domains: butterflies, users for scalability

### Framework selection

Express.js is substituted with Fastify. There were a couple of concerns that Fastify might address better than Express. Apart from Fastify being faster, the biggest one is scalability, which in this case is achieved with breaking the app down into domains. Fastify allows for plugins which helps to abstract components from each other, making them as independent as possible.

Since scalability was the main goal for this project, Fastify is considered more suitable. It's mature enough to use in a serious project, it has typescript support, reasonable sized community and amount of plugins available.

In real-life project of course we have to take the team's knowledge into consideration, i.e. how skillful team members are with aforementioned frameworks, what's the requirements for project and so on. I considered these inapplicable in this case, hence the Fastify choice over Express.

### Potential improvements further

GraphQL

# 🦋 Butterfly critique

Butterfly critique is an API designed for butterfly enthusiasts. So far, it's an [`express`](https://expressjs.com/)-based API that stores butterflies and users.

Data persistence is through a JSON-powered database called [`lowdb`](https://github.com/typicode/lowdb).

Validation is built using an assertion library called [`@mapbox/fusspot`](https://github.com/mapbox/fusspot).

## Task

Butterfly critique is already a pretty great API, but we think it would be even better if it let users critique butterflies. Your task is to create new API endpoints that:

1. Allow a user to rate butterflies on a scale of 0 through 5
1. Allow retrieval of a list of a user's rated butterflies, sorted by rating

You should also provide a **write-up** that explains and documents the decisions you made, such as the HTTP verbs for new endpoints, database design, and any trade-offs. If you add any new dependencies, spend some time discussing why you chose them.

All changes should be well-scoped within the context of the given task and explained as though you are opening a pull request against a production-ready codebase. Refactoring the code as part of the pull request is allowed but it is not required. Please include justification and reasoning for all changes in the **write-up**.

If you have any questions or concerns, please do not hesitate to contact us!

### What we're looking for

- Your code should be extensible and reusable
- Your code should be well tested
- Your code should be tidy and adhere to conventions
- Your changes should be well-scoped and explained in the write-up
- Your write-up should be thoughtful and coherent

❗️ Note: please do not write your name anywhere in your solution, since this prevents us from evaluating it anonymously. If you use git, please remember to remove the `.git` directory before submitting your solution.

### Scoring rubric

Points are awarded in the following categories:

- Communication in the write-up (2 points)
- Endpoint design (6 points)
- Database design (2 points)
- Testing (3 points)
- Tidiness and adherence to conventions (1 point)

The maximum possible score is 14.

## Developing

### Requirements

- Node v18.x
- npm v10.x

### Setup

Install dependencies with:

```sh
npm ci
```

Butterfly critique uses lowdb to manage a JSON database. You can find the [lowdb@1.0.0 docs here](https://github.com/typicode/lowdb/tree/v1.0.0#readme). If you need to recreate the butterflies database, you can run:

```sh
npm run init-db
```

### Running

To run the application locally:

```sh
npm start
```

You should see a message that the application has started:

```sh
Butterfly API started at http://localhost:8000
```

You can manually try out the application using `curl`:

```sh
# GET a butterfly
curl http://localhost:8000/butterflies/H7hhcEWLDsxyHN0cnDrBV

# POST a new butterfly
curl -X POST -d '{"commonName":"Brimstone", "species":"Gonepteryx rhamni", "article":"https://en.wikipedia.org/wiki/Gonepteryx_rhamni"}' -H 'content-type: application/json' http://localhost:8000/butterflies

# GET a user
curl http://localhost:8000/users/-9aAFuyNIkpSzRMNux2BQ
```

**For developing**, you can run the application with auto-restarts on code changes using:

```sh
npm run watch
```

### Testing

This project uses [`jest`](https://jestjs.io/) as its testing framework.
If you are unfamiliar with `jest`, check out its [documentation](https://jestjs.io/docs/en/getting-started).

This project has `eslint` and a custom config [`@mapbox/eslint-config-mapbox`](https://www.npmjs.com/package/@mapbox/eslint-config-mapbox) setup for code linting.

To run the linter and all tests:

```sh
npm test
```

**For developing**, you can run `jest` with auto-restarts using:

```sh
npm run test-watch
```
