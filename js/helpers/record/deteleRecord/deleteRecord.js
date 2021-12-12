import getElement from "../../getElement/getElement.js";

function deteleRecord(){
    getElement("list").innerHTML = "";
    getElement("no-record").style.display = "block";
    getElement("hide-delete-btn").style.display = "none";
}

export default deteleRecord;