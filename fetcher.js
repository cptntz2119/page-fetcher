const request = require("request");
const fs = require("fs");
const argv = process.argv.slice(2);
const url = argv[0];
const path = argv[1];

request(url, (error, response, body) => {
  // Print the error if one occurred

  if (error) {
    console.log("url is not right!", error);
  }
  //console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  if (response && response.statusCode === 200) {
    const content = body;

    fs.writeFile(path, content, { flag: "a+" }, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      //file written successfully
      let stats = fs.statSync("index.html");
      let size = stats.size; //size of the file, stats.size
      console.log(`Downloaded and saved ${size} bytes to ${path}`);
    });
  }
  console.log("server not response");
  //console.log("body:", body); // Print the HTML for the Google homepage.
});

//
