


function buildEncodedUri(request) {
    const response = [];
    for (let d in request)
        response.push(encodeURIComponent(d) + '=' + encodeURIComponent(request[d]));
    return response.join('&');
}


function unbuildEndodedUri(request) { 




    
}
//options with map
function encodeData(data) {
    return Object.keys(data).map(function (key) {
        return [key, data[key]].map(encodeURIComponent).join("=");
    }).join("&");
} 





var target = "?client_id=385607167966-u90ri3n5qkapcuq8gmhheg781qr7jbkp.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fbronzwikgk.github.io%2Fehh_Wip%2F&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.metadata.readonly&state=accessTokenRecived&include_granted_scopes=true&response_type=token";
//% 7B % 22client_id % 22 % 3A % 22385607167966 - u90ri3n5qkapcuq8gmhheg781qr7jbkp.apps.googleusercontent.com % 22 % 2C % 22redirect_uri % 22 % 3A % 22https % 3A % 2F % 2Fbronzwikgk.github.io % 2Fehh_Wip % 2F % 22 % 2C % 22scope % 22 % 3A % 22https % 3A % 2F % 2Fwww.googleapis.com % 2Fauth % 2Fdrive.metadata.readonly % 22 % 2C % 22state % 22 % 3A % 22accessTokenRecived % 22 % 2C % 22include_granted_scopes % 22 % 3A % 22true % 22 % 2C % 22response_type % 22 % 3A % 22token % 22 % 7D
//sdas ?client_id=385607167966-u90ri3n5qkapcuq8gmhheg781qr7jbkp.apps.googleusercontent.com,?redirect_uri=https://bronzwikgk.github.io/ehh_Wip/,?scope=https://www.googleapis.com/auth/drive.metadata.readonly,?state=accessTokenRecived,?include_granted_scopes=true,?response_type=token
//https://accounts.google.com/o/oauth2/v2/auth?client_id=385607167966-u90ri3n5qkapcuq8gmhheg781qr7jbkp.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fbronzwikgk.github.io%2Fehh_Wip%2F&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.metadata.readonly&state=accessTokenRecived&include_granted_scopes=true&response_type=token
//https://accounts.google.com/o/oauth2/v2/auth%7B%22client_id%22%3A%22385607167966-u90ri3n5qkapcuq8gmhheg781qr7jbkp.apps.googleusercontent.com%22%2C%22redirect_uri%22%3A%22https%3A%2F%2Fbronzwikgk.github.io%2Fehh_Wip%2F%22%2C%22scope%22%3A%22https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.metadata.readonly%22%2C%22state%22%3A%22accessTokenRecived%22%2C%22include_granted_scopes%22%3A%22true%22%2C%22response_type%22%3A%22token%22%7D