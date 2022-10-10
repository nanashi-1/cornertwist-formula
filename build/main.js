import { BindableNumber } from "./bindable.js";
import { ꓭ } from "./formula.js";
var cInput = document.getElementById("c");
var cLabel = document.getElementById("c-label");
var ɔInput = document.getElementById("ɔ");
var ɔLabel = document.getElementById("ɔ-label");
var result = document.getElementById("result");
var c = new BindableNumber(0);
var ɔ = new BindableNumber(0);
var solvableMessage = "The cube is solvable.";
var unsolvableMessage = "Impossible to solve unless you corner twist.";
function update_c(c) {
    cInput.value = String(c);
    cLabel.innerHTML = String(c);
    result.innerHTML = ꓭ(c, ɔ.value) ? solvableMessage : unsolvableMessage;
}
function update_ɔ(ɔ) {
    ɔInput.value = String(ɔ);
    ɔLabel.innerHTML = String(ɔ);
    result.innerHTML = ꓭ(c.value, ɔ) ? solvableMessage : unsolvableMessage;
}
cInput.addEventListener("input", function (e) {
    var target = e.target;
    c.value = +target.value;
});
ɔInput.addEventListener("input", function (e) {
    var target = e.target;
    ɔ.value = +target.value;
});
c.setCallbackFunction(update_c, true);
ɔ.setCallbackFunction(update_ɔ, true);
//# sourceMappingURL=main.js.map