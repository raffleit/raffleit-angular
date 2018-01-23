# Raffle It! Angular &middot; [![CircleCI](https://circleci.com/gh/raffleit/raffleit-angular.svg?style=shield)](https://circleci.com/gh/raffleit/raffleit-angular) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/raffleit/raffleit-angular/blob/master/LICENSE)

This is an implementation of Raffle It! in Angular (2-4, etc).

## Pros and Cons (Purely Subjective)

Pros | Cons
---- | --------
Much easier than Angular 1.x | Dependency Injection doesn't belong in the frontend
Highly opiniated makes for a fast 101 | A full framework is harder to tweak than a library 
Typescript is a good language | Typescript is not as future-proof as JavaScript 


## Known Bugs
- No validation on name and number of tickets when adding a participant

## Command Line Stuff

### Running Locally
* You might have to install [angular-cli](https://github.com/angular/angular-cli)
* Run `npm install`
* Run `ng serve`

### Creating a Production Build
* `npm install`
* `npm run build`

### Running Tests
* `npm test`

## License

Raffle It! is [MIT licensed](./LICENSE).
