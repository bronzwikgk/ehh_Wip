
function XMLHttpRequest(url,request){
    console.log("making a req",request);
    if (request && request['access_token']) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET',url + 'access_token=' + request['access_token']);
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.response);
            } else if (xhr.readyState === 4 && xhr.status === 401) {
                // Token invalid, so prompt for user permission.
                testOAuth();
            }
        };
        xhr.send(null);
    } else {
        testOAuth();
    }


}

function fetchHttpRequest(url, request) {
    console.log("making a req",url, request);
    var fetchUrl = url + 'access_token=' + request['access_token'];
    if (request && request['access_token']) {
        fetch('GET', fetchUrl)
            .then(function (response) { return response.json(); })
            .then(function (jsonData) { console.log(jsonData); })
            .catch(function (error) { console.log(error); });
      

    }
}


function fetchRequest(url,request){
fetch(url, request)
    .then(function (response) {return response.json();})
    .then(function (jsonData) {console.log(jsonData);})
    .catch(function (error) {console.log(error);});
}





    // fetch(url,request)
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data) // Prints result from `response.json()` in getRequest
    // })
    // .catch(error => console.error(error))

