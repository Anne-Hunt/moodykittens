// #region VARIABLES
let kittens = []
let existingCat = {}

let kittenCoat = ["none", "short", "long"]
let kittenBreed = ["orange", "void", "Scottish Fold", "Maine Coon", "calico", "tiger", "white"]
let kittenAge = ["baby", "young", "adult", "senior", "should be dead"]
let kittenTemperament = ["hides from humans", "destroys everything", "bites people for fun", "lapcat", "bossy", "feral", "under foot", "evil mastermind"]
let kittenSize = ["tiny", "small", "average", "large", "enormous", "chonker"]
let kittenTrained = ["uses litterbox", "free thinker"]
let kittenMood = ["runs away", "eats his feelings", "depressed", "angry", "upset", "okay", "happy", "Jack on the Titanic", "overjoyed", "ecstatic", "manic", "danger to himself and others"]

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
  let idKitten = generateId()
  let moodKitten = setKittenMood()
  let coatCat = kittenCoat[(Math.floor(Math.random() * kittenCoat.length))]
  let breedCat = kittenBreed[(Math.floor(Math.random() * kittenBreed.length))]
  let ageCat = kittenAge[(Math.floor(Math.random() * kittenAge.length))]
  let temperamentCat = kittenTemperament[(Math.floor(Math.random() * kittenTemperament.length))]
  let sizeCat = kittenSize[(Math.floor(Math.random() * kittenSize.length))]
  let trainedCat = kittenTrained[(Math.floor(Math.random() * kittenTrained.length))]
  let catFeels = kittenMood[Math.floor(moodKitten)]
  let catId = kittens.length
  let kittenAffection = Math.random()

  form.reset()

  existingCat = kittens.find(kitten => kitten.name == kittenName)

  if (!existingCat) {
    existingCat = { id: catId, name: kittenName, license: idKitten, mood: moodKitten, feels: catFeels, coat: coatCat, breed: breedCat, age: ageCat, temperament: temperamentCat, size: sizeCat, trained: trainedCat, affection: kittenAffection }
    kittens.push(existingCat)
    saveKittens()
  }
  saveKittens()
  loadKittens()
  updateKittenHouse()
};

function updateKittenHouse() {
  document.getElementById("kittenHouse").innerHTML = "";

  kittens.forEach(
    ({ id, license, name, mood, feels, coat, breed, age, temperament, size, trained, affection }) => {
      (document.getElementById("kittenHouse").innerHTML += `
        <div id="${license}" class="itFits p-1 m-2">
          <div id="catHouse"><i class="fa-solid fa-cat m-1"></i>Name: ${name}</div> 
          <div id="license-number" >License #<i class="fa-solid fa-tag m-1"></i>${license}</div>
          <div ><img src="moody-logo.png" alt="catimage" class="kitten"></div>
          <div id="moodDiv">Mood:<span id="${id}">${mood}</span> <span id="${name}">${feels}</span></div>
            <div class="d-flex align-items-center space-around m-1">
            <button class="catnip" onclick="catnip(${id})"><i class="fa-solid fa-cannabis nip"></i> Catnip</button>
            <button class="pet-kitten" onclick="petKitten(${id})"><i class="fa-solid fa-hand-holding-heart pet"></i>Pet</button>
            <button class="water-bottle" onclick="waterBottle(${id})"><i class="fa-solid fa-spray-can-sparkles agua"></i></i> Spray Water</button>
            </div>
            <div>Coat: ${coat}</div>
            <div>Breed: ${breed}</div>
            <div>Age: ${age}</div>
            <div>Temperament: ${temperament}</div>
            <div>Size: ${size}</div>
            <div>House Trained: ${trained}</div>
            <button class="delete-kittens bg-dark m-1" onclick="deleteKittens(${id})">
            <i class="fa-solid fa-skull"></i>
            <span class="m-1">86 Kitten</span></button>
        </div>
      `)
    }
  );
};
/**
 * Converts the kittens array to a JSON string then
 * Saves the string to localstorage at the key kittens 
*/
function saveKittens() {
  window.localStorage.setItem("kittens", JSON.stringify(kittens))

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
  for (let i = 0; i < kittens.length; i++)
    if (kittens[i].name = null) {
      document.getElementById("kittenHouse").innerHTML = ""
    } else kittens.forEach(
      ({ id, license, name, mood, feels, coat, breed, age, temperament, size, trained, affection }) => {
        (document.getElementById("kittenHouse").innerHTML = `
        <div id="${license}" class="itFits p-1 m-2">
          <div id="catHouse"><i class="fa-solid fa-cat m-1"></i>Name: ${name}</div> 
          <div id="license-number" >License #<i class="fa-solid fa-tag m-1"></i>${license}</div>
          <div ><img src="moody-logo.png" alt="catimage" class="kitten"></div>
          <div id="moodDiv">Mood:<span id="${id}">${mood}</span> <span id="${name}">${feels}</span></div>
            <div class="d-flex align-items-center space-around m-1">
            <button class="catnip" onclick="catnip(${id})"><i class="fa-solid fa-cannabis nip"></i> Catnip</button>
            <button class="pet-kitten" onclick="petKitten(${id})"><i class="fa-solid fa-hand-holding-heart pet"></i>Pet</button>
            <button class="water-bottle" onclick="waterBottle(${id})"><i class="fa-solid fa-spray-can-sparkles agua"></i></i> Spray Water</button>
            </div>
            <div>Coat: ${coat}</div>
            <div>Breed: ${breed}</div>
            <div>Age: ${age}</div>
            <div>Temperament: ${temperament}</div>
            <div>Size: ${size}</div>
            <div>House Trained: ${trained}</div>
            <button class="delete-kittens bg-dark m-1" onclick="deleteKittens(${id})">
            <i class="fa-solid fa-skull"></i>
            <span class="m-1">86 Kitten</span></button>
        </div>
      `)
      }
    )
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
  loadKittens()

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
  loadKittens()
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
  loadKittens()
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
      (document.getElementById("kittenHouse").innerHTML -= `
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
function deleteKitten(id) {
  localStorage.setItem("kittens", JSON.stringify(kittens))
  kittens.splice(kittenIndex, 1);

  localStorage.setItem("data", JSON.stringify(kittens));

  document.getElementById(id).classList.add("hidden")

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
