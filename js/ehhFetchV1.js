
function getHttpRequest(url,request){

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