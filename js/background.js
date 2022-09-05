chrome.runtime.onInstalled.addListener(async () => {
    let pictureschecked = true
    let elementschecked = true
    chrome.storage.local.set({ pictureschecked }, function () {
    });
    chrome.storage.local.set({ elementschecked }, function () {
    });

});