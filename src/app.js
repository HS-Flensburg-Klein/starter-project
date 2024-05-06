import "./app.css"
import { simulateBlockingOperation } from "./tools.mjs";

const counter = document.querySelector("#counter")
const counterButton = document.querySelector("#counterButton")
let c = 0;

counterButton.addEventListener("click", () => {
    // Simulate a blocking operation for 5000 milliseconds (5 seconds)
    // simulateBlockingOperation(5000);
    counter.textContent = ++c;
})