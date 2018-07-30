# davos-admin

This is the application that donors will use to manage their relationships with all charities on our platform, as well as their person info and payment info.

As an Ember application, this App is structured in a format common for MVC frameworks. We highly suggest reading through the guides for the [framework](https://emberjs.com/guides) before you start, as they'll give you a good understanding of how the application deals with models, components, and routing.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running / Development](#running--development)
- [Libraries](#libraries)
  - [Tailwind](#tailwind)
  - [Mirage](#mirage)
  - [Emberfire](#emberfire)
- [Running Tests](#running-tests)
- [Deploying](#deploying)
- [Further Reading / Useful Links](#Further-Reading--Useful-Links)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd davos-admin`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

## Libraries

### Tailwind

For this, and all other applications within Davos we've been using the functional CSS framework called [Tailwind](https://tailwindcss.com/). Working this way reduces the need to write CSS code as often, although it does add to the length of class declarations on components. The documentation for this project is thorough and a good resource to have open while working.

The example below gives us: Uppercase text that is 0.75rem and dark grey, and a padding of 4rem on the left side.

```html
  <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="province">Province</label>

```

### Mirage

For building/testing this project we are using Mirage, which allows us to work with an API without having to have a built out backend server to run against. All files related to mirage live in the `mirage` folder.

### Emberfire

For the purposes of our demos, we're connecting to the same firebase database that the other applications interact with using a library called [emberfire](https://github.com/firebase/emberfire). This library takes care of connecting Ember Data to the database using Websockets.

### Running Tests

* `ember test`
* `ember test --server`

### Deploying

This application automatically updates on the hosting (currently Netlify) whenever a new change is made to the master branch.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
