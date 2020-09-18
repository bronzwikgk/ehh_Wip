//this is the firtst file that loads.
//It checks the OS/Browser/EhhMode [ extension/snippet/Addon/PWA/App/DesktopApp]
//It checks for supported Features, which are registered in the above detected UserEnvoirnment
//It detects the User and loads his package.json. [ need to see what all can be done in an extension/addon envournment].
//It flushes our a test report of a succesfull Setup.
//this file should take an input permission and checks json Input and execute all the permission request and test requried.

console.log(window.navigator);

window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

// Check for support.
if (window.requestFileSystem) {
    console.log("FileSystem Supported")
} else {
    console.log("FileSystem Not Supported")
}





// Returns "WINNT" on Windows Vista, XP, 2000, and NT systems;
// "Linux" on GNU/Linux; and "Darwin" on Mac OS X.
var osString = Services.appinfo.OS;

console.log("onLoad Check Done");

// Get the name of the application running us
Services.appinfo.name; // Returns "Firefox" for Firefox
Services.appinfo.version; // Returns "2.0.0.1" for Firefox version 2.0.0.1

Components.utils.import("resource://gre/modules/AddonManager.jsm");
AddonManager.getAddonByID("extension-guid@example.org", function (addon) {
    // This is an asynchronous callback function that might not be called immediately
    alert("My extension's version is " + addon.version);
});