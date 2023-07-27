import { CONTAINER_SELECTOR, SKIP_BUTTON_ID } from "./constants"
import { buildSkipButton, findContainer } from "./elements"
import { appendChild, waitForElem } from "./utils"

(function () {

    console.log("[S5S] Running content script...")

    const process = () => {
        if (!location.pathname.startsWith('/watch')) {
            console.log("[S5S] Skipping non /watch page.")
            return;
        }

        waitForElem(CONTAINER_SELECTOR).then(() => {
            console.log("[S5S] Injecting skip button")
            const actionBar = findContainer()
            if (!actionBar) {
                console.log("Couldn't find action bar...")
                return
            }

            // const btnClones = findSkipButtonClones()
            // deleteElementsInNodeList(btnClones)
            const existing = document.getElementById(SKIP_BUTTON_ID)
            existing?.remove()

            const skipButton = buildSkipButton()
            appendChild(actionBar, skipButton)
        })
    }

    document.addEventListener('yt-navigate-finish', () => {
        console.log("YouTube Navigation Finished")
        process()
    });

    // if (document.body) process();
    // else document.addEventListener('DOMContentLoaded', process);
})()
