
function searchInput() { 




}


function setAttr() {
    var value = document.getElementById('searchBar').value;
    if (value.length >= 1) {
        if (value.includes(".com", ".in", ".gmail", ".org")) {
            // For iframe and embrd tag
            document.getElementById('loader').setAttribute("src", "https://" + value)
        }
        else {
            document.getElementById('loader').setAttribute("src", "https://www.google.com/search?q=" + value)
        }
        // For object tag
        // document.getElementById('loader').setAttribute("data", "https://www.google.com/search?q=" + value)
    }
}

(function (open) {
    XMLHttpRequest.prototype.open = function (m, u, a, us, p) {
        this.addEventListener('readystatechange', function () {
            console.log(this.response);
        }, false);

        open.call(this, m, u, a, us, p);
    };
})(XMLHttpRequest.prototype.open)