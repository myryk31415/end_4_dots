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
	'icons': {
        substitutions: {
            'vesktop': "discord",
        },
    },
	'search': {
		'enableAiSearch': false,
		'enableWebSearch': false,
		'engineBaseUrl': "https://www.ecosia.org/search?q=",
		'excludedSites': [],
	},
}

export default userConfigOptions;
