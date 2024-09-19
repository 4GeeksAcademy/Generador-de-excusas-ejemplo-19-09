/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  //excusa1 = ["el perro se perdio en el bosque"]
  //excusaEjemplo = "Who action place"

  //arrays con las excusas que queremos mostrar

  let who = ["El gato", "la niñera", "La abuela", "El pez", "El niño"];
  let action = [
    "se comio un pan",
    "pisó al gato",
    "dibujó un mar",
    "se murió",
    "estudió matematicas"
  ];
  let place = [
    "en el bosque",
    "en la casa",
    "en el metro",
    "en la piscina",
    "en el avión"
  ];

  //debemos generar numeros random para esas excusas

  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomPlace = Math.floor(Math.random() * place.length);

  //debemos unir estos dos conceptos para que sean mostrados en la ventada.
  document.querySelector("#excuse").innerHTML =
    who[randomWho] + " " + action[randomAction] + " " + place[randomPlace];
};
