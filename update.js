#!/usr/bin/env node

// Only update the www assets for fast iteration.

var path = require('path');
var cordovaLib = require('cordova-lib');
var IosProject = cordovaLib.IosProject;

// Legacy logging plumbing
cordovaLib.events.on('log', console.log);
cordovaLib.events.on('error', console.error);
cordovaLib.events.on('warn', console.warn);
cordovaLib.events.on('verbose', console.log);


var projDir = path.resolve('cordova/build');
var wwwDir = path.resolve('webapp');

var proj = new IosProject();
proj.open(projDir)
    .then(function() {
        return proj.copyWww(wwwDir);
    })
    .then(proj.emulate);


