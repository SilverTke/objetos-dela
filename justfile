install-deps:
	bun install
serve:
	bunx --bun @11ty/eleventy --serve
build-uno:
	bun unocss '**/*.{js,html,css,liquid}' -o _site/assets/css/uno.css
