/* 8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
.filter() y usa .reduce() para conseguir la media de sus .score. 
La función .find() también podría ayudarte para el contrar el genero 'RPG' en el array .gender. */

const videogames = [
  { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
  { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
  { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
  { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
  { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
  { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 }
]
const videoRPG = videogames.filter((videogame) =>
  videogame.genders.includes('RPG')
)
const sumaPuntajesRPG = videoRPG.reduce(
  (acumulador, videojuego) => acumulador + videojuego.score,
  0
)
const mediaPuntajesRPG = sumaPuntajesRPG / videoRPG.length

const totalScore = videogames.reduce(
  (accumulator, currentVideogame) => accumulator + currentVideogame.score,
  0
)
const media = totalScore / videogames.length

console.log(
  'Los juegos RPG son:',
  videoRPG,
  'La media total es:',
  media,
  'la media de los RPG es de:',
  mediaPuntajesRPG
)
