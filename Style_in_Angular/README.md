---

# Style Options in Angular

This Angular project demonstrates various methods to apply styles in an Angular application. It covers how to manage component-specific styles, global styles, and more, giving a comprehensive view of styling options in Angular.

## Features

- **Component Style**: Learn how to apply styles directly within individual Angular components using inline styles or component-specific style files.
- **Global Style**: Understand how to apply global styles that affect the entire application.
- **Create a New File for Global Styles**: Learn how to organize and structure your global styles by placing them in separate files.
- **Internal Style**: Explore how to define internal styles in the component's template and understand their scope and use.
- **Style in `Component.ts` File**: Learn how to define styles directly within the component's TypeScript file, allowing for more dynamic styling based on component logic.
- **Load Multiple CSS Files in a Component**: Understand how to link multiple CSS files to a single component to manage complex styles and keep the code modular.

## Getting Started

To run the project on your local machine, follow these steps:

### Prerequisites

Ensure the following tools are installed:

- [Node.js](https://nodejs.org/) (Version 14.x or higher)
- [Angular CLI](https://angular.io/cli) (Version 12.x or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Sha1Pokala/Angular-Hub.git
```

2. Navigate to the project directory:

```bash
cd Angular-Hub/Style_in_Angular
```

3. Install the required dependencies:

```bash
npm install
```

### Running the Application

Run the Angular application using:

```bash
ng serve
```

Now, open your browser and go to:

```
http://localhost:4200/
```

You should see the app running and the different styles applied to various components.

## Project Structure

- **src/app**: The main source code for the Angular application.
  - **app.component.ts**: Contains styles applied to the component and demonstrates various styling techniques.
  - **styles.css**: Global styles for the entire application.
  - **app.module.ts**: The Angular module where the components are declared and necessary Angular modules are imported.

## How it Works

1. **Component Style**: The component’s styles are defined within the component's `.css` file (or inline) and are scoped only to that component.
2. **Global Style**: Global styles are defined in `styles.css` and affect the entire application.
3. **Internal Style**: Styles can also be defined directly within the component’s template using the `<style>` tag, making them scoped to the component.
4. **Style in `Component.ts`**: Angular allows dynamic styling within the `Component.ts` file using the `styles` property in the `@Component` decorator.
5. **Multiple CSS Files in Component**: You can link multiple CSS files by specifying them in the `styleUrls` array within the `@Component` decorator.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
