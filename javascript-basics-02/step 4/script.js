const nameInput = document.querySelector("#name")
const surnameInput = document.querySelector("#surname")
const cityInput = document.querySelector("#city")
const button = document.querySelector("button")

button.addEventListener("click", ()=> {
    let answer = prompt("Do you want to clear all, please answer by 'yes/no'")
    if (answer == "yes") {
        nameInput.value = surnameInput.value = cityInput.value = "";
    }
})