import{initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {add} from "./function.js"
import {getDatabase} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://maczelapizza-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

console.log (add(2,3))
const app = initializeApp(appSettings)
const database = getDatabase(app)

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click",function(){
let inputValue = inputFieldEl.value
 console.log('${inputValue} added to database')
})