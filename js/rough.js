// let contacts = new Map()
// contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
// contacts.has('Jessie') // true
// contacts.get('Hilary') // undefined
// contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
// contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
// contacts.delete('Raymond') // false
// contacts.delete('Jessie') // true
// console.log(contacts.size) // 1
// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of
//map.size() returns the number of keys


function mutate(entity,outputMapRequest,outputType){
    if(!outputMapRequest){var outputMapRequest = new Map();}
    for (key in entity){
        outputMapRequest.set(key,entity[key]);
    }
    return outputMapRequest;
}


var output = mutate(entityKeysReq,"","map");
console.log(output);

// initProcess();
// .then(function(result) {
//   return doSomethingElse(result);
// })
// .then(function(newResult) {
//   return doThirdThing(newResult);
// })
// .then(function(finalResult) {
//   console.log('Got the final result: ' + finalResult);
// })
// .catch(failureCallback);




//iterateEntity(request,"values");
//Call back Could be ..Get/Set/Delete/Update
function iterateCollection(entity, options, callback) {  //{options : entries || Values || keys}
    if (!response) { var response = new Map(); }
    sw = arguments.callee.name;
    console.log(i, sw, entity, getEntityType(entity), entity.nodeType); i++
    console.log(entity.keys());
    if (options === 'keys') {
        for (key of entity.keys()) {
            if (entity[key]) {
                console.log(key);
                response[key] = entity[key];
            }
        }
    } else {
        console.log("objectType UnRegistered", entity);
    }
    return response;
}



//iterateEntity(request,"values");
//Call back Could be ..Get/Set/Delete/Update
function iterateEntity(entity, options, callback) {  //{options : entries || Values || keys}
    if (!response) { var response = {}; }
    sw = arguments.callee.name;
    console.log(i, sw, entity, getEntityType(entity), typeof entity, entity.nodeType, entity.length); i++;

    if (options === 'values') {
        Object.values(entity).forEach(function (value, key) {
            //  console.log(key + ' = ' + value);

            //  response.set(key, value);
            // console.log(response);
        });
    } else if (options === 'keys') {
        Object.keys(entity).forEach(function (value, key) {
            // console.log(key + ' = ' + value);
            //  response.set(key, value);
        });
    } else if (options === 'entries') {
        Object.entries(entity).forEach(function (value, key) {
            console.log(key + ' = ' + value);
            response[key] = key[value];
            //response.set(key, value);

        });
    } else {
        // console.log("objectType UnRegistered",entity);
    }
    console.log("iterating Entity", response);
    return response;
}





// Create new script element
const script = document.createElement('script');
script.src = '/path/to/js/file.js';

// Append to the `head` element
document.head.appendChild(script);


// post new script element

script.addEventListener('load', function () {
    // The script is loaded completely
    // Do something
});

// Append to the `head` element




// Load a script from given `url`
const loadScript = function (url) {
    return new Promise(function (resolve, reject) {
        const script = document.createElement('script');
        script.src = url;

        script.addEventListener('load', function () {
            // The script is loaded completely
            resolve(true);
        });

        document.head.appendChild(script);
    });
};

// Perform all promises in the order
const waterfall = function (promises) {
    return promises.reduce(
        function (p, c) {
            // Waiting for `p` completed
            return p.then(function () {
                // and then `c`
                return c().then(function (result) {
                    return true;
                });
            });
        },
        // The initial value passed to the reduce method
        Promise.resolve([])
    );
};


async function fetchText() {

    let response = await fetch('/readme.txt');

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.text();
        // handle data
    }
}

fetchText();


async function fetchUrl(url) {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


function onhashchange2() {
    console.log("detetced hash Change", document.location);
    var loc = window.location;
    console.log(loc);
    console.log("loc.hostname", loc.hostname);
    console.log("loc.port", loc.port);
    console.log("loc.pathname", loc.pathname);
    console.log("loc.search", loc.search);

    if (document.location) {

        console.log("detetced hash Change", document.location);

    }
    var token = getToken();
    console.log("token", token);
    var fragmentString = window.location.hash.substring(1);

    console.log("fragmentString", fragmentString);
    // Parse query string to see if page request is coming from OAuth 2.0 server.
    var params = {};
    var regex = /([^&=]+)=([^&]*)/g, m;
    while (m = regex.exec(fragmentString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    if (Object.keys(params).length > 0) {
        // localStorage.setItem('oauth2-test-params', JSON.stringify(params));
        if (params['state'] && params['state'] == 'try_sample_request') {
            // 
        }
    }


}
