/*jshint multistr: true, node: true, esversion: 6, undef: true, unused: true, varstmt: true*/
"use strict";

const _                   = require('lodash'),
      REQUEST             = require('request'),
// Internal Modules
      console             = require('../config/logger').file;

//lib.service.readZipFile();

module.exports = {

    checkLogin: async (req, res) => {

        let {body}        = req;

        let {email, password} = body;

        console.info("email: ", email);
        console.info("password: ", password);

        // Rendering to next page
        // Rendering is only possible if form submit is used
        res.render('index.ejs', {email});
    },

    postDetail: async (req, res, next) => {

        let body          = _.get(req, ['body'], {}),
            // Username and password can be kept in common settings, just not in public folder.
            username      = "username",
            password      = "passw0rd";

        let { email, fName, lName, phone, gender } = body;

        // Seting request options to call backend API with authentication
        let reqOps = {
            "url":      "http://127.0.0.1:4000/v1/detail",
            "method":   "POST",
            "json": {
                email, fName, lName, phone, gender
            },
            "headers": {
                "Content-type": "application/json",
                // Setting authentication, hidden from browser.
                "Authrization": "Basic: " + new Buffer( username + ":" + password ).toString("base64")
            }
        };
        
        REQUEST( reqOps, (err, response, body) => {

            let { statusCode }      = response;
            return res.status(statusCode || 500).send(body || err);

        });

    }

};
