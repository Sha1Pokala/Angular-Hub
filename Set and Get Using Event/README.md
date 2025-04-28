---

# Get and Set Input Field Value in Angular

This Angular project demonstrates how to set and get values in input fields using basic event handling and data binding. It covers common techniques for interacting with input fields in Angular, focusing on how to capture and manipulate data using Angular's built-in features.

## Features

- **Ways to Set and Get Values in Input Field**: Learn how to bind values to input fields and retrieve them efficiently.
- **Pass Values Using Functions**: See how values can be passed through functions between components.
- **Get Value with Events**: Use basic event handling to capture and pass input values.
- **Get Value with Template Reference Variables**: Learn how to use template reference variables to directly access values from input fields.

## Getting Started

To get started with this project on your local machine, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Version 14.x or higher)
- [Angular CLI](https://angular.io/cli) (Version 12.x or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Sha1Pokala/Angular-Hub.git
```

2. Navigate to the project directory:

```bash
cd Angular-Hub/Set\ and\ Get\ Using\ Event
```

3. Install the dependencies:

```bash
npm install
```

### Running the Application

To run the application, use the following command:

```bash
ng serve
```

Open your browser and navigate to:

```
http://localhost:4200/
```

The app will be running and demonstrate setting and getting input values.

## Project Structure

- **src/app**: Contains the source code of the Angular application.
  - **app.component.ts**: The main component for managing input values using basic events and data binding.
  - **child.component.ts**: A secondary component that interacts with the data passed from the parent.
  - **app.module.ts**: The module that declares components and imports necessary Angular modules.

## How it Works

1. The parent component (`app.component.ts`) includes an input field for the user to type data.
2. When the user submits the input, the value is captured by an event, and the data is passed using Angular's two-way data binding or event binding.
3. The child component listens for the event or accesses the value directly using template reference variables and updates the displayed data.

## Contributing

Feel free to fork the repository and contribute by:

1. Creating a new branch (`git checkout -b feature/your-feature`).
2. Committing your changes (`git commit -am 'Add new feature'`).
3. Pushing your changes (`git push origin feature/your-feature`).
4. Opening a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
