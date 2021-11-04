const args = process.argv.slice(2);
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breedName = URL + args[0];

const request = require('request');
request(breedName, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    console.log("Request to server failed.");
  } else if (response.statusCode !== 200) {
    console.log("Bad response");
  } else {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Breed name cannot be found");
    } else {
      // console.log("Data: ", data);
      // console.log("Type of: ", typeof data);
      console.log("Description: ", data[0].description);
    }
  }
});

