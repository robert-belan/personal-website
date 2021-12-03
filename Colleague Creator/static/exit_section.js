import { showElement, fadeElement } from "/static/helpers.js";


// TODO: JSDoc
export function exit() {
    fadeElement(document.body);
    setTimeout(() => {
        document.body.insertAdjacentHTML("beforeend", `
        <div class="goodbye"><p>Díky za Váš čas.</p></div>`);
        showElement(document.body);
        setTimeout(() => {
            fadeElement(document.body);
            setTimeout(() => {
                window.location.assign("https://google.com");
            }, 400);
        }, 1500);
    }, 500);
}