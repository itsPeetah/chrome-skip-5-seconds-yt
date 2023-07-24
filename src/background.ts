import { findAndClickSkipButton } from "./skip-ads";

// function that injects code to a specific tab
function injectScript(tabId: number) {

    chrome.scripting.executeScript(
        {
            target: { tabId: tabId },
            files: ['injectButton.js'],
        }
    );

}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id || -1 },
        func: findAndClickSkipButton,
    });
});

// adds a listener to tab change
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // check for a URL in the changeInfo parameter (url is only added when it is changed)
    if (changeInfo.url) {
        console.log("Url has changed: injecting script")
        injectScript(tabId);
    }
});
