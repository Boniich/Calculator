import getElement from "../../getElement/getElement.js";

function showRecord(){

console.log("Record");
const $historialNav = document.querySelector(".section-record");
$historialNav.classList.toggle("open-record");

if(getElement("list").innerHTML === ""){
    getElement("hide-delete-btn").style.display = "none";
}else{
    getElement("no-record").style.display = "none";
    getElement("hide-delete-btn").style.display = "block";
    
}

}

export default showRecord;
