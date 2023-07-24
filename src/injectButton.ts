import { buildSkipButton, findActionContainer } from "./elements"
import { appendChild, waitForElem } from "./utils"

function main() {
    console.log("Running main")
    waitForElem("#actions").then(() => {
        console.log("Injecting skip button")
        const actionBar = findActionContainer()
        if (!actionBar) {
            console.log("Couldn't find action bar...")
            return
        }
        console.log(actionBar)
        const skipButton = buildSkipButton()
        appendChild(actionBar, skipButton)
    })
}

main()