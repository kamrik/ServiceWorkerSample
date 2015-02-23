#!/bin/bash
# A test script to run the app using cordova cli
rm -rf SwTest
cordova create SwTest --copy-from ../webapp
cd SwTest
cp ../config.xml ./
cordova platform add ios
cordova plugin add ../../..//PromisesPlugin
cordova plugin add ../../../cordova-plugin-serviceworker
# cordova emulated ios
