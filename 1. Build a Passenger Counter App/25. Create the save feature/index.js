// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    countEl.innerText = Number(countEl.innerText) + 1
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let save_string = countEl.innerText + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += save_string
    countEl.innerText = 0
    // NB: Make sure to not delete the existing content of the paragraph
}