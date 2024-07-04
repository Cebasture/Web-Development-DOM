// the above command ire querySelectorAll returns a html node list which is an array of nodes, we then are supposed toaccess each element separately via a loop. querySelectorAll can have arguments either class with "." or id with "#".
document.querySelectorAll("#redbox").forEach(element => { element.style.backgroundColor = "red";})

// setting attributes of particular elements.
document.querySelector(".container").setAttribute("style", "display: flex" );

// creating new elements, setting class, content and specifying where it is to be inserted.
let div = document.createElement("div");
div.className = "box", "insertedBox"; 
div.innerHTML = "I am a <b>newly</b> box"
document.querySelector(".container").append(div);



