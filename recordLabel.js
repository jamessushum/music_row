// Funk and rap artists
const jumpStopRecords = []
// Country and bluegrass artists
const chattenRecords = []
// Pop artists
const polarRecords = []

// Factory functions
const createFunkArtist = (firstName, lastName, genre, age) => {
  return {
    firstName,
    lastName,
    genre,
    age
  }
}

const createRapArtist = (firstName, lastName, genre, age) => {
  return {
    firstName,
    lastName,
    genre,
    age
  }
}

const createCountryArtist = (firstName, lastName, genre, age) => {
  return {
    firstName,
    lastName,
    genre,
    age
  }
}

const createBluegrassArtist = (firstName, lastName, genre, age) => {
  return {
    firstName,
    lastName,
    genre,
    age
  }
}

const createPopArtist = (firstName, lastName, genre, age) => {
  return {
    firstName,
    lastName,
    genre,
    age
  }
}

// Artists
const bruce = createCountryArtist("Bruce", "Atikins", "Country", 23)
chattenRecords.push(bruce)

const jensen = createPopArtist("Jensen", "Brown", "Pop", 20)
polarRecords.push(jensen)

const dre = createFunkArtist("Dre", "Funkz", "Funk", 25)
jumpStopRecords.push(dre)

const dusta = createRapArtist("Dusta", "Grimes", "Rap", 21)
jumpStopRecords.push(dusta)

const bart = createBluegrassArtist("Bartholomew", "Danielson", "Bluegrass", 23)
chattenRecords.push(bart)

const avilee = createCountryArtist("Avilee", "Dallas", "Country", 19)
chattenRecords.push(avilee)

const austin = createPopArtist("Austin", "Kinkaid", "Pop", 22)
polarRecords.push(austin)

const loyonce = createRapArtist("Loyonce", "Branis", "Rap", 27)
jumpStopRecords.push(loyonce)

// Checking the arrays
console.log("JumpStop Records New Artists:", jumpStopRecords)
console.log("Chatten Records New Artists:", chattenRecords)
console.log("Polar Records New Artists:", polarRecords)