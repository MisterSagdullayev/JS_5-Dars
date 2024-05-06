/* HTML tags JS */
/*
let headTag = document.head;
let bodyTag = document.body;
let havola = document.documentURI;
let formalalar = document.forms;
let rasmlar = document.images;
let havolalar = document.links;
console.log(havolalar);
*/

/* Events in JS: onclick, ondblclick, onchange, onfocus, oninput, onmousemove */

/*function buttoniBos() {
    alert("Siz battonni bosdingiz!")
}
function buttoniIkkiMartaBos() {
    alert("Siz batoni ikki marta bosdingiz!")
}
function tanlash(event) {
    alert("Siz " + event.target.value + "ni tanladingiz!");
}*/
/*
function inputgaBosish() {
    console.log("Inputga bosildi!");
}
function inputdanChiqish() {
    console.log("Inputdan chiqildi!");
}
function yozish(event) {
    console.log(event.target.value);

}
document.querySelector(".text").addEventListener("cut",function (event) {
    console.log(event);
});*/
function harakatlanish(e) {
    console.log(e.clientX, e.clientY);
}
function kirish() {
    console.log("Hududga kirildi!");
}
function chiqish() {
    console.log("Hududdan chiqildi!");
}
