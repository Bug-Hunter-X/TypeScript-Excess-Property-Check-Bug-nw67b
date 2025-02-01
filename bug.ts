function printCoordinates(point: { x: number; y: number; }) {
  console.log(`The coordinates are (${point.x}, ${point.y})`)
}

const point = { x: 10, y: 20, z: 30 };
printCoordinates(point); // This will cause a compile time error because the argument provided contains an extra property 'z'