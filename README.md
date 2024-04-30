# Iframe Resizer Chrome Extension Dev Kit

This project contains a modifed version of iframeResizer.contentWindow.js that fixes in page links on
embednotionpages.com Notion embed pages.

Use the extension as an example for developing and testing
scripts embedded in iframes.

See [scripts/iframeResizer.contentWindow.js](scripts/iframeResizer.contentWindow.js)

# Chrome Extension Development Tools

- [extension.js](https://github.com/cezaraugusto/extension.js) zero config cross platform extension starter kit
- [web-ext](https://github.com/mozilla/web-ext) CLI for building & testing extensions
- [Plasmo](https://github.com/PlasmoHQ/plasmo) browser extension dev framework with optional paid service for deployment
  - first class support for react in extension UI
  - optional [support for svelte](https://github.com/PlasmoHQ/with-svelte) in the extension UI
  - examples for [supabase authentication](https://github.com/PlasmoHQ/examples/tree/main/with-supabase)
- [Chrome Extension Samples](https://github.com/GoogleChrome/chrome-extensions-samples) library of extension code examples
- [Chrome Hello World Example](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world)


# Installing

1. Visit chrome://extensions/
2. Toggle on Developer Mode
3. Load unpacked extension
4. Select the directory where this code lives

Whenever code is changed, manually refresh the extension by
clicking the reload icon in chrome://extensions/

