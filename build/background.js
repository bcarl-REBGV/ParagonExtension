"use strict";
chrome.browserAction.setPopup({ popup: '' }); //disable browserAction's popup
chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.create({ url: 'public/options.html' });
});
