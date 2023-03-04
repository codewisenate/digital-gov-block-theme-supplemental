# Block-Theme-Supplemental

A base Vite build framework for adding additional scripts and styles to BCGov Block based themes.

Allows for SCSS and Javascript module development augmentation through Asset Loader additions to the Media Library.

## Entry points
Use `/styles/additional-styles.scss` for SCSS efforts.
Use `/scripts/additional-scripts.js` for Javascript efforts.

## Build files
```
npm run build
```
Files from this command will be found in `/dist/assets/` – these files can then be uploaded to the Media Library and enqueued for Public use.

## Helper functions
Additional helpers Javascript functions are in `/scripts/utils.js`:
- qs: a shorthand querySelect which returns the first element matching the given CSS selector within the given parent element
- qsa: a shorthand querySelectAll that returns an actual array of all elements matching the given CSS selector within the given parent element
- createElement: a better version of document.createElement that allows for creating an HTML element and passing in an object of attributes
- addGlobalEventListener: a utility function that attaches an event listener to the given parent element and triggers the callback function only if the event target matches the given selector 