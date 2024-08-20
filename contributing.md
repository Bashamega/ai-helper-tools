# Contributing to ai-helper-tools

Thank you for considering contributing to ai-helper-tools! We welcome contributions from everyone. Here’s a guide to help you get started.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [How to Contribute](#how-to-contribute)
   - [Reporting Bugs](#reporting-bugs)
   - [Suggesting Features](#suggesting-features)
   - [Submitting Code Changes](#submitting-code-changes)
3. [Development Workflow](#development-workflow)
4. [Style Guides](#style-guides)
5. [Getting Help](#getting-help)

## Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md) to foster an open and welcoming environment. By participating, you agree to uphold this code. Report any issues to [adam.webtools@gmail.com](mailto:adam.webtools@gmail.com).

## How to Contribute

### Reporting Bugs

To report a bug, please open an issue with:

- A clear and descriptive title.
- Steps to reproduce the issue.
- Expected vs. actual results.
- Screenshots or logs if available.

### Suggesting Features

To suggest a feature, please:

1. Search for existing suggestions.
2. If none exist, open an issue with:
   - A clear title and detailed description.
   - The problem it solves.
   - Examples or references.

### Submitting Code Changes

For code contributions:

1. Fork the repository.
2. Create a branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Test thoroughly.
5. Commit and push (`git commit -m 'Add new feature'` and `git push origin feature/your-feature-name`).
6. Open a pull request.

## Development Workflow

1. **Fork and Clone**:
   ```bash
   git clone https://github.com/Bashamega/ai-helper-tools.git
   cd ai-helper-tools
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Copy `.env.example` to `.env`**:
   ```bash
   cp .env.example .env
   ```

4. **Add Your API Key**:
   - Open the `.env` file in a text editor.
   - Replace the placeholder in `NEXT_PUBLIC_API_KEY=""` with your actual API key.
     ```
     NEXT_PUBLIC_API_KEY="your_actual_api_key_here"
     ```

5. **Run Development Server**:
   - Save the `.env` file after editing it.
   - You can now proceed to run the development server using `npm run dev`.
   ```bash
   npm run dev
   ```

## Style Guides

### Code Style

- Follow the existing coding standards.
- Use meaningful names for variables and functions.
- Keep functions small and focused.

### Documentation Style

- Write clear comments.
- Document important functions and classes.
- Update README.md as necessary.

## Getting Help

For help, you can:

- Review the documentation.
- Check existing issues and pull requests.
- Reach out via discussions.

Thank you for contributing to ai-helper-tools! Your help is greatly appreciated.