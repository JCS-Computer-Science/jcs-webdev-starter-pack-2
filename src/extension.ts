import * as vscode from "vscode";
import { extractAsKeyValue, GeneralObject } from "./utils";
import { defaultSettings } from "./defaultSettings";

const updateUserSettings = async (settings: GeneralObject[]) => {
	settings.forEach(async (setting) => {
		const { key, value } = extractAsKeyValue(setting);
		await vscode.workspace
			.getConfiguration()
			.update(key, value, vscode.ConfigurationTarget.Global);
	});
};

export async function activate(context: vscode.ExtensionContext) {
	console.log("JCS Web Dev Starter Pack 2 Activated");
	let disposable = vscode.commands.registerCommand(
		"jcs-webdev-starter-pack-2.updateConfig",
		async () => {
			console.log(JSON.stringify(defaultSettings, null, 1));
			await updateUserSettings(defaultSettings);
			await vscode.window.showInformationMessage(
				"Settings Update for JCS Web Dev"
			);
		}
	);
	context.subscriptions.push(disposable);
}
export function deactivate() {}
