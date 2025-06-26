# Fine Push PR Tool

A Visual Studio Code extension that automatically detects when you push code to a Git repository hosted on `code.fineres.com` and provides convenient options to create pull requests or copy PR links.

## How It Works

1. When you push code to a Git repository using VS Code's built-in Git features
2. The extension detects the push event and checks if the repository is hosted on `code.fineres.com`
3. If it's a supported repository, it automatically constructs the pull request URL
4. You'll see a notification with options to create a PR or copy the link
5. Click "Create PR" to open the pull request creation page in your browser, or "Copy Link" to copy the URL to your clipboard

## Requirements

- Visual Studio Code 1.85.0 or higher
- VS Code Git extension (automatically installed as a dependency)
- Git repository hosted on `code.fineres.com`

## Usage

The extension works automatically once installed. No additional configuration is required.

1. Make sure your repository is connected to a remote hosted on `code.fineres.com`
2. Push your code using VS Code's Git features (Ctrl+Shift+P → "Git: Push")
3. You'll see a notification with options to create a PR or copy the link
4. Choose your preferred action

## Extension Settings

This extension doesn't add any VS Code settings. It works automatically with the default configuration.

## Known Issues

- The extension only works with repositories hosted on `code.fineres.com`
- Repository URLs must follow the pattern: `https://code.fineres.com/users/~username/repos/repository-name.git`
- The extension requires the VS Code Git extension to be active

## Release Notes

### 0.0.1

Initial release of Fine Push PR Tool with automatic PR creation functionality for code.fineres.com repositories.

---

## Contributing

If you'd like to contribute to this extension, please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## For more information

* [Visual Studio Code Extension API](https://code.visualstudio.com/api)
* [VS Code Git Extension](https://marketplace.visualstudio.com/items?itemName=vscode.git)
* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

**Enjoy automating your pull request workflow!**
