// provides data for appearance section
import { fadeInFadeOut, unavailableItemMessage } from "/static/helpers.js";

export function appearance() {
    fadeInFadeOut(createAppearanceTable, document.querySelector("#text"))
}

function createAppearanceTable() {

    const html = `
        <table id="appearance-table" class="appearance-table">
            <tbody></tbody>
        </table>`;
    document.querySelector("#text").insertAdjacentHTML("beforeend", html);

    // generates table rows
    appearanceData.forEach(row => {
        document.querySelector("#appearance-table > tbody").insertAdjacentHTML("beforeend", `
            <tr>
                <td class="prop-col">${row.prop}</td>
                <td class="arrow-col">&#10229;</td>
                <td class="option-col">${row.option}</td>
                <td class="arrow-col">&#10230;</td>
            <tr>`);
    });

    /* After click on buttons with arrow, it tells you that you can not use it */
    document.querySelectorAll(".arrow-col").forEach(item => {
        item.addEventListener("click", unavailableItemMessage)
    })
}

/**
 * @type { {prop: string, option: string} } appearanceData
 */
const appearanceData = [
    {
        prop: "Portrét",
        option: "Obrázek"
    },
    {
        prop: "Druh",
        option: "člověk"
    },
    {
        prop: "Pohlaví",
        option: "muž"
    },
    {
        prop: "Základ vzhledu",
        option: "udržovaný"
    },
    {
        prop: "Zdánlivý věk",
        option: "29"
    },
    {
        prop: "Kondice",
        option: "chabá"
    },
    {
        prop: "Výška",
        option: "vyšší"
    },
    {
        prop: "Hlava",
        option: "č. 22"
    },
    {
        prop: "Hlas",
        option: "mužský"
    },
    {
        prop: "Držení těla",
        option: "asertivní"
    },
    {
        prop: "Styl oblečení",
        option: "neformální"
    },
]