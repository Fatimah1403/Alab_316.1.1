// function areBothEven(n1, n2) {
//    return !(n1 % 2) && !(n2 % 2);
// }

function computeArea(width, height) {
    const area = (width * height)
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`
}
const result = computeArea(10, 5);
console.log(result);

const planetHasWater = function(planet) {
    if (planet === "Earth" || planet === "Mars") {
        return (true);
    }
        return (false);
};
console.log(planetHasWater("Earth"));
console.log(planetHasWater("Mars"));
console.log(planetHasWater("Jupiter"));
console.log(planetHasWater("Uranus"));



