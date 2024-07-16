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
	'brightness': {
		'controllers': {
			'default': "brightnessctl",
		},
	},
	'cheatsheet': {
		'keybinds': {
			'configPath': "/home/myryk/.config/hypr/UserConfigs/UserKeybinds.conf",
			// 'configPath': "~/Documents/programming/end_4_dots/.config/hypr/hyprland/keybinds.conf",
		},
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
		'numOfCols': 5,
		'numOfRows': 2,
	},
	'wallpaper': {
		'autoChange': true,
		'popup': false,
		'smart': false,
	},
}

export default userConfigOptions;
