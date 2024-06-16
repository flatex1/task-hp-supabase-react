# task-hp-supabase-react

[![Netlify Status](https://api.netlify.com/api/v1/badges/9717a6d6-66fa-465f-80b0-d31aed5503cf/deploy-status)](https://app.netlify.com/sites/hungerpeople/deploys) 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

## Overview

This repository contains a React application integrated with Supabase. The project aims to provide a user-friendly interface for managing data through Supabase's backend services. The application is deployed and continuously integrated using Netlify.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure user authentication using Supabase.
- **Data Management**: CRUD operations for managing data through Supabase.
- **Responsive Design**: Mobile-friendly user interface.
- **Continuous Deployment**: Automatic deployment using Netlify.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- Node.js and npm installed.
- A Supabase account and project set up.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/flatex1/task-hp-supabase-react.git
    cd task-hp-supabase-react
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Configuration

1. Create a `.env` file in the root directory of your project and add your Supabase credentials:

    ```env
    REACT_APP_SUPABASE_URL=your-supabase-url
    REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```

2. Replace `your-supabase-url` and `your-supabase-anon-key` with your actual Supabase project URL and anonymous key.

## Deployment

The project is set up for continuous deployment with Netlify. To deploy the application:

1. Connect your GitHub repository to Netlify.
2. Configure the build settings:

    - Build command: `npm run build`
    - Publish directory: `build`

3. Your application will be automatically deployed on each push to the main branch.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. Make your changes and commit them:

    ```bash
    git commit -m "Add your commit message"
    ```

4. Push to the branch:

    ```bash
    git push origin feature/your-feature-name
    ```

5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

For any questions or support, please open an issue in this repository. Thank you for using and contributing to this project!
