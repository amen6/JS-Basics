const nameInput = document.querySelector("#name")
const surnameInput = document.querySelector("#surname")
const cityInput = document.querySelector("#city")
const button = document.querySelector("button")

button.addEventListener("click", ()=> {
    let answer = confirm("Do you want to clear all?")
    if (answer == true) {
        nameInput.value = surnameInput.value = cityInput.value = "";
    }
})

