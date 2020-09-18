//helper Functions
{
    function hasChild(entity) {
        // console.log("iterating", entity, checkEntity(entity));//, entity.children.length
        if (entity.childNodes) {
            var entityChildList = entity.childNodes;
            //console.log("haschild",entityChildList);
        }

    }


    function splitArray(array, q) {
        var newArray = [];

        array.forEach(function (element, i) { //splitting parents
            newArray.push(parseInt(element[0]));
        });
        return newArray;
    }

    function containsFiles(event) {

        if (event.dataTransfer.types) {
            for (var i = 0; i < event.dataTransfer.types.length; i++) {
                if (event.dataTransfer.types[i] == "Files") {
                    return true;
                }
            }
        }

        return false;

    }

    /** 
     * Returns true if the given test value is an object; false otherwise.
     */
    function isObject_(test) {
        return Object.prototype.toString.call(test) === '[object Object]';
    }

    /** 
     * Returns true if the given test value is an array containing at least one object; false otherwise.
     */
    function isObjectArray_(test) {
        for (var i = 0; i < test.length; i++) {
            if (isObject_(test[i])) {
                return true;
            }
        }

        return false;
    }

    function getEntityType(entity) {
        return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
    }

    function isArray(o) {
        return o.length;
    }
    /**
     * * Checks that an HTMLelement has a non-empty `name` and `value` property.
     * @param  {Element} element  the element to check
    * @return {Bool}             true if the element is an input, false if not
    */
    const isValidElement = element => {
        return element.name && element.value;
    };


    function save(entity, keyTitle) {
        // console.log("saving", keyTitle, JSON.stringify(entity));
        window.localStorage.setItem(keyTitle, JSON.stringify(entity));
    }

function find(entity, keyTofind) {
      //  console.log("finding", keyTofind, "in", entity);
        var result = Object.keys(entity).filter(function (key, index, self) {
            return !key.indexOf(keyTofind);
        });
        return result;
 }


function FindInAn2DArray(Array, column, item) {
        for (var i = 0; i < Array.length; i++) {
            if (Array[i][column] == item)
                return i;
        }
        return -1;
    }


    function iterateObj(obj, nodeOut, recurse, nextSw) {
        if (!response) { var response = {}; }
        sw = arguments.callee.name;
        //  console.log(i, sw, obj, getEntityType(obj), obj.nodeType); i++;
        for (let key in obj) {
            if (obj[key]) {
                // response[key] = obj[key];
                //console.log(i, key, obj[key]); i++;
                if (obj.hasOwnProperty(key) || typeof obj[key] === 'object' || typeof obj[key] === 'function') {//In case we need to recurse
                    // console.log("obj found >>", key, obj[key], getEntityType(obj[key]), obj[key].nodeType,typeof obj[key]);
                    //iterateEntity(obj, obj[key], nodeOut);
                    response[key] = obj[key];
                } else {
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

    
}