/* 3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43]
const pointsList2 = [...pointsList]
*/

/* 3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toy2 = { ...toy }
*/

/* 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operator.*/
const pointsList = [32, 54, 21, 64, 75, 43]
const pointsLis2 = [54, 87, 99, 65, 32]
const pointsList3 = [...pointsList, ...pointsLis2]

/*3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.*/
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }
const toy2 = { ...toy, ...toyUpdate }
console.log(toy2)

/*3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos. */

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
const [color1, color2, color3, color4, color5] = colors
const colors2 = [color1, color3, color4, color5]

const newColors = [
  ...colors.slice(0, 2), // Elementos antes de la posición 2
  ...colors.slice(3) // Elementos después de la posición 2
]

console.log(newColors, colors2, colors)
