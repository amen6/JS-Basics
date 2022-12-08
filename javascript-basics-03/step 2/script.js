const aTags = document.querySelectorAll("a")
const p = document.querySelector("p")

aTags.forEach((e)=> {
    e.addEventListener("click", (e)=> {
        if(e.target.id == "hide") {
            p.style = `display: none`
        } else {
            p.style = `display: block`
        }
    })
})