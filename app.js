// #region VARIABLES
let kittens = []
let kitten = {}

let kittenCoat = ["none", "short", "long"]
let kittenBreed = ["orange", "void", "Scottish Fold", "Maine Coon", "calico", "tiger", "white"]
let kittenAge = ["baby", "young", "adult", "senior", "should be dead"]
let kittenTemperament = ["hides from humans", "destroys everything", "bites people for fun", "lapcat", "bossy", "feral", "under foot", "evil mastermind"]
let kittenSize = ["tiny", "small", "average", "large", "enormous", "chonker"]
let kittenTrained = ["uses litterbox", "free thinker"]
let kittenMood = ["gone", "angry", "tolerant", "happy"]
let moodKitten = 2

// #endregion VARIABLES

// #region BUTTONS
let adoptionForm = document.getElementById("adoptionForm")
let kittenNameInput = document.getElementById("kitten-name")
let adoptionButton = document.getElementById("adoption-button")
let kittenHouse = document.getElementById("kittenHouse")
let clearButton = document.getElementById("clear-kittens")
let moreButton = document.getElementById("moreButton")
let moreBtn = document.getElementById("more-button")
adoptionButton.addEventListener('submit', addKitten)
clearButton.addEventListener('click', clearKittens)
moreBtn.addEventListener('click', showFormButton)

let removeButton = document.getElementById("removeKitten")
let catnipButton = document.getElementById("catnip")
let waterButton = document.getElementById("waterBottle")
let petButton = document.getElementById("petKitten")

removeButton.addEventListener('click', removeKitten)
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
  let moodKitten
  let coatCat = kittenCoat[(Math.floor(Math.random() * kittenCoat.length))]
  let breedCat = kittenBreed[(Math.floor(Math.random() * kittenBreed.length))]
  let ageCat = kittenAge[(Math.floor(Math.random() * kittenAge.length))]
  let temperamentCat = kittenTemperament[(Math.floor(Math.random() * kittenTemperament.length))]
  let sizeCat = kittenSize[(Math.floor(Math.random() * kittenSize.length))]
  let trainedCat = kittenTrained[(Math.floor(Math.random() * kittenTrained.length))]
  let catFeels = kittenMood[Math.floor(moodKitten)]
  let kittenAffection = Math.random()
  let kittenLicense = generateId()
  let catId = kittens.length


  let kitten = {
    name: kittenName,
    id: catId,
    mood: moodKitten,
    feels: catFeels,
    coat: coatCat,
    breed: breedCat,
    age: ageCat,
    temperament: temperamentCat,
    size: sizeCat,
    trained: trainedCat,
    affection: kittenAffection,
    license: kittenLicense
  }

  if (!kittens.find(kitten => kitten.name == kittenName)) {
    kittens.push(kitten)
  }

  saveKittens()
  loadKittens()
  form.reset()
};

function saveKittens() {
  window.localStorage.setItem("kittens", JSON.stringify(kittens))

  drawKittens()
}

function loadKittens() {
  let kittensData = JSON.parse(window.localStorage.getItem("kittens"))

  if (kittensData) {
    kittens = kittensData
  }
}

function drawKittens() {
  let kittenHouse = document.getElementById("kittenHouse")
  let catHouseTemplate = ""
  kittens.forEach(kitten => {
    catHouseTemplate += `
      <div id="${kitten.id}" class="itFits p-1 m-2">
        <div id="catHouse" >
          <i class="fa-solid fa-cat m-1"></i><span class="kitten">Name: ${kitten.name}</span></div> 
      <div id="license-number" >License #
        <i class="fa-solid fa-tag m-1"></i>${kitten.license}</div>
      <div ><img id="${kitten.id}" src="cat.png" alt="catimage" class="kitten ${kitten.feels}"></div>
      <div id="moodDiv">Mood:
      <span id="${kitten.name}">${kitten.feels}</span></div>
      <div class="d-flex align-items-center space-around m-1">
      <button id="catnip" class="catnip" type="button" onclick="catnip('${kitten.id}')"><i class="fa-solid fa-cannabis nip"></i> Catnip</button>
      <button id="petKitten" class="pet-kitten" type="button" onclick="petKitten('${kitten.id}')"><i class="fa-solid fa-hand-holding-heart pet"></i>Pet</button>
      <button id="waterBottle" class="water-bottle" type="button" onclick="waterBottle('${kitten.id}')"><i class="fa-solid fa-spray-can-sparkles agua"></i></i> Spray Water</button>
      </div>
      <div>Coat: ${kitten.coat}</div>
      <div>Breed: ${kitten.breed}</div>
      <div>Age: ${kitten.age}</div>
      <div>Temperament: ${kitten.temperament}</div>
      <div>Size: ${kitten.size}</div>
      <div>House Trained: ${kitten.trained}</div>
      <button id="removeKitten" class="bg-dark m-1" type="button" onclick="removeKittens('${kitten.id}')">
      <i class="fa-solid fa-skull"></i>
      <span class="m-1">86 Kitten</span></button>
      </div>
      `
  }
  )
  kittenHouse.innerHTML += catHouseTemplate
}

function generateId() {
  return Math.floor(Math.random() * 10000000) + "-" + Math.floor(Math.random() * 10000000)
}

function setKittenMood() {
  return Math.floor(Math.random() * 5)
}

function findKittenById(kittenId) {
  if (kitten.id == 'id') {
    return (kitten.name)
  }
}

function petKitten(kittenId) {
  let feelsy = document.getElementById(kitten.name);
  let currentMood = kitten.mood

  currentMood++

  feelsy.innerHTML = (kittens[currentMood].mood)

  saveKittens()
}
/*
if (kitten.mood == kittenMood[0] || kittenMood[1]) {
  document.getElementById(kitten.id).classList.toggle("Gone")
} else if (kitten.mood == kittenMood[2] || kittenMood[3] || kittenMood[4]) {
  document.getElementById(kitten.id).classList.toggle("Angry")
} else if (kitten.mood == kittenMood[5] || kittenMood[6]) {
  document.getElementById(kitten.id).classList.toggle("Tolerant")
} else if (kitten.mood == kittenMood[7] || kittenMood[8] || kittenMood[9] || kittenMood[10] || kittenMood[11]) {
  document.getElementById(kitten.id).classList.toggle("Happy")
}*/

function waterBottle(kittenId) {
  let feelsy = document.getElementById(kitten.name)
  let currentMood = kitten.mood

  currentMood--

  feelsy.innerHTML = (kittens[currentMood].mood)

  saveKittens()
}

function catnip(kittenId) {
  let feelsy = document.getElementById(kitten.name)
  let currentMood = moodKitten

  currentMood++
  let updateMood = kittenMood[currentMood]

  kitten.feels = updateMood

  feelsy.innerHTML = kitten.feels

  saveKittens()
}

function clearKittens() {
  window.localStorage.clear()

  kittens.forEach(
    () => {
      (document.getElementById("catHouse").innerHTML === `<div></div>`)

    })
  document.getElementById("kittenHouse").innerHTML = ""

}


function removeKitten(kittenId) {
  let kittenIndex = kittens.findIndex(kitten => kitten.id == kittenId)
  if (kittenIndex == -1) {
    throw new Error("Bad Kitten Id")
  }

  kittens.splice(kittenIndex, 1)
  saveKittens()
}

function showFormButton() {
  /*  event.preventDefault()
  
    moreButton = event.target */
  adoptionForm.classList.remove("hidden")
  moreButton.classList.add("hidden")
}

function hideFormButton() {
  adoptionForm.classList.add("hidden")
  moreButton.classList.remove("hidden")
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