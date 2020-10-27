
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

// (function (open) {
//     XMLHttpRequest.prototype.open = function (m, u, a, us, p) {
//         this.addEventListener('readystatechange', function () {
//             console.log(this.response);
//         }, false);

//         open.call(this, m, u, a, us, p);
//     };
// })(XMLHttpRequest.prototype.open)

var chosenEntry = null;
var chooseFileButton = document.querySelector('#choose_file');
var chooseDirButton = document.querySelector('#choose_dir');
var saveFileButton = document.querySelector('#save_file');
var output = document.querySelector('output');
var textarea = document.querySelector('textarea');

chooseFileButton.addEventListener('click', function(e) {
    var accepts = [{
      mimeTypes: ['text/*'],
      extensions: ['js', 'css', 'txt', 'html', 'xml', 'tsv', 'csv', 'rtf']
    }];


    
    chrome.fileSystem.chooseEntry({type: 'openFile', accepts: accepts}, function(theEntry) {
      if (!theEntry) {
        output.textContent = 'No file selected.';
        return;
      }
      // use local storage to retain access to this file
      chrome.storage.local.set({'chosenFile': chrome.fileSystem.retainEntry(theEntry)});
      loadFileEntry(theEntry);
    });
  });
  
