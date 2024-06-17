# Code Turf

Welcome to **Code Turf** – a simple yet efficient code editor that supports multiple programming languages, powered by the Piston API.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Supported Languages and Versions](#supported-languages-and-versions)
- [Themes](#themes)
- [Executing Code](#executing-code)
- [Contributing](#contributing)
- [License](#license)

## Introduction

**Code Turf** is a web-based code editor designed to provide a seamless coding experience with support for multiple programming languages. It leverages the Piston API to run and execute code, making it an excellent tool for developers, students, and educators.

## Features

- **Multi-language Support:** Write and execute code in various programming languages.
- **Syntax Highlighting:** Enhanced readability with language-specific syntax highlighting.
- **Customizable Themes:** Choose from a variety of themes to personalize your coding environment.
- **Real-time Code Execution:** Instant feedback with real-time code execution using the Piston API.

## Installation

To get started with **Code Turf**, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/code-turf.git
   cd code-turf
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to start using **Code Turf**.

## Usage

### Fetch Supported Languages and Versions

Use the following code to fetch the list of supported languages and versions:

```javascript
const axios = require('axios'); // legacy way

// Create an Axios instance with the base URL
const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
});

// Function to get runtimes
const getRuntimes = async () => {
    try {
        const response = await API.get('/runtimes');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching runtimes:', error);
    }
};

getRuntimes();
```

### Fetch Supported Themes

To get the list of supported themes, visit the following webpage:
[Supported Themes](https://gist.github.com/RyanNutt/cb8d60997d97905f0b2aea6c3b5c8ee0)

Alternatively, you can get it from this GitHub repository:
[Supported Themes GitHub Repo](https://github.com/Akilraj-1153/Code-Editor/blob/main/src/Data/Data.js)

### Executing Code

Use the following code to execute code using the Piston API:

```javascript
import axios from "axios";

// Create an Axios instance with the base URL
const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (servercode, serverlang, serverversion) => {
  try {
    const response = await API.post("/execute", {
      language: serverlang,
      version: serverversion,
      files: [
        {
          content: servercode,
        },
      ],
    });
    return response.data;
  } catch (error) {
    console.error("Error executing code:", error);
    throw error;
  }
};
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Push to your branch.
6. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using **Code Turf**! We hope you enjoy coding with our editor. If you have any questions or feedback, please feel free to open an issue or contact us directly.