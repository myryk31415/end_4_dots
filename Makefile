AGS_DIR = ~/.config/ags

all:
	rm -rf $(AGS_DIR)/*
	cp -r ./.config/ags/* $(AGS_DIR)
