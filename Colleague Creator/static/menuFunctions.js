import { createNavigation } from "/static/main.js";
import { navigationData } from "/static/data.js";

export function howCreateColleague() {
    createNavigation(navigationData["Jak vytvořit postavu?"], "#items");
}

export function settings() {
    console.log("2");
}

export function extras() {
    console.log("3");
}

export function leaveThisWebsite() {
    console.log("4");
}

export function generateColleague() {
    console.log("4");
}

export function letsCreateMyOwn() {
    console.log("4");
}

export function mainMenu() {
    createNavigation(navigationData["Hlavní menu"], "#items")
}