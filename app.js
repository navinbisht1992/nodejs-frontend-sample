/*jshint multistr: true, node: true, esversion: 6, undef: true, unused: true, varstmt: true*/
"use strict";

// NPM Modules
const bodyParser                  = require('body-parser'),
      cors                        = require('cors'),
      express                     = require('express'),
      path                        = require('path'),
// Internal Modules
      console                     = require('./config/logger').log,
      router                      = require('./router');

const app                         = express();

// Cross-Origin Resource Sharing
app.use(cors());

// configure the app to use bodyParser() to extract body from request.
// parse urlencoded types to JSON
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));

// Setup views directory, file type and public filder.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

router(app);

const port = process.env.PORT || 3000;

console.info('server listening at 127.0.0.1 over port: ', port);
app.listen(port);
