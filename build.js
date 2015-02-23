#!/usr/bin/env node

// prerequisites:
// put this file and package.json in a dir that is a sibling of cordova-android and core plugins
// npm install
// npm link cordova-lib where the api branch is checked out from
// https://github.com/kamrik/cordova-lib/tree/api


var path = require('path');
var shell = require('shelljs');

// This should be eventaually replaced with
// var IosProject = require('cordova-ios');
var cordovaLib = require('cordova-lib');
var IosProject = cordovaLib.IosProject;

// Legacy logging plumbing
cordovaLib.events.on('log', console.log);
cordovaLib.events.on('error', console.error);
cordovaLib.events.on('warn', console.warn);
cordovaLib.events.on('verbose', console.log);


var cfg = new cordovaLib.ConfigParser(path.resolve('cordova/config.xml'));

var pluginDirs = [
    path.resolve('../../../PromisesPlugin'),
    path.resolve('../../../cordova-plugin-serviceworker'),
];

var prjInfo = {
    paths: {
        www: path.resolve('../webapp'),
        root: path.resolve('cordova/build'),
        template: path.resolve('./node_modules/cordova-ios'),  // Should be unnecessary when IosProject lives in cordova-ios
        plugins: pluginDirs,  // Not needed when plugins are on npm, just use all in node_modules by default
    },
    cfg: cfg,
};

// Nuke the old build dir
shell.rm('-rf', prjInfo.paths.root);


var proj = new IosProject();

proj.create(prjInfo)
    .then(proj.build)  // assumes build is well bound to proj
    .done();

