module.exports = function (ProfileContent) {

    var root = "./../../../data/";

    ProfileContent.personal = function (req, cb) {

        var content = require(root + "user.profile.personal.json");

        cb(null, content)
    };

    ProfileContent.contact = function (req, cb) {

        var content = require(root + "user.profile.contact.json");

        cb(null, content)
    };

    ProfileContent.overview = function (req, cb) {

        var all = require(root + "user.profile.professional.json");
        var content = {
            title: all.title,
            summary: all.summary,
            outline: all.outline,
            name: all.contact.name
        };

        var result = {
            code: 200,
            data: content,
            message: ''
        };

        cb(null, result)
    };

    ProfileContent.resources = function (req, cb) {

        var all = require(root + "user.profile.professional.json");
        var content = {
            links: all.links
        };

        cb(null, content)
    };

    ProfileContent.skills = function (req, cb) {

        var content = require(root + "user.profile.professional.json");
        var edu = require(root + "user.profile.education.json");
        content.education = edu.schools;

        cb(null, content)
    };

    ProfileContent.resume = function (req, cb) {

        var all = require(root + "user.profile.professional.json");
        var content = all.skills;

        cb(null, content)
    };

    ProfileContent.remoteMethod(
        'personal',
        {
            accepts: {arg: 'req', type: 'object', http: {source: 'req'}},
            returns: {root: true},
            http: {verb: 'GET'},
            description: 'Personal content.'
        }
    );

    ProfileContent.remoteMethod(
        'contact',
        {
            accepts: {arg: 'req', type: 'object', http: {source: 'req'}},
            returns: {root: true},
            http: {verb: 'GET'},
            description: 'Contact content.'
        }
    );

    ProfileContent.remoteMethod(
        'overview',
        {
            accepts: {arg: 'req', type: 'object', http: {source: 'req'}},
            returns: {root: true},
            http: {verb: 'GET'},
            description: 'Overview content.'
        }
    );

    ProfileContent.remoteMethod(
        'resources',
        {
            accepts: {arg: 'req', type: 'object', http: {source: 'req'}},
            returns: {root: true},
            http: {verb: 'GET'},
            description: 'Resource links content.'
        }
    );

    ProfileContent.remoteMethod(
        'skills',
        {
            accepts: {arg: 'req', type: 'object', http: {source: 'req'}},
            returns: {root: true},
            http: {verb: 'GET'},
            description: 'Skills content.'
        }
    );

    ProfileContent.remoteMethod(
        'resume',
        {
            accepts: {arg: 'req', type: 'object', http: {source: 'req'}},
            returns: {root: true},
            http: {verb: 'GET'},
            description: 'Resume content.'
        }
    );


};
