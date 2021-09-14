//Hover NavBar Feature
let home = document.getElementById("homeNav");
let menu = document.getElementById("menuNav");
let order = document.getElementById("orderNav");
let homeTxt = document.getElementById("homeTxt");
let menuTxt = document.getElementById("menuTxt");
let orderTxt = document.getElementById("orderTxt");

home.addEventListener("mouseover", function() {
    homeTxt.textContent = "Home";
});

home.addEventListener("mouseout", function() {
    homeTxt.textContent = "";
});

menu.addEventListener("mouseover", function() {
    menuTxt.textContent = "Menu";
});

menu.addEventListener("mouseout", function() {
    menuTxt.textContent = "";
});

order.addEventListener("mouseover", function() {
    orderTxt.textContent = "Order";
});

order.addEventListener("mouseout", function() {
    orderTxt.textContent = "";
});

//Total Order Feature
let form = document.getElementById("myForm");
let total = document.getElementById("total");
let spagQuantity = form.elements["spagQuan"];
let spagCost = document.getElementById("spagPrice").value;
let raviQuantity = form.elements["raviQuan"];
let raviCost = document.getElementById("raviPrice").value;
let lasaQuantity = form.elements["lasaQuan"];
let lasaCost = document.getElementById("lasaPrice").value;
let pizzQuantity = form.elements["pizzQuan"];
let pizzCost = document.getElementById("pizzPrice").value;
let boloQuantity = form.elements["boloQuan"];
let boloCost = document.getElementById("boloPrice").value;
let caciQuantity = form.elements["caciQuan"];
let caciCost = document.getElementById("caciPrice").value;

form.addEventListener("change", function() {
    total.textContent = "$" + ((spagQuantity.value * spagCost) + (raviQuantity.value * raviCost) + (lasaQuantity.value * lasaCost) + (pizzQuantity.value * pizzCost) + (boloQuantity.value * boloCost) + (caciQuantity.value * caciCost)).toFixed(2);
});


test