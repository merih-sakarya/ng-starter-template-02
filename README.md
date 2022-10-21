# NG Starter Template 02

[Angular](https://angular.io/), [Material Design](https://material.angular.io/),
[Flex-Layout](https://github.com/angular/flex-layout),
[Cypress](https://www.cypress.io), [Mock Server](https://www.npmjs.com/package/json-server),
[CI/CD](https://en.wikipedia.org/wiki/CI/CD), [Husky](https://github.com/typicode/husky),
[Eslint](https://eslint.org), [Prettier](https://prettier.io/),
[Jasmine](https://angular.io/guide/testing), [Karma](https://angular.io/guide/testing),
[Sass 7-1 Pattern](https://sass-lang.com/), [BEM methodology](https://en.bem.info/methodology)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

![Screenshot](https://github.com/merih-sakarya/ng-starter-template-02/blob/master/src/assets/images/screen-record.gif)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Run `npm run test:server` to run the mock server. It listens for requests at endpoint `http://localhost:3000/api/*`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

**File Structure**

The CoreModule should contain singleton services (which is usually the case), universal components and other features where there’s only once instance per application.
The core module must be imported only in the root module. Other modules must not import the core modules. To prevent re-importing the core module elsewhere, a guard added for it in the core module’ constructor.

```
src/
|
|- app/
|   |- core/
|       |- interceptors/  # HttpInterceptor interceptors (AuthInterceptor, ErrorInterceptor etc.)
|       |- security/      # AuthGuard etc.
|       |- services/      # Core services (AuthenticationService, PermisionService, LocalStorageService etc.)
|       |- setup/         # APP Initializer, PreloadingStrategy etc.
```

SharedModule is a place to store all the reusable components, directives, pipes, helpers and types. The SharedModule can be imported in any other module when those items will be re-used.

```
src/
|
|- app/
|   |- shared/
|       |- components/    # Shared Components
|       |- enums/         # Enumerations
|       |- models/        # Models
|       |- pipes/         # Pipes
|       |- services/      # Shared Services
|       |- utils/         # Utils, Helpers
```

The Layout directory is the part that determines the overall design layout of the page.
There are two different Layout types in the project, Default Layout and Passport Layout. Simply, Passport Layout represents the layout of the pages before login, such as Login/Register/ForgotPassword, and Default Layout represents the layout of the pages after login.
The layout directory contains one or more components which act as a layout or are parts of a layout such as a Header, Nav, Footer,

```
src/
|
|- app/
|   |- layout/
|       |- layout-default/      # Represents the layout of the pages after login (Home, UserProfile etc.)
|           |- header/
            |- sidebar/
|       |- layout-passport/     # Represents the layout of the pages before login (Login/Register/ForgotPassword etc.)
```

The routes (Pages) directory contains a collection of route (Page) modules which are each independent of each other. This allows Angular to load only the module it requires to display the request thereby saving bandwidth and speeding the entire application.
In order to accomplish this each module must have its own routing which is a loadChildren route resource defined in the AppRoutingModule.

```
src/
|
|- app/
|   |- routes/
|       |- home/
|           |- home          # lazyload module|html|ts|spec
|       |- notification/
|           |- notification  # lazyload module|html|ts|spec
```

## Styling

Style structure is designed using SASS 7-1 pattern and BEM methodology. For the consistency of the architecture, CSS files that are automatically generated by Angular CLI should not be used and should be deleted.

**[SASS 7-1 Pattern](https://sass-guidelin.es/#architecture)** is used as **SASS Architecture** in the project. Sass is a stylesheet language that's compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.<br/>
For more information; @See [SCSS Playbook](https://matthewelsom.com/blog/simple-scss-playbook.html)

**Example**

```
sass/
|
|- abstracts/
|   |- _variables.scss    # Sass Variables
|   |- _mixins.scss       # Sass Mixins
|
|- vendors/
|   |- _material.scss     # Material Design
|
|- base/
|   |- _reset.scss        # Reset/normalize
|   |- _typography.scss   # Typography rules
|
|- layout/
|   |- _header.scss       # Header
|   |- _footer.scss       # Footer
|   |- _sidebar.scss      # Sidebar
|
|- components/
|   |- _buttons.scss      # Buttons
|   |- _carousel.scss     # Carousel
|   |- _dropdown.scss     # Dropdown
|
|- pages/
|   |- _home.scss         # Home specific styles
|   |- _contact.scss      # Contact specific styles
|
|- themes/
|   |- _theme.scss        # Default theme
|   |- _admin.scss        # Admin theme
|
 - main.scss              # Main Sass input file
```

- **abstracts** contains no actual styles, just Sass mechanisms that help define styles in other directories (sometimes called "helpers"). This includes things like global variables, functions, and mixins. Each of these categories should be placed in their own appropriately-named partial file, as seen above.

- **vendors** contains any third-party stylesheets a project uses. For instance, if we wanted to use Bootstrap alongside our own custom Sass in a project, we'd download the Bootstrap stylesheet and place it here.

- **base** contains boilerplate used throughout an entire site. This includes project-wide typography styles, and stylesheets that universally reset or normalize default CSS.

- **layout** contains styles for different aspects of the site's structural layout (think of areas like nav bars, headers, footers, etc.)

- **components** are like "mini" layouts. Styles for small, reusable pieces of the site should reside here (think buttons, forms, profile pictures, etc.)

- **pages** is where page-specific styles reside. For instance, if a project contained several style rules that are only ever used on the "Contact Us" page, they'd live here in a \_contact.scss file, as seen above.

- **themes** is used whenever a site has multiple themes. For instance, the example project above includes both admin and default themes. We can therefore assume this example site is styled entirely differently for logged-in admins. Perhaps to better present and accommodate the additional features an Admin has. Some websites also offer a "night mode", where the background of the site is darker with lighter-colored text for easier reading in low-light environments. An option like this would be represented in its own theme file too.

**[BEM Methodology](https://en.bem.info/methodology)** is used as the **CSS naming method** in the project. BEM (Block, Element, Modifier) is a component-based approach to web development. The idea behind it is to divide the user interface into independent blocks. This makes interface development easy and fast even with a complex UI, and it allows reuse of existing code without copying and pasting.

**Example**

```
<!-- `search-form` block -->
<form class="search-form">
    <!-- `input` element in the `search-form` block -->
    <input class="search-form__input">

    <!-- `button` element in the `search-form` block -->
    <button class="search-form__button">Search</button>
</form>
```

**[Material Design](https://material.angular.io)** is used as **UI library**. Angular Material is a User Interface (UI) component library that developers can use in their Angular projects to speed up the development of elegant and consistent user interfaces. Angular Material offers you reusable and beautiful UI components like Cards, Inputs, Data Tables, Datepickers, and much more.

**[Angular Flex Layout](https://github.com/angular/flex-layout)** is used as **grid layout**. Angular Flex-Layout is an npm package made by Angular team officially. Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery. This module provides Angular developers with component layout features using a custom Layout API, mediaQuery observables, and injected DOM flexbox-2016 CSS stylings.

**[Stylelint](https://stylelint.io)** is a mighty, modern linter that helps you avoid errors and enforce conventions in your styles. Please see **[stylelint-integration](https://github.com/merih-sakarya/ng-starter-template-02/tree/stylelint-integration)** branch and **[pull request](https://github.com/merih-sakarya/ng-starter-template-02/pull/1)** for more information.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

**Test build**

Run `npm run build:test`

**Prod build**

Run `npm run build:production`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` or `npm run test:server & npx cypress run` to execute the end-to-end tests via a platform of your choice.

Make sure mock api is up.

**[Cypress](https://www.cypress.io)** is used for E2E tests. [Cypress](https://www.cypress.io) is a next generation front end testing tool built for the modern web.<br/>
For more information; @See [Cypress Docs](https://docs.cypress.io)

`npm run cypress:run` -> To run the tests in headless mode.<br/>
`npm run cypress:open` -> To run the tests using Launchpad and Test Runner.<br/>

## Running mock server

Run `npm run test:server` to run the mock server. The server runs on port number `3000`. It listens for requests at endpoint `/api/*`. (`http://localhost:3000/api`) The application will automatically reload if you change any of the source files.

**[json-server](https://www.npmjs.com/package/json-server)** is a package providing full fake REST API with zero coding and it can be set up without much effort.

The following folder structure is created to ensure consistency in case multiple fake API JSON responses are added and they might belong to separate feature modules in the app. The folder structure is created on the basis of feature modules, much like what we do for feature modules in an Angular app.

```
server/
|
|- data/
|   |- auth/
|       |- json/        # Contains the list of mock data in the form of a JSON response.
|       |- index.js     # Exports the mock JSON response as a module.
|   |- users/
|       |- json/        # Contains the list of mock data in the form of a JSON response.
|       |- index.js     # Exports the mock JSON response as a module.
|
|- server.js            # Contains the configuration to set up a json-server.
```

**[nodemon](https://www.npmjs.com/package/nodemon)** is a tool that helps develop Node.js-based applications by automatically restarting the node application when file changes in the directory are detected.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
