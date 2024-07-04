var addFrnd = document.querySelector("#add");
var rmvFrnd = document.querySelector("#remove");
var istatus = document.querySelector("#status");

addFrnd.addEventListener("mouseenter", function(){
        addFrnd.style.backgroundColor = "#1947d0"
    }
);

addFrnd.addEventListener("mouseleave", function(){
        addFrnd.style.backgroundColor = "royalblue"
    }
);

addFrnd.addEventListener("click", function(){
        istatus.innerHTML = "Friend Request Sent"
        istatus.style.color = "royalblue"
        addFrnd.innerHTML = "Unsend"
        addFrnd.setAttribute("added")
        // addFrnd.id = "added";
    }
);

var frnd = document.querySelector("added")

frnd.addEventListener("click", function(){
        console.log("helo")
    }
)