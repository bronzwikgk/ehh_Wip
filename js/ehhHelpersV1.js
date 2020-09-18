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



    
}