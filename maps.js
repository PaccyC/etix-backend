// Make sure to import the correct module
const tt = require("@tomtom-international/web-sdk-services");

// Use the services object directly
tt.services.copyrights({
    key: "<your api key>",
  })
  .then(function (results) {
    console.log("Copyrights", results);
  })
  .catch(function (reason) {
    console.log("Copyrights", reason);
  });

//   http://tinyurl.com/4wyyk9ej