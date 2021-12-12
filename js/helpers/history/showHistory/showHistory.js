import getElement from "../../getElement/getElement.js";

function showHistory(){

console.log("history");
const $historialNav = document.querySelector(".section-history");
$historialNav.classList.toggle("open-history");

if(getElement("list").innerHTML === ""){
    getElement("hide-delete-btn").style.display = "none";
}else{
    getElement("no-history").style.display = "none";
    getElement("hide-delete-btn").style.display = "block";
    
}

}

export default showHistory;
