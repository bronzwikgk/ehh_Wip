//https://gist.github.com/justsml/529d0b1ddc5249095ff4b890aad5e801#easy-get-json-from-a-url
//https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow#oauth-2.0-endpoints_1
//This fetch Handles all kind of fetch Req
//It results with a reposnse as request, currently aiming for JSON.
var YOUR_CLIENT_ID = '385607167966-u90ri3n5qkapcuq8gmhheg781qr7jbkp.apps.googleusercontent.com';
var YOUR_REDIRECT_URI = 'https://bronzwikgk.github.io/ehh_Wip/';
var fragmentString = location.hash.substring(1);

url="google.com"
/****************
 * GET REQUEST  *
 ****************/

/*
 * `fetch` returns a promise containing the response from the server
 * the data doesn't 'arrive' as pure JSON so we have to convert it to JSON.
 * This is done with a built in function `.json` which is basically the same as
 * calling the function `JSON.parse(response)`. So the first `.then()` just converts
 * the data to JSON, we must then use another `.then()` to handle the returned data.
 * In this example I just choose to log it to console. !! The variables can be named
 * anything, they don't have to have the names 'response' and 'jsonData', that is just me
 * describing what data is being fetched and what happens to that data. IMPORTANT: the last
 * `.then()` doesn't have to return anything, every other `.then()` must return a value
 * if we want to continue chaining `thens` to it. We can have as many `.then()` as we want.
 */
fetch('http://fed17.herokuapp.com/todos')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        console.log(jsonData);
    });


/****************
 * POST REQUEST *
 ****************/

/*
 * If we want to do anything else than a GET we need to supply extra options to the
 * `fetch()`-call. so: `fetch(url, options)`. The options is ALWAYS in the form of an
 * object. Here we can supply which method, headers and what data to send (body). The
 * body must be in the form of JSON. This can easily be done with `JSON.stringify`
 */
const post = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ text: 'Buy a house', complete: false })
};

fetch('http://fed17.herokuapp.com/todos/1', post);


/*******************
 * CATCHING ERRORS!*
 *******************/

/* ALWAYS have a `.catch()` to handle errors. Anything can happen. If the server returns
 * an error the `.catch()` will automatically skip over the `.then()` and go directly
 * to the `.catch()`-function. This function shouldn't just log the error. It's OK to
 * log it in development but when you are writing an application you should format it and display
 * it to a user. 
 */

fetch('http://fed17.herokuapp.com/todos')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        console.log(jsonData);
    })
    .catch(function (error) {
        console.log(error);
    });
