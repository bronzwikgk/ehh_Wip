
const API_KEY = 'AIzaSyAdLftMrzdgpN-G9KRrw_AA3I9i1K3IRu0';
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
const SPREADSHEET_ID = "1Oh8naEHOWDl9gmRZiR1Pl621n-s4Ri04iWguEYS7dUo";
const SPREADSHEET_TAB_NAME = "Sheet2";

function onGAPILoad() {
    gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: DISCOVERY_DOCS,
    });
}


// Client ID and API key from the Developer Console
var CLIENT_ID = '565530078861-jc2c3103mm6ebbnhljtm9ifgg372cuu3.apps.googleusercontent.com';
var API_KEY = 'AIzaSyAdLftMrzdgpN-G9KRrw_AA3I9i1K3IRu0';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
    }, function (error) {
        appendPre(JSON.stringify(error, null, 2));
    });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
        listLabels();
    } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
    }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}

/**
 * Print all Labels in the authorized user's inbox. If no labels
 * are found an appropriate message is printed.
 */
function listLabels() {
    eval("gapi.client.gmail.users.labels.list({'userId': 'me' }).then(function(response) {var labels = response.result.labels;appendPre('Labels:');if (labels && labels.length > 0) {for (i = 0; i < labels.length; i++) { var label = labels[i]; appendPre(label.name) } } else { appendPre('No Labels found.');}});")

    var url = "https://gmail.googleapis.com/$discovery/rest?version=v1";
    var content = fetch(url);
    var discovery = JSON.parse(content);

    for (var name in discovery.resources) {

        console.log(name)
    }

}

