// For every option, see ~/.config/ags/modules/.configuration/user_options.js
// (vscode users ctrl+click this: file://./modules/.configuration/user_options.js)
// (vim users: `:vsp` to split window, move cursor to this path, press `gf`. `Ctrl-w` twice to switch between)
//   options listed in this file will override the default ones in the above file

const userConfigOptions = {
	'apps': {
		'terminal': 'kitty',
	},
	'appearance': {
		'fakeScreenRounding': 0,
	},
	'configPaths': {
		// 'keybinds': "/home/myryk/.config/hypr/UserConfigs/UserKeybinds.conf",
		'keybinds': "/home/myryk/Documents/programming/end_4_dots/.config/hypr/hyprland/keybinds.conf",
	},
	'icons': {
        substitutions: {
            'vesktop': "discord",
        },
    },
	'search': {
		'enableFeatures': {
			'aiSearch': false,
			'webSearch': false,
		},
		'engineBaseUrl': "https://www.ecosia.org/search?q=",
		'excludedSites': [],
	},
	'overview': {
		'numOfCols': 2,
		'numOfRows': 5,
	},
}

export default userConfigOptions;
