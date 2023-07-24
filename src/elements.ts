import { SKIP_BUTTON_ID } from "./constants"
import { findAndClickSkipButton } from "./skip-ads"

export function findActionContainer() {
    const actions = document.getElementById("actions")
    return actions
}

export function buildSkipButton() {
    const btn = document.createElement("button")
    btn.id = SKIP_BUTTON_ID
    btn.innerText = "Skip Ad"
    btn.addEventListener("click", findAndClickSkipButton)
    return btn
}
