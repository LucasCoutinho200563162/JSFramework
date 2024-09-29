// Requiring the full fs module with all its built-in functions (methods)
const fs = require("fs");

//Read the file contents asynchronously by calling the fs object non-blocking
fs.readFile("./text.txt", "utf8", (e, data) => {
  // If there is an error, we log the error message.
  if (e) {
    console.error("Sorry, the file cannot be read: ", e);
    return; // Exit the callback to prevent further execution.
  }
  console.log(data); // Output the content to the terminal
});
