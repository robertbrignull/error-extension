import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('error-extension is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('error-extension.throw-exception', () => {
			vscode.window.showInformationMessage('Throwing unhandled exception');
			throw new Error("Test error from error-extension");
		})
	);
}

export function deactivate() {}
