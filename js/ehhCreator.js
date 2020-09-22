//https://taniarascia.github.io/primitive/#typography
//Creates an element and passes to Append
var ehh = {};

//should be able to create. HTML, Canvas,Iframe,Css,Js and everyother type of Element
function createElement(e,elName, parent,defaultCss) {
    const nwEle = document.createElement(elName);
    nwEle.id = elName + eId; eId++;
    nwEle.className = "editable";
    nwEle.style.height = '100%';
    nwEle.style.width = '100%';
    nwEle.style.position ='absolute';
    nwEle.style.border = '10px solid rgba(122, 122, 122, 0.288)';
    appendElement(e, nwEle, parent);  
}

function appendElement(e, nwEle, parent, defaultSize) {
    //console.log(parent); 
    parent.appendChild(nwEle);
    // nwEle.setAttribute("contentEditable", "true");
    // const parentBox = parent.getBoundingClientRect();
    // startX = e.clientX;
    // startY = e.clientY;
    // nwEle.style.left = startX + "px"; // ["- parentBox.left", removed]
    // nwEle.style.top = startY + "px"; // ["- parentBox.top", removed]
    // const newElementBox = nwEle.getBoundingClientRect();
    // console.log("newElement Position", newElementBox.left, newElementBox.top);
  //  resize(e, nwEle, startX, startY);
}

function resize(mm, newElement, startX, startY) {
 //   console.log(newElement);
    var mouseOn = mm.target.tagName;

    if (newElement.className === "resizeable") {
        console.log("resize triggerd");
        //console.log("new element recived", newElement);//   

        var mm = window.addEventListener("mousemove", onmouseMove);  // 

        function onmouseMove(mm) {

            console.log("mouseon", mouseOn)
            var mX = mm.pageX;
            var mY = mm.pageY;
            var r = newElement.getBoundingClientRect();
            console.log(r);
            newElement.style.width = mX - r.left + "px";
            newElement.style.height = mY - r.top + "px";
            console.log(r.left, r.top, mX, mY);

            window.addEventListener("mouseup", onMouseup);

            function onMouseup() {

                window.removeEventListener("mousemove", onmouseMove);
                // console.log("listeners removed")
                window.removeEventListener("mouseup", onMouseup);
                return;
            }
        }

    }
}
