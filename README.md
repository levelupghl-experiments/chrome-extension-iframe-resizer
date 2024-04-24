# This is a chrome extension test

See https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world

This extension is installed in the WebDev profile in Chrome on this laptop.

This project contains a modifed version of iframeResizer.contentWindow.js that fixes
in page links on embednotionpages.com Notion embed pages.

See [scripts/iframeResizer.contentWindow.js]


# Installing

1. Visit chrome://extensions/
2. Toggle on Developer Mode
3. Load unpacked extension
4. Select the directory where this code lives

Whenever code is changed, manually refresh the extension by
clicking the reload icon in chrome://extensions/



```json
{
  "name": "Hello World Extensions",
  "description": "Base Level Extension",
  "version": "1.0",
  "manifest_version": 3,
  "action": {
    "default_popup": "hello.html",
    "default_icon": "icon_levelup.png"
  },
  "content_scripts": [
    {
      "matches": ["https://*/*"],
      "all_frames": true,
      "js": ["contentScript.js"]
    }
  ]
}
```