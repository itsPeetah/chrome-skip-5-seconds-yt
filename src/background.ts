import { findAndClickSkipButton } from "./skip-ads";

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id || -1 },
        func: findAndClickSkipButton,
    });
});
