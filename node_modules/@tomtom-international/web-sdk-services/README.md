# Maps SDK for Web - Services library

---
**NOTE**: New version available: V6 - Check the [release notes](https://developer.tomtom.com/maps-sdk-web-js/release-notes) to see what's new

---

## Documentation

Please, refer to pages for [Maps SDK for Web](https://developer.tomtom.com/maps-sdk-web-js) in the TomTom Developer Portal for detailed documentation with examples.

In this section you will also find the latest version of this SDK.

## Package content

The package contains the following files:

- `services-web.min.js` - Library prepared to be included direcly in your HTML file.
- `services-web.min.js.map` - Source map for the SDK built file.
- `services.min.js` - Library in [UMD format](https://github.com/umdjs/umd). The code is minified and does not need any external dependencies.
- `services.min.js.map` - Source map for the SDK built file.
- `esm.js` - Library in ES6 module format. The code is minified and does not need any external dependencies.
- `esm.js.map` - Source map for the SDK built file.
- `services-node.js` - Library designed for use in Node.js environment.
- `services-node.js.map` - Source maps for the SDK built file.
- `LICENSE.txt` - License file.
- `README.md` - All foundation information about the SDK.

## Getting started

This library can be used both on the client and node.js server.

### Using in nodeJS

```javascript
    const tt = require('@tomtom-international/web-sdk-services/dist/services-node.min.js');

    tt.services.copyrightsV2({
        key: '<your api key>'
    })
        .then(function (results) {
            console.log('Copyrights', results);
        })
        .catch(function (reason) {
            console.log('Copyrights', reason);
        });
```

### Using in module bundlers

If you use Webpack or other module bundler which supports ES6 import/export syntax, importing the library is simple:

```javascript
    import tt from '@tomtom-international/web-sdk-services';

    tt.services.copyrightsV2({
        key: '<your api key>'
    })
        .then(function (results) {
            console.log('Copyrights', results);
        })
        .catch(function (reason) {
            console.log('Copyrights', reason);
        });
```
Or include in your bundle only that what you need:

```javascript
    import { copyrightsV2, placeById } from '@tomtom-international/web-sdk-services/esm';
    
    copyrightsV2({
        key: '<your api key>'
    }).then(function (results) {
        console.log('Copyrights', results);
    }).catch(function (reason) {
        console.log('Copyrights', reason);
    });

    placeById({  
        key: '<your api key>'
        entityId: '<entity id>'
    }).then(function(result) {
        console.log('Place by Id', result);
    }).catch(function(reason) {
        console.log('Copyrights', reason);
    });
```
### Using a script tag

You can include the library directly in the HTML using a script tag.

```html
<html>
<head>
    <script src="services-web.min.js"></script>
    <script>
        tt.services.copyrightsV2({
            key: "<your api key>"
        })
            .then(function (results) {
                console.log('Copyrights', results);
            })
            .catch(function (reason) {
                console.log('Copyrights', reason);
            })
    </script>
</head>
<body></body>
</html>
```

### Typescript support

This version of SDK includes definition files to support Typescript developers. Just import this package to your project:

```javascript
    import tt from '@tomtom-international/web-sdk-services';
```
and you should be able to see the hints in your IDE.


Please note that you need to have a valid **API Key** which can be obtained at the [TomTom Developer Portal](https://developer.tomtom.com/how-to-get-tomtom-api-key).
