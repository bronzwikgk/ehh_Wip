//string, number, bigint, boolean, symbol, null and undefined
window.onload = OnLoad();
console.log("uo",window.navigator);
function OnLoad(e) {
    //window storage == session storage
    console.log("ehh is running! on >>>", window.document.title, window.document.location.origin);
    var listeners = createListeners(this);
    onhashchange();
    handleHashChange();
}

window.onloadeddata = handleHashChange;
function handleHashChange(e) {
    console.log(e.location);

}


window.addEventListener("hashchange", onhashchange);

function onhashchange() { 
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
            console.log("fragmentStringaa", fragmentString);
        }
    }


}

// Returns the token from the URL hash
function getToken() {
    //substring(1) to remove the '#'
    hash = parseParms(document.location.hash.substring(1));
    return hash.access_token;
}


// Parses the URL parameters and returns an object
function parseParms(str) {
    var pieces = str.split("&"), data = {}, i, parts;
    // process each query pair
    for (i = 0; i < pieces.length; i++) {
        parts = pieces[i].split("=");
        if (parts.length < 2) {
            parts.push("");
        }
        data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
    }
    return data;
}


function createListeners(entity) {
   console.log(entity);
    var events = find(entity, 'on');
  // console.log("events Found",events);
    var a = events.forEach(create);
   // console.log(a);
    save(events, this.constructor.name + "listeners");
    
    console.log("listernes created & Saved to local storagea at ", new Date().toLocaleString().replace(',', ''), this.constructor.name);

}

let event = {
    "origin": ["mouse", "window", "ehh", "HTTP", "keyBoard"],
}


function initState(e) {
    var nodes = [];
    //currentState = e.type;
    let i = 0;
    document.documentElement.querySelectorAll('*').forEach(function (node) {
        node.setAttribute("currentstate", "inDom"); node.setAttribute("prevstate", "intiated");
       
        if (!node.hasAttribute("ehhId")) { 
          //  console.log(i,i++,"ehhId",);
            node.setAttribute("ehhId", "ehhId" + i); i++;

        }

    });
    
}

function changeState(e) {
    //console.log("changing state for event");
    var targetElement = e.target;
   // console.log(targetElement);
    
    let currentState = targetElement.getAttribute('currentstate'); //console.log("current state", currentState);  //console.log("prev state",prevState);
    let prevState = targetElement.getAttribute('prevstate'); 
       if (prevState === currentState) {
        targetElement.setAttribute('currentstate', e.type); //console.log(prevState);
       // console.log("New State",targetElement);
        //console.log("samestate",targetElement);
    }else{
        targetElement.setAttribute('prevstate', currentState); //console.log(prevState);
        targetElement.setAttribute('currentstate', e.type); //console.log(prevState);
       // console.log("New State",targetElement);
    }
conductEvent(e);
    //console.log(targetElement.getAttributes(prevstate));

}

function conductEvent(e) {
    if (e.type === "mouseover") {
        mouseOver(e);
        // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
    } else
    if (e.type === "click") {
        // console.log(e.constructor.name, e.type, "captured", e.target.constructor.name);
        click(e);
         // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
     } else {
        if (e.type === "contextmenu") {
            // console.log(e.constructor.name, e.type, "captured", e.target.constructor.name);
             //createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
             e.preventDefault();
            // rightClick(e);    
         } 
     }
}

//this function acts like a event conductor, read it's event command mapp from a json file, which mapps 
//Ignore Events from Json to be implemented
//https://github.com/philipwalton/router/blob/master/index.js


function onEvent(e) {
   // console.log(e.constructor.name, e.type, "captured", e.target.tagName);
    if (e.type === "pageshow") {
        //console.log(e.constructor.name, e.type, "captured", e.target.tagName);
       initState(e);
        // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
    } if (e.constructor.name === "MouseEvent") {
        //console.log(e.constructor.name, e.type, "captured", e.target.tagName);
        changeState(e);
        // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
    }
}

function create(entity) {
    window[entity] = onEvent;
}

function rightClick(event) { 

   
    var contextElement = document.querySelector("ehhContextMenu");
    //var contextElement = component.getElementById("ehhContextMenu");
    
    console.log(contextElement);
    contextElement.style.top = event.clientY + "px";
    contextElement.style.left = event.clientX + "px";
    contextElement.style.display = 'block';


}



// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
//     });
// }


//https://www.w3schools.com/howto/howto_js_collapsible.asp
function click(e) { 
    var targetElement = e.target;
    console.log(getEntityType(targetElement));
    console.log(targetElement);
    if (targetElement.classList.contains("toggle")) {
        console.log("toggle");
        targetElement.classList.toggle("active");
        var panel = targetElement.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
     }


    // var contextElement = document.getElementById("ehhContextMenu");  
    // if(contextElement.hasAttribute("currentState")){
    //     //console.log("clickedOn",targetElement);  
    //     contextElement.style.display = 'none';

    // } if (getEntityType(targetElement).includes("Element") && targetElement!= contextElement) { 
    //    // console.log("foundclick", targetElement);
    //     var output = {};
    //     var outputType = "html";
    //     var entity2Process = "cssRules";
    //     var entity2Find = "style";
    //     var values = "active";
    //     var request = "processEntity";
    //     let itemLength=parseInt(0);
    //     processEntity(targetElement, entity2Process, entity2Find,values,output,outputType,request,"click",itemLength);             
    // }
}




function mouseOver(e) {
    // console.log(e.constructor.name, e.type, "captured", e.target.constructor.name);
    
    // var targetElement = e.target;
    // console.log("foundclick", targetElement)
    // var contextElement = document.getElementById("context-menu");
    // if (contextElement.hasAttribute("currentState")) {
    //     //console.log("clickedOn",targetElement);  
    //     contextElement.style.display = 'none';

    // }

    
}





