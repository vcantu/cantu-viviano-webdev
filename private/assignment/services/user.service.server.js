/**
 * Created by vcantu on 5/28/17.
 */

var Service = require('./abstract.service.server');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var facebookConfig = {
    clientID     : process.env.FACEBOOK_CLIENT_ID,
    clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL  : process.env.FACEBOOK_CALLBACK_URL
};

module.exports = function (app) {

    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];

    app.post('/api/login', passport.authenticate('local'), login);
    app.post('/api/logout', logout);
    app.post('/api/register', register);
    app.get ('/api/loggedin', loggedin);
    app.get ('/auth/facebook',
            passport.authenticate('facebook', { scope : 'email'}));
    app.get ('/auth/facebook/callback',
            passport.authenticate('facebook', {
                successRedirect: '/#!/profile',
                failureRedirect: '/#!/login'
            }));

    var model = require('../models/user/user.model.server.js');
    var service = Service(app, 'user', model);

    function login(req, res) {
        var user = req.user;
        res.json(user);
    }

    function logout(req, res) {
        req.logout();
        res.send(200);
    }

    function register(req, res) {
        var newObject = req.body;
        model
            .createObj(newObject)
            .then(function (obj) {
                if (newObject) {
                    req.login(newObject, function (err) {
                        if (err) {
                            res.status(400).send(err);
                        } else {
                            res.json(newObject);
                        }
                    });
                }
            }, function (err) {
                res.sendStatus(404);
            })
    }

    function loggedin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));
    function facebookStrategy(token, refreshToken, profile, done) {
        model.findUserByFacebookId(profile.id);
    }


    passport.use(new LocalStrategy(localStrategy));
    function localStrategy(username, password, done) {
        model.findUserByCredentials(username, password)
            .then(
                function(user) {
                    if (user.username === username && user.password === password) {
                        return done(null, user);
                    }
                    else {
                        return done(null, false);
                    }
                },
                function(err) {
                    if (err) { return done(err); }
                }
            )
    }

    passport.serializeUser(serializeUser);
    function serializeUser(user, done) {
        done(null, user);
    }

    passport.deserializeUser(deserializeUser);
    function deserializeUser(user, done) {
        model
            .findById(user._id)
            .then(
                function(user) {
                    done(null, user);
                },
                function(err) {
                    done(err, null);
                }
            );
    }

};
