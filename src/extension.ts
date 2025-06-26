// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { GitExtension } from './git';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const output = vscode.window.createOutputChannel('Fine Push PR Tool');
	output.appendLine('Activated');

	const gitExtension = vscode.extensions.getExtension('vscode.git')?.exports as GitExtension;
	if (!gitExtension) {
		vscode.window.showErrorMessage('Cannot load Git extension.');
		return;
	}

	const git = gitExtension.getAPI(1);
	git.onDidPublish(event => {
		const repo = event.repository;
		const branch = event.branch;
		const url = repo.state.remotes.filter(remote => remote.name === 'origin').map(remote => remote.fetchUrl).find(url => !!url && url.indexOf('code.fineres.com') > 0);
		if (!url || !branch) {
			return;
		}
		const urlParts = url.split('/');
		if (urlParts.length < 3) {
			return;
		}
		const lastPart = urlParts[urlParts.length - 1];
		const repoName = lastPart.indexOf('.git') === lastPart.length - 4 ? lastPart.substring(0, lastPart.indexOf('.git')) : null;
		const userName = urlParts[urlParts.length - 2].indexOf('~') === 0 ? urlParts[urlParts.length - 2].substring(1) : null;
		if (!repoName || !userName) {
			return;
		}
		const prUrl = `https://code.fineres.com/users/${userName}/repos/${repoName}/pull-requests?create&sourceBranch=refs/heads/${branch}`;
		output.appendLine(`Code has been pushed to ${branch} branch of ${repoName} repository, PR URL: ${prUrl}`);
		vscode.window.showInformationMessage(`Code has been pushed to ${branch} branch of ${repoName} repository`, "Create PR", "Copy Link").then(action => {
			if (action === "Create PR") {
				vscode.env.openExternal(vscode.Uri.parse(prUrl));
			} else if (action === "Copy Link") {
				vscode.env.clipboard.writeText(prUrl);
			}
		});
	});
}

// This method is called when your extension is deactivated
export function deactivate() { }
