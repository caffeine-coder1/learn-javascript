// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// initialize the count as 0
let count = 0;
// listen for clicks on the increment button

function increase_count(){
    let counter = document.getElementById("count-el");
    let num = 0
    num += Number(counter.innerText) + 1;
    counter.innerText = num
}
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count




