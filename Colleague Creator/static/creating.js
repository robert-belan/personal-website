// import {getFetch} from "/static/main.js";

console.log("module imported");

const appearanceButton = document.querySelector("#appearance");

appearanceButton.addEventListener("click", (event) => {
    getFetch("/appearance", document.querySelector("#text-container"));
})