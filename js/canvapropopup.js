window.onload = setup()
window.addEventListener('DOMContentLoaded', (event) => {
    start()
});
let elementschecked
let pictureschecked
function setup() {
    chrome.storage.local.get("elementschecked", (data) => {
        let areelements = data.elementschecked
        if(areelements === true){
            document.getElementById('elements').checked = true
        } else {
            document.getElementById('elements').checked = false

        }
    })
    chrome.storage.local.get("pictureschecked", (data) => {
        let arepictures = data.pictureschecked
        if(arepictures === true){
            document.getElementById('pictures').checked = true
        } else {
            document.getElementById('pictures').checked = false
        }
    })
}

function start() {
    document.getElementById('elements').addEventListener('change', function () {
        if (this.checked) {
            elementschecked = true
            chrome.storage.local.set({ elementschecked }, function () {
            });
        } else {
            elementschecked = false
            chrome.storage.local.set({ elementschecked }, function () {
            });

        }
    }
    )
    document.getElementById('pictures').addEventListener('change', function () {
        if (this.checked) {
            pictureschecked = true
            chrome.storage.local.set({ pictureschecked }, function () {
            });
        } else {
            pictureschecked = false
            chrome.storage.local.set({ pictureschecked }, function () {
            });
        }
    }
    )
}