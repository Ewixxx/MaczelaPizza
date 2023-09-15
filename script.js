import{initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://maczelapizza-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)

const pizzaDB = ref (database,"Pizza")
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const cartListEl = document.getElementById("cart-item")

// Pressing Enter key in Search bar
let input = document.querySelector('input');
input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
      let inputValue = inputFieldEl.value
      console.log(`${inputValue} added to database`)
      push(pizzaDB, inputValue)
      inputFieldEl.value=""
      cartListEl.innerHTML += `<li>${inputValue}</li>`
     
    }
     })
    


addButtonEl.addEventListener("click",function(){
let inputValue = inputFieldEl.value
 console.log(`${inputValue} added to database`)
 push(pizzaDB, inputValue)
 inputFieldEl.value=""

 cartListEl.innerHTML += `<li>${inputValue}</li>`
})




// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();