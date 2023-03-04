# Block-Theme-Supplemental

A base Vite build framework for adding additional scripts and styles to BCGov Block based themes.

Allows for SCSS and Javascript module development augmentation through Asset Loader additions to the Media Library.

## Entry points

For public facing style updates use:
- `/styles/public-additional-styles.scss` for SCSS efforts
- `/scripts/public-additional-scripts.js` for Javascript efforts

There are occasions when the changes made to public facing styles should also be replicated in the blok editing environment. So for any admin side specific style updates use:
- `/styles/admin-additional-styles.scss`

## Build files

```
npm run build
```
Files from this command will be found in `/dist/assets/` – these files can then be uploaded to the Media Library and enqueued for Public or Admin use (or both) respectively.

## Helper functions

Additional helpers Javascript functions are in `/scripts/utils.js`:
- qs: a shorthand querySelect which returns the first element matching the given CSS selector within the given parent element
- qsa: a shorthand querySelectAll that returns an actual array of all elements matching the given CSS selector within the given parent element
- createElement: a better version of document.createElement that allows for creating an HTML element and passing in an object of attributes
- addGlobalEventListener: a utility function that attaches an event listener to the given parent element and triggers the callback function only if the event target matches the given selector 