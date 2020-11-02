//https://stackoverflow.com/questions/9979172/difference-between-node-object-and-element-object#:~:text=5%20Answers&text=A%20node%20is%20the%20generic,such%20as%20document%20or%20document.&text=An%20element%20is%20one%20specific,%2C%20etc...).//
//Basic idea being, building a tree from the Chosen Node,and fetching requested atrributes and paramaeters as per the request Json.
//It takes an input live node using a document selector and iterates over it to build a Map/Json Object.
//We create a flat array from this object to be stored in a google sheet [ tempo we can render a new windor tab /html ]
//we should be able to read a Dom || create a JSOn || recreate the same HTML.
//This will be back bone of the UI framework. while building a reponse few fetch query will be needed.
//
//Major componenet being
// Process entity, to handle the Input Request nested Json Object, with key as the requested Key and values being the function to be called at the end
//of each node. These function can be rules
//iteration Condutor, which simply sends an enity to it's current iterator.
//iterate Array and Iterate Obj [ needs to be build with recuse and depth argument]
//on Each Node kind of a function which calls the function /sw passed to it from the request Object


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
        "attributes": "",
        "childNodes": "",
        "CSSRuleSelector": "",
        "children": ""
        
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


function iterateObj(obj, nodeOut, recurse, nextSw) {
    if (!response) { var response = {}; }
    sw = arguments.callee.name;
    //  console.log(i, sw, obj, getEntityType(obj), obj.nodeType); i++;
    for (let key in obj) {
        if (obj[key]) {
            // response[key] = obj[key];
            //console.log(i, key, obj[key]); i++;
            if (obj.hasOwnProperty(key) || typeof obj[key] != 'function' ) {//In case we need to recurse
                // console.log("obj found >>", key, obj[key], getEntityType(obj[key]), obj[key].nodeType,typeof obj[key]);
                //iterateEntity(obj, obj[key], nodeOut);
                response[key] = obj[key];
           
                // console.log(i, key, obj[key]); i++;
            }
        }
    }
    //  console.log(response);
    return response;
}


function conductIteration(entity, output, input, sw, keytoFind, itemLength, iteratorResponse) {
    sw = arguments.callee.name;
    // console.log(i,sw, entity, getEntityType(entity), itemLength, entity.nodeType);i++
    if (entity) {
        if (getEntityType(entity).includes("Element")) {
            // console.log(i, "entity is ", getEntityType(entity)); i++;

            var response = iterateObj(entity, output, false, sw);


        } else if (getEntityType(entity).includes("List")) {
            console.log("Listentity is ", getEntityType(entity));
            iterateArr(entity);
        } else if (getEntityType(entity) === 'object') {
            console.log("Objectentity is ", getEntityType(entity));
            iterateObj(entity, output);
        } else if (getEntityType(entity) === 'function') {
            console.log("entity is ", getEntityType(key));
        } else if (isArray(entity)) {
            console.log("entity is ", getEntityType(entity));
            iterateArr();
        } else if (getEntityType(entity).includes("Collection")) {
            console.log("entity is ", entity.__proto__.constructor.name);
            iterateArr(entity);
        } else {
            console.log("Other type of entity", entity);
        }


    }
    return response;
}