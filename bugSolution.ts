function printCoordinates(point: { x: number; y: number; }) {
  console.log(`The coordinates are (${point.x}, ${point.y})`)
}

const point = { x: 10, y: 20, z: 30 };

// Solution 1: Type Assertion (Use with caution!)
printCoordinates(point as { x: number; y: number; });

//Solution 2: Using Type Guards
function isPoint(obj: any): obj is { x: number; y: number; } {
  return obj && typeof obj.x === 'number' && typeof obj.y === 'number';
}

if (isPoint(point)) {
  printCoordinates(point);
} else {
  console.error('Invalid point object');
}