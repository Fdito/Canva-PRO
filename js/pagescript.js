window.onload = init()

function init() {
    console.log('canvi has started working')
    chrome.storage.local.get("elementschecked", (data) => {
        let areelements = data.elementschecked
        if(areelements === true){
            setInterval(() => {
                if (document.querySelector('div[aria-label="Agrega este recurso al editor"]')) {
                    setInterval(() => {
                        for (let elements = 0; elements < 50; elements++) {
                            if (document.querySelector('div[aria-label="Agrega este recurso al editor"]')) {
                                document.querySelector('div[aria-label="Agrega este recurso al editor"]').remove();
                            }
                        }
                    }, 10);
                }
            }, 10);
        } else {
            return false
        }
    })
    chrome.storage.local.get("pictureschecked", (data) => {
        let arepictures = data.pictureschecked
        if(arepictures === true){
            setInterval(() => {
                if (document.querySelector('div[aria-label="Agrega esta foto al editor"]')) {
                    setInterval(() => {
                        for (let elements = 0; elements < 50; elements++) {
                            if (document.querySelector('div[aria-label="Agrega esta foto al editor"]')) {
                                document.querySelector('div[aria-label="Agrega esta foto al editor"]').remove();
                            }
                        }
                    }, 10);
                }
            }, 10);
        } else {
            return false
        }
    })
}