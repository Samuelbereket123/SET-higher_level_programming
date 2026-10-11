#!/usr/bin/node
const request = require('request');

request(process.argv[2], function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const todos = JSON.parse(body);
    const completed = {};
    todos.forEach((todo) => {
      if (todo.completed) {
        if (!completed[todo.userId]) {
          completed[todo.userId] = 1;
        } else {
          completed[todo.userId]++;
        }
      }
    });
    console.log(completed);
  }
});
