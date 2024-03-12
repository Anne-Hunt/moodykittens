// #region VARIABLES
let kittens = []
let kitten = {}

let kittenCoat = ["none", "short", "long"]
let kittenBreed = ["orange", "void", "Scottish Fold", "Maine Coon", "calico", "tiger", "white"]
let kittenAge = ["baby", "young", "adult", "senior", "should be dead"]
let kittenTemperament = ["hides from humans", "destroys everything", "bites people for fun", "lapcat", "bossy", "feral", "under foot", "evil mastermind"]
let kittenSize = ["tiny", "small", "average", "large", "enormous", "chonker"]
let kittenTrained = ["uses litterbox", "free thinker"]
let kittenMood = ["gone", "eats his feelings", "depressed", "angry", "tolerant", "okay", "happy", "Jack on the Titanic", "overjoyed", "ecstatic", "manic", "danger to himself and others"]

// #endregion VARIABLES

// #region BUTTONS
let adoptionForm = document.getElementById("adoptionForm")
let kittenNameInput = document.getElementById("kitten-name")
let adoptionButton = document.getElementById("adoption-button")
let clearButton = document.getElementById("clear-kittens")
let deleteButton = document.getElementsByClassName("delete-kittens")
let catnipButton = document.getElementsByClassName("catnip")
let waterButton = document.getElementsByClassName("water-bottle")
let petButton = document.getElementsByClassName("pet-kitten")

adoptionButton.addEventListener('submit', addKitten)
clearButton.addEventListener('click', clearKittens)
deleteButton.addEventListener('click', deleteKitten)
catnipButton.addEventListener('click', catnip)
waterButton.addEventListener('click', waterBottle)
petButton.addEventListener('click', petKitten)
// #endregion BUTTONS

loadKittens()
drawKittens()

/**
 * 
 * Called when submitting the new Kitten Form
 * This method will pull data from the form
 * use the provided function to give the data an id
 * then add that data to the kittens list.
 * Then reset the form
 */
function addKitten(event) {
  event.preventDefault()

  let form = event.target
  form.kittenName.value
  console.log(form.kittenName.value)

  let kittenName = (form.kittenName.value)
  let kittenId = generateId()
  let moodKitten = setKittenMood()
  let coatCat = kittenCoat[(Math.floor(Math.random() * kittenCoat.length))]
  let breedCat = kittenBreed[(Math.floor(Math.random() * kittenBreed.length))]
  let ageCat = kittenAge[(Math.floor(Math.random() * kittenAge.length))]
  let temperamentCat = kittenTemperament[(Math.floor(Math.random() * kittenTemperament.length))]
  let sizeCat = kittenSize[(Math.floor(Math.random() * kittenSize.length))]
  let trainedCat = kittenTrained[(Math.floor(Math.random() * kittenTrained.length))]
  let catFeels = kittenMood[Math.floor(moodKitten)]
  let kittenAffection = Math.random()


  let kitten = {
    name: kittenName,
    license: kittenId,
    mood: moodKitten,
    feels: catFeels,
    coat: coatCat,
    breed: breedCat,
    age: ageCat,
    temperament: temperamentCat,
    size: sizeCat,
    trained: trainedCat,
    affection: kittenAffection
  }
  kittens.push(kitten)

  saveKittens()
  form.reset()
};

/**
 * Converts the kittens array to a JSON string then
 * Saves the string to localstorage at the key kittens 
*/
function saveKittens() {
  window.localStorage.setItem("kittens", JSON.stringify(kittens))

  drawKittens()
}

/**
 * Attempts to retrieve the kittens string from localstorage
 * then parses the JSON string into an array. Finally sets
 * the kittens array to the retrieved array
*/
function loadKittens() {
  let kittensData = JSON.parse(window.localStorage.getItem("kittens"))

  if (kittensData) {
    kittens = kittensData
  }
}

