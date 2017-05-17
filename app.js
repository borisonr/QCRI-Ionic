/*eslint-env node*/

//------------------------------------------------------------------------------
// hello world app is based on node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var path = require('path');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// // serve the files out of ./public as our main files
// app.use(express.static(__dirname + '/src'));
// app.use(express.static(__dirname + '/src/app'));
// app.use(express.static(__dirname + '/src/pages'));


// app.get('/*', function (req, res) {
//         res.sendFile(path.join(__dirname, 'src/index.html'));
//     });

app.use(express.static('www'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});