let i = 0;
nodeOut = {};
console.log(i, nodeOut); i++;
output = {};
let entity = "h1";
var entityKeysReq = {
    'request' : {
        'localName': "",
        'childNodes': "",
        'tagName': "",
        'children': "",
        'attributes': "",
        'nodeName': "",
        'name': "",
        'nodeType': "",
        'style': "",
        'id': ""
    },
    'options': {
        'values': true,
        'ignore': ['function']
    }
}


tmp = {};
var temp = getElement(entity, tmp);
console.log("temp",temp);



var output = getKeys(entity, entityKeysReq, output, true);
console.log(output);


function getKeys(entity, entityKeysReq, output, values) {
    if (!response) { var response = new Map(); }
    
    var eip = document.getElementsByTagName(entity)[0];
    for(key in entityKeysReq.request){
//console.log(key);
        if (eip[key]){
            if(values === true){
               // console.log(key, eip[key]);
                response.set(key, eip[key]);
            } else {
                response.set(key);
   
            }
            
        }
    }


return response;
}


function getValues() { 



}


function getElement(entity, output) {
    var eip = document.getElementsByTagName(entity)[0];
    var element = conductIteration(eip, output, entity, "find");
   // console.log(i,"element", element); i++
   return element;
    
}



function conductIteration(entity, output, input, sw, keytoFind ,itemLength, iteratorResponse) {
    sw = arguments.callee.name;
    console.log(i,sw, entity, getEntityType(entity), itemLength, entity.nodeType);i++
    if (entity) {
        if (getEntityType(entity).includes("HTML")) {
            console.log(i, "entity is ", getEntityType(entity)); i++;
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

function iterateArr(arr,output) { 

}

function iterateObj(obj, nodeOut, recurse,nextSw) {
    sw = arguments.callee.name;
    console.log(i, sw, entity, getEntityType(entity), entity.nodeType); i++;
    for (let key in obj) {
        if (obj[key]) {
           // nodeOut[key] = obj[key];
            //console.log(i, key, obj[key]); i++;
            if (obj.hasOwnProperty(key) || typeof obj[key] === 'object' || typeof obj[key] === 'function') {//In case we need to recurse
              //  console.log("obj found >>", key, obj[key], getEntityType(obj[key]), obj[key].nodeType,typeof obj[key]);
                //iterateEntity(obj, obj[key], nodeOut);
               nodeOut[key] = obj[key];
            } else {
                nodeOut[key] = obj[key];
              // console.log(i, key, obj[key]); i++;
            }
        }
    }
//  console.log(nodeOut);
    return nodeOut;
}