/**
 * Draw all of the kittens to the kittens element
*/
function drawKittens() {
  let kittenHouse = document.getElementById("kittenHouse")
  let catHouseTemplate = ""
  kittens.forEach(kitten => {
    catHouseTemplate += `
      <div id="${kitten.license}" class="itFits p-1 m-2">
        <div id="catHouse">
          <i class="fa-solid fa-cat m-1"></i>Name: ${kitten.name}</div> 
      <div id="license-number" >License #
        <i class="fa-solid fa-tag m-1"></i>${kitten.license}</div>
      <div ><img src="cat.png" alt="catimage" class="kitten ${kitten.feels}"></div>
      <div id="moodDiv">Mood:
      <span id="${kitten.id}">${kitten.mood}</span> 
      <span id="${kitten.name}">${kitten.feels}</span></div>
      <div class="d-flex align-items-center space-around m-1">
      <button class="catnip" onclick="catnip(${kitten.id})"><i class="fa-solid fa-cannabis nip"></i> Catnip</button>
      <button class="pet-kitten" onclick="petKitten(${kitten.id})"><i class="fa-solid fa-hand-holding-heart pet"></i>Pet</button>
      <button class="water-bottle" onclick="waterBottle(${kitten.id})"><i class="fa-solid fa-spray-can-sparkles agua"></i></i> Spray Water</button>
      </div>
      <div>Coat: ${kitten.coat}</div>
      <div>Breed: ${kitten.breed}</div>
      <div>Age: ${kitten.age}</div>
      <div>Temperament: ${kitten.temperament}</div>
      <div>Size: ${kitten.size}</div>
      <div>House Trained: ${kitten.trained}</div>
      <button class="delete-kittens bg-dark m-1" onclick="deleteKittens('${kitten.id}')">
      <i class="fa-solid fa-skull"></i>
      <span class="m-1">86 Kitten</span></button>
      </div>
      `
  })
  kittenHouse.innerHTML = catHouseTemplate
}

/**
 * Find the kitten in the array by its id
 * @param {string} id 
 * @return {Kitten}
 */
function findKittenById(id) {

}

function generateId() {
  return Math.floor(Math.random() * 10000000) + "-" + Math.floor(Math.random() * 10000000)
}

/**
 * Find the kitten in the array of kittens
 * Generate a random Number
 * if the number is greater than .5 
 * increase the kittens affection
 * otherwise decrease the affection
 * @param {string} id 
 */
function petKitten(id) {
  let petValue = Math.random()
  kittens[id].mood += petValue
  let name = kittens[id].name
  let numero = Math.floor(kittens[id].mood)
  let catFeelings = kittenMood[numero]

  document.getElementById(id).innerHTML = Math.floor(kittens[id].mood)
  document.getElementById(name).innerHTML = catFeelings

  saveKittens()
}

function waterBottle(id) {
  let waterBottleValue = Math.random()
  kittens[id].mood -= waterBottleValue
  let name = kittens[id].name
  let numero = Math.floor(kittens[id].mood)
  let catFeelings = kittenMood[numero]

  document.getElementById(id).innerHTML = Math.floor(kittens[id].mood)
  document.getElementById(name).innerHTML = catFeelings

  saveKittens()
}


/**
 * Find the kitten in the array of kittens
 * Set the kitten's mood to tolerant
 * Set the kitten's affection to 5
 * @param {string} id
 */
function catnip(id) {
  let catnipValue = Math.random()
  kittens[id].mood += catnipValue
  let name = kittens[id].name
  let numero = Math.floor(kittens[id].mood)
  let catFeelings = kittenMood[numero]

  document.getElementById(id).innerHTML = Math.floor(kittens[id].mood)
  document.getElementById(name).innerHTML = catFeelings

  saveKittens()
}

/**
 * Sets the kittens mood based on its affection
 * @param {Kitten} kitten 
 */
function setKittenMood() {
  return Math.floor(Math.random() * 5)
}

/**
 * Removes all of the kittens from the array
 * remember to save this change
 */
function clearKittens() {
  window.localStorage.clear()

  kittens.forEach(
    () => {
      (kittenHouse.innerHTML -= `
        <div id="itFits" class="p-1">
        </div>
      `)

    })
  document.getElementById("kittenHouse").innerHTML = ""
  loadKittens()
}

/**
 * Removes the welcome content and should probably draw the 
 * list of kittens to the page. Good Luck
*/
function deleteKitten(kittenId) {
  let kittenIndex = kittens.findIndex(kitten => kitten.id == kittenId)
  if (kittenIndex == -1) {
    throw new Error("Bad Kitten Id")
  }
  kittens.splice(kittenIndex, 1);

  saveKittens()
}

// --------------------------------------------- No Changes below this line are needed

/**
 * Defines the Properties of a Kitten
 * @typedef {{id:string, name: string, mood: string, affection: number}} Kitten
 */


/**
 * Used to generate a random string id for mocked
 * database generated Id
 * @returns {string}
*/
loadKittens()
drawKittens()