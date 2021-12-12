import getElement from "../../getElement/getElement.js";

function deteleHistory(){
    getElement("list").innerHTML = "";
    getElement("no-history").style.display = "block";
    getElement("hide-delete-btn").style.display = "none";
}

export default deteleHistory;