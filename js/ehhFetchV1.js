
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

fetch('url', post);


fetch('https://api.github.com/orgs/nodejs')
    .then(response => response.json())
    .then(data => {
        console.log(data) // Prints result from `response.json()` in getRequest
    })
    .catch(error => console.error(error))





postRequest('http://example.com/api/v1/users', { user: 'Dan' })
    .then(data => console.log(data)) // Result from the `response.json()` call

function postRequest(url, data) {
    return fetch(url, {
        credentials: 'include', // 'include', default: 'omit'
        method: 'POST',             // 'GET', 'PUT', 'DELETE', etc.
        body: JSON.stringify(data), // Use correct payload (matching 'Content-Type')
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.json())
        .catch(error => console.error(error))
}