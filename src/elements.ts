import { CONTAINER_SELECTOR, SKIP_BUTTON_CLASS, SKIP_BUTTON_ID, SKIP_BUTTON_TEXT } from "./constants"
import { findAndClickSkipButton } from "./skip-ads"

export function findContainer() {
    const container = document.querySelector(CONTAINER_SELECTOR)
    return container as HTMLDivElement
}

export function buildSkipButton() {
    const btn = document.createElement("button")
    btn.id = SKIP_BUTTON_ID
    btn.className = SKIP_BUTTON_CLASS
    btn.innerText = SKIP_BUTTON_TEXT
    btn.addEventListener("click", findAndClickSkipButton)
    return btn
}

export function findSkipButtonClones() {
    const btns = document.querySelectorAll("#" + SKIP_BUTTON_ID)
    return btns
}

export function deleteElementsInNodeList(nodeList: NodeListOf<Element>) {
    nodeList.forEach((elem) => {
        elem.remove()
    })
}
