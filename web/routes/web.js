"use strict";

const _ = require("lodash");
const moment = require("moment");
var path = require("path");
const bcrypt = require("bcryptjs");
const { UserData } = require("../app/models/user.model");
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render(path.join(ROOTPATH, "views/views/pages/welcome.ejs"), { appId: process.env.PORT });
    });

    app.get("/resources-images/:filename", function(req, res) {
        let filename = req.params.filename.replace(/\//g, '.')
        res.sendFile(
            path.join(ROOTPATH, "views/images", filename)
        );
    });

    app.get("/404", function(req, res) {
        res.render(path.join(ROOTPATH, "views/views/error/404.ejs"));
    });

    app.get("/500", function(req, res) {
        if (req.query.err == null || req.query.err == "") {
            req.query.err = "Misuse of resource";
        }
        res.render(path.join(ROOTPATH, "views/views/error/500.ejs"), { error: req.query.err });
    });

    app.get("/*", function(req, res) {
        res.render(path.join(ROOTPATH, "views/views/error/404.ejs"));
    });
};