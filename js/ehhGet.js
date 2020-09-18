let i = 0;
nodeOut = {};
console.log(i, nodeOut); i++;
output = {};
let entity = "ehhContextMenu";
var request = {
    'request' : {
        'localName': "get",
        'tagName': "get",
        'nodeName': "get",
        "nodeValue":"",
        'name': "get",
        'nodeType': "get",
        'id': "get",
        "validity": "",
        "attributes": "",
        "style": "",
        "childNodes": "",
        "CSSRuleSelector": "",
        "children": "",
        "dataset": "",
        "classList": "",
        
 },
    'options': {
        'values': true,
        'ignore': ['function'],
        'rules': {
            "get&ApplyRule1": 'getNameKey',
            "getNonEmptyValues": 'ifvaluenotblank'
        }
    }
}

var temp = getElement(entity);
console.log("temp",temp);
var output = processRequest(entity, request, output, true);
console.log(output);

//this function takes a request [ entity | string ], and for each key in request processes it.
function processRequest(entity, request, output, values) { //Entity to be part of Request Json
    if (!response) { var response = {};}

    var eip = document.getElementsByTagName(entity)[0];
    //var eip = document.querySelectorAll(entity)[0];
   // console.log(eip);
    for (key in request.request) {
        //console.log(key);
        if (eip[key]) {
            if (values === true) {
                if ( typeof eip[key] === 'object' || typeof eip[key] === 'function') {

                    console.log("found Object in value", key, eip[key]);
                    
                    var temp = iterationConductor(eip[key], "entries");
                    response[key] = temp;
                  
                } else {
                  //  console.log("found Something", key, eip[key]);
                    response[key] = eip[key];
                  
                }

            } else {
                console.log("found Something here as well", key, eip[key]);
                 response[key] = eip[key];
            
            }

        }
    }

    return response;
}

function iterationConductor(entity, request, output, values, iteratorResponse) {
    sw = arguments.callee.name;
    if (!response) { var response = {}; } 
 //  console.log(i, sw, entity, getEntityType(entity),typeof entity, entity.nodeType,entity.length); i++;

    if (entity) {
        if (typeof entity === 'object' && !entity.length) {
           // console.log("Object herehere",entity);
            var response = iterateObject(entity);
        } else if (entity.length) {
          //  console.log("Arrayhere");
            var response = iterateArr(entity,"entries");
        } else {
          //  console.log("unknownEntity",entity);
        }

    }
  //  console.log("condustors Response",response);
    return response;
}

function iterateObject(entity, options, callback) {
    if (!response) { var response = {}; } 
    sw = arguments.callee.name;
    console.log(i, sw, entity, getEntityType(entity), entity.nodeType); i++;

    for (let key in entity) {
        
        
        if (entity[key]) {

            if (entity.hasOwnProperty(key) || typeof entity[key] != 'function') {//In case we need to recurse
               // console.log("obj found >>", key, entity[key], getEntityType(entity[key]), entity[key].nodeType, typeof entity[key]);
                
                response[key] = entity[key];

                // console.log(i, key, obj[key]); i++;
            }
        }
//     
    }
    console.log("response Returned from Iterate Object",response);
    return response;
}

function iterateArr(entity, output) { 

    if (!response) { var response = {} }
    sw = arguments.callee.name;
   // console.log(i, sw, entity, getEntityType(entity), typeof entity, entity.nodeType, entity.length); i++;
    for (i = 0; i <= entity.length; i++) {
        if (entity[i]) {
           // response.set(entity[i]);
            response[i] = entity[i]; 
           // console.log(response);
        }
    }
    
  // console.log("responsefrom Arr",response);
    return response;
}

function getElement(entity, output) {
    var eip = document.getElementsByTagName(entity)[0];
    var element = conductIteration(eip, output, entity, "find");
    // console.log(i,"element", element); i++
    return element;

}

//this is like a callback function to be called for Each element or Key
//Get||Set||Update||Delete||Match|Find||
function exeOnEachEntity() { 

}