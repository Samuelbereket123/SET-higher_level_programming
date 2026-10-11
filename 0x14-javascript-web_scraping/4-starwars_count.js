#!/usr/bin/node
const request = require('request');

request(process.argv[2], function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const results = JSON.parse(body).results;
    const count = results.filter((movie) => {
      return movie.characters.some((character) => character.includes('/18/'));
    }).length;
    console.log(count);
  }
});
