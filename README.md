# Kitchen Timer
A simple Angular kitchen timer application developed as part of an Angular learning project. It implements several fundamental Angular concepts.

# Features
Intuitive user interface with two main components:

AppComponent: the root component of the application.

TimerComponent: handles the display and logic of the timer.

Start, stop, and reset a timer.

Duration selection via form input.

Visual notification when time is up.

# Technologies Used
Angular CLI

TypeScript

HTML5 / CSS3

Node.js / npm

# Angular Concepts Demonstrated
    Interpolation ({{ variable }})

    Property Binding ([property]="expression")

    Event Binding ((event)="handler()")

    Two-way Binding ([(ngModel)]="property")

    Directives:

        Structural: *ngIf, *ngFor

        Attribute: ngClass, ngStyle

    Pipes: date, uppercase, etc.

    Parent-child communication:

        @Input(), @Output(), EventEmitter

    Lifecycle Hooks: ngOnInit(), ngOnDestroy(), etc.

    @ViewChild() and @ContentChild() for accessing the DOM or child components

    Content projection using <ng-content>

    Service creation and dependency injection

    Basic routing (if applicable)

    Forms with basic validation


# KitchenTimer

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.12.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
