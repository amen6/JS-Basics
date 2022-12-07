const div = document.createElement("div")
document.querySelector("body").appendChild(div).setAttribute("id", "other_div")
const otherDiv = document.querySelector("#other_div")


const nameInput = document.querySelector("#name")

nameInput.addEventListener("keyup", (e)=> {
    otherDiv.innerText = nameInput.value;
})