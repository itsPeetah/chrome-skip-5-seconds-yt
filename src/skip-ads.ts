export function findAndClickSkipButton() {
    const b = document.querySelector(".ytp-ad-skip-button.ytp-button");
    if (b) (b as HTMLButtonElement).click();
}
