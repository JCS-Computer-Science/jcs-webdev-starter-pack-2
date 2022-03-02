/* eslint-disable @typescript-eslint/naming-convention */
import { GeneralObject } from "./utils";

export const defaultSettings = [
	{ "terminal.integrated.defaultProfile.windows": "Git Bash" },
	{
		"terminal.integrated.profiles.windows": {
			"Git Bash": {
				source: "Git Bash",
			},
		},
	},
	{ "editor.formatOnSave": true },
	{ "editor.defaultFormatter": "esbenp.prettier-vscode" },
	{
		"editor.quickSuggestions": {
			other: true,
			comments: true,
			strings: true,
		},
	},
	{ "editor.bracketPairColorization.enabled": true },
	{ "liveServer.settings.fullReload": true },
	{ "tailwindCSS.emmetCompletions": true },
] as GeneralObject[];
