import { BindableNumber } from "./bindable.js";
import { ꓭ } from "./formula.js";

// declare variables
var cInput = document.getElementById("c") as HTMLInputElement;
var cLabel = document.getElementById("c-label") as HTMLParagraphElement;
var ɔInput = document.getElementById("ɔ") as HTMLInputElement;
var ɔLabel = document.getElementById("ɔ-label") as HTMLParagraphElement;
var result = document.getElementById("result") as HTMLParagraphElement;
var c: BindableNumber = new BindableNumber(0);
var ɔ: BindableNumber = new BindableNumber(0);
var solvableMessage: string = "The cube is <b class='highlight'>solvable</b>.";
var unsolvableMessage: string =
    "<b class='highlight'>Imposible</b> to solve unless you corner twist.";

// invoke if c changes
function update_c(c: number) {
    cInput.value = String(c);
    cLabel.innerHTML = String(c);
    result.innerHTML = ꓭ(c, ɔ.value) ? solvableMessage : unsolvableMessage;
}

// invoke if ɔ changes
function update_ɔ(ɔ: number) {
    ɔInput.value = String(ɔ);
    ɔLabel.innerHTML = String(ɔ);
    result.innerHTML = ꓭ(c.value, ɔ) ? solvableMessage : unsolvableMessage;
}

cInput.addEventListener("input", (e) => {
    var target = e.target as HTMLInputElement;
    c.value = +target.value;
});

ɔInput.addEventListener("input", (e) => {
    var target = e.target as HTMLInputElement;
    ɔ.value = +target.value;
});

c.setCallbackFunction(update_c, true);
ɔ.setCallbackFunction(update_ɔ, true);
