console.log("hello world")

// ways to create objects

// method one: just create a javascript object

let circle = {
    radius: 1,
    sides: 0,
    color: "green",
    printInfo: function () {
        console.log("radius: " + this.radius + " | sides: " + this.sides)
    }
}

circle.printInfo()


// create a factory function which returns an object

function createSquares() {
    return {
        radius: 0,
        sides: 4,
        sideLength: 1,
        color: "red",
        printInfo: function () {
            console.log("color: " + this.color + " | radius: " + this.radius)
        }
    }
}

let square1 = createSquares()

square1.printInfo()


// create a constructor

class Triangle {
    constructor() {
        this.radius = 0
        this.sides = 3
        this.sideLength = 1
        this.printInfo = function () {
            console.log("radius: " + this.radius + " | sideLength: " + this.sideLength)

        }

    }
}

let triangle1 = new Triangle()

triangle1.printInfo()

// arrow functions


let Ellipse = (minor, major) => {
    this.minor = minor
    this.major = major
    this.printValues = () => {
        console.log("major: " + this.major + " | minor: " + this.minor)
    }
    this.printValues()
}

Ellipse(4, 3)

// using class key word

class Star {

    constructor(numEdges) {
        this.numEdges = numEdges
    }


    printWithArrows() {
        setTimeout(() => {
            console.log(this.numEdges)
        }, 100)
    }

    printWithFunction() {
        setTimeout(function () {
            console.log(this.numEdges)
        }, 100)
    }
}