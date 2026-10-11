
#!/usr/bin/node

const request = require('request');

request({ url: process.argv[2], method: 'GET', followRedirect: false }, (error, response) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`code: ${response.statusCode}`);
});
