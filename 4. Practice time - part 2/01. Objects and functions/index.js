// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person1 = {
    name: "karthik",
    age: 27,
    country: "india"
}

let person2 = {
    name: "Shree",
    age: 28,
    country: "USA"
}

function logData(person){

    let out = (person.name + " is " + person.age + " years old"
    + " and lives in " + person.country)
    console.log(out)
}

logData(person1)
logData(person2)