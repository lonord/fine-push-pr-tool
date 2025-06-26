# Change Log

All notable changes to the "Fine Push PR Tool" extension will be documented in this file.

## [0.0.1] - 2025-06-26

### Added
- Initial release of Fine Push PR Tool
- Automatic detection of Git push events to code.fineres.com repositories
- Smart pull request URL generation based on repository and branch information
- Notification system with "Create PR" and "Copy Link" options
- Automatic repository name and username extraction from Git remote URLs
- Integration with VS Code's built-in Git extension
- Support for repositories hosted on code.fineres.com platform

### Technical Details
- Built with TypeScript and VS Code Extension API
- Requires VS Code 1.85.0 or higher
- Depends on VS Code Git extension for functionality
- Uses webpack for bundling and production builds