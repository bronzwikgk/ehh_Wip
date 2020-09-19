//https://gist.github.com/justsml/529d0b1ddc5249095ff4b890aad5e801#easy-get-json-from-a-url
//https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow#oauth-2.0-endpoints_1
//https://danlevy.net/you-may-not-need-axios/
//This fetch Handles all kind of fetch Req
//It results with a reposnse as request, currently aiming for JSON.

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

fetch('http://fed17.herokuapp.com/todos/1', request)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        console.log(jsonData);
    })
    .catch(function (error) {
        console.log(error);
    });



postFile('http://example.com/api/v1/users', 'input[type="file"].avatar')
    .then(data => console.log(data))

function postFile(url, fileSelector) {
    const formData = new FormData()
    const fileField = document.querySelector(fileSelector)

    formData.append('username', 'abc123')
    formData.append('avatar', fileField.files[0])

    return fetch(url, {
        method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
        body: formData  // Coordinate the body type with 'Content-Type'
    })
        .then(response => response.json())
        .catch(error => console.error(error))
}

postFile('http://example.com/api/v1/users', 'input[type="file"].files')
    .then(data => console.log(data))

function postFile(url, fileSelector) {
    const formData = new FormData()
    const fileFields = document.querySelectorAll(fileSelector)

    // Add all files to formData
    Array.prototype.forEach.call(fileFields.files, f => formData.append('files', f))
    // Alternatively for PHPeeps, use `files[]` for the name to support arrays
    // Array.prototype.forEach.call(fileFields.files, f => formData.append('files[]', f))

    return fetch(url, {
        method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
        body: formData  // Coordinate the body type with 'Content-Type'
    })
        .then(response => response.json())
        .catch(error => console.error(error))
}



function createGist(opts) {
    ChromeSamples.log('Posting request to GitHub API...');
    fetch('https://api.github.com/gists', {
        method: 'post',
        body: JSON.stringify(opts)
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        ChromeSamples.log('Created Gist:', data.html_url);
    });
}

function submitGist() {
    var content = document.querySelector('textarea').value;
    if (content) {
        createGist({
            description: 'Fetch API Post example',
            public: true,
            files: {
                'test.js': {
                    content: content
                }
            }
        });
    } else {
        ChromeSamples.log('Please enter in content to POST to a new Gist.');
    }
}

var submitBtn = document.querySelector('button');
submitBtn.addEventListener('click', submitGist);



// Call the API
// This is a POST request, because we need the API to generate a new token for us
fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}).then(function (resp) {

    // Return the response as JSON
    return resp.json();

}).then(function (data) {

    // Log the API data
    console.log('token', data);

    // Return a second API call
    // This one uses the token we received for authentication
    return fetch('https://api.petfinder.com/v2/animals?organization=' + org + '&status=' + status, {
        headers: {
            'Authorization': data.token_type + ' ' + data.access_token,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

}).catch(function (err) {

    // Log any errors
    console.log('something went wrong', err);

});