const validateButton = document.querySelector("#validate");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const cityInput = document.querySelector("#city");

alert("Please enter your informations.")

validateButton.addEventListener("click", (e)=>{
    e.preventDefault();
    let name = nameInput.value;
    let surname = surnameInput.value;
    let city = cityInput.value;
    alert ("Name: " + name + "\nSurname: " + surname + "\nCity: " + city);
    nameInput.value = surnameInput.value = cityInput.value = "";
})
