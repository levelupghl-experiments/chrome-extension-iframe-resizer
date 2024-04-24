// https://stackoverflow.com/questions/19288202/inject-javascript-in-an-iframe-using-chrome-extension

if (parent === top) {
  // here you can put your code that will run only inside iframe
}

console.log('hello from contentScript.js')