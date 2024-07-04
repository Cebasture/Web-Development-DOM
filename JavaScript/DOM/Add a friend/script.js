var addFrnd = document.querySelector("#addItem");
var rmvFrnd = document.querySelector("#remove");
var istatus = document.querySelector("#status");

addFrnd.addEventListener("mouseenter", function () {
  addFrnd.style.backgroundColor = "#1947d0";
});

addFrnd.addEventListener("mouseleave", function () {
  addFrnd.style.backgroundColor = "royalblue";
});

addFrnd.addEventListener("click", function () {
  istatus.innerHTML = "Friend Request Sent";
  istatus.style.color = "royalblue";
  addFrnd.innerHTML = "Unsend";
  addFrnd.classList.add("added");
  addFrnd.classList.remove("add");
    // addFrnd.id = "added";
    console.log("clicked")
});

var frnd = document.querySelector("added");

frnd.addEventListener("click", function () {
  console.log("helo");
});
