import myFunc from "./hello.mjs"  // simply using "./myfile" may not work in all resolvers;
import express from "./../node_modules/express/lib/express";

myFunc();

var app = express();

app.get('/', function (req, res) {
  myFunc();
  res.send('Hello World, from che.openshift.io!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});