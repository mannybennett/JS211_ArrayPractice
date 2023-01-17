let cars = ['Ford', 'Nissan', 'Toyota', 'Dodge']
console.log(cars.length)

let moreCars = ['Chevy', 'Kia', 'Tesla', 'Honda']
let totalCars = cars.concat(moreCars)
console.log(totalCars)
console.log(totalCars.indexOf('Honda'))
console.log(totalCars.lastIndexOf('Ford'))

let stringOfCars = totalCars.join(', ')
console.log(stringOfCars)

let carsFromString = stringOfCars.split(',')
console.log(carsFromString)

let carsInReverse = totalCars.reverse()
console.log(carsInReverse)

let sortedCars = carsInReverse.sort()
console.log(sortedCars)

let pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
let reptiles = pets.slice(4, 6)
console.log(pets)
console.log(reptiles)

let removedReptiles = pets.splice(4, 2, 'hamster')
console.log(pets)
console.log(removedReptiles)

let removedPet = pets.pop()
console.log(pets)
console.log(removedPet)

pets.push(removedPet)
console.log(pets)

console.log(pets.shift())

pets.unshift('turtle')
console.log(pets)

let numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
const addTwo = (num, index, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            return arr[i] = num + 2;
        }
    }
}
numbers.forEach(addTwo)
console.log(numbers)