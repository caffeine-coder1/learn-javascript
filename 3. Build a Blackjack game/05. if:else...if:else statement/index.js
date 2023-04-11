// Check if the person is eligible for a birthday card from the King! (100)

let age = Math.round(Math.random() * 130)

// if less than 100    -> "Not eligible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not eligible, you have already gotten one"

if (age < 100) {
    console.log("age: "+ age +  " : " + "Not eligible")
}

else if (age === 100) {
    console.log("age: " + age + " : " + "Here is your birthday card from the King!")

}

else {
    console.log("age: " + age + " : " + "Not eligible, you have already gotten one")
}