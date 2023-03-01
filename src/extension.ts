import * as vscode from 'vscode';

function rejection(): Promise<void> {
	return Promise.reject("Test promise rejection, from robertbrignull/error-extension");
}

export function activate(context: vscode.ExtensionContext) {
	console.log('error-extension is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('error-extension.throw-exception', () => {
			vscode.window.showInformationMessage('Throwing unhandled exception');
			throw new Error("Test error, thrown by robertbrignull/error-extension");
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('error-extension.throw-exception-in-timeout', () => {
			setTimeout(() => {
				vscode.window.showInformationMessage('Throwing unhandled exception from within a setTimeout');
				throw new Error("Test error in setTimeout, thrown by robertbrignull/error-extension");
			}, 1);
		})
	);
	
	context.subscriptions.push(
		vscode.commands.registerCommand('error-extension.reject-promise', () => {
			vscode.window.showInformationMessage('Rejecting promise');
			void rejection();
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('error-extension.reject-promise-in-timeout', () => {
			setTimeout(() => {
				vscode.window.showInformationMessage('Rejecting promise from within a setTimeout');
				void rejection();
			}, 1);
		})
	);
}

export function deactivate() {}
