# UI Library

This repository contains a custom UI library designed to simplify the process of creating and styling buttons with consistent parameters. While it's currently in the early stages of development and not yet deployed, it provides a solid foundation for building and customizing UI components.

## Features

### Customizable Buttons
- **Basic Parameters**: Define consistent styling and behavior using parameters such as:
  - Button size (e.g., small, medium, large)
  - Button color themes (e.g., primary, secondary, danger)
  - States (e.g., hover, active, disabled)
- **Predefined Styles**: Buttons are styled using basic parameters to ensure uniformity across the UI.

### Extensibility
- The library is designed with scalability in mind, allowing additional parameters and components to be added easily.
- Developers can override default styles to meet specific design needs.

## Installation
The library is not yet deployed as a package but can be included directly by cloning this repository.

```bash
git clone <repository-url>
```

## Usage

### Example Code
Here’s a basic example of how to use the buttons created using this library:

```javascript
import { Button } from './path-to-your-library';

function App() {
  return (
    <div>
      <Button size="large" theme="primary">Click Me</Button>
      <Button size="small" theme="secondary">Cancel</Button>
    </div>
  );
}
```

### Parameters
- **`size`**: Specifies the button size. Options include:
  - `small`
  - `medium`
  - `large`

- **`theme`**: Defines the color theme for the button. Options include:
  - `primary`
  - `secondary`
  - `danger`

- **`disabled`**: Boolean to disable the button.

## Development
To get started with development:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the project locally:
   ```bash
   npm start
   ```

## Roadmap
- Add more components (e.g., input fields, dropdowns, modals).
- Enhance button customization (e.g., icon support, loading states).
- Write tests to ensure component reliability.
- Deploy as an npm package for easier installation and usage.

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Commit your changes with a clear message.
4. Submit a pull request for review.

## License
This project is licensed under the MIT License.

---

Feel free to explore, customize, and contribute to this UI library. Your feedback and ideas are appreciated to make it even better!

