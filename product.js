var data = [
  {
    img_url:
      "https://images.trvl-media.com/hotels/4000000/3880000/3877900/3877863/303131e2.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
    hotelName: "JW Marriot Hall Pune  ",
    location: "Pune",
    services: "Include 3 Meals, Free Stay and Meals...",
    refund: "fully refundable",
    price: "Rs, 16,500",
    ratings: "4.8/5 Exceptional(142 reviews)",
    button: "reserve",
  },  
];

document.querySelector("button").addEventListener("click", clickMe);
var arr = [];

localStorage.setItem("MyData", JSON.stringify(data));

function clickMe(item) {}

data.map(function (element, index) {
  var div = document.createElement("div");
  var img = document.createElement("img");
  img.setAttribute("src", element.img_url);
  div.style.borderRadius="10px"

  var rightDiv = document.createElement("div");

  var btn = document.createElement("button");
  btn.innerHTML = "Reserve";
  btn.addEventListener("click", function (index) {
    console.log(index);
  });
  btn.style.backgroundColor = "royalblue";
  btn.style.color = "white";
  btn.style.border = "none";
  btn.style.borderRadius = "10px";

  btn.addEventListener("click", function () {
    window.location.href = "reserve.html";
  });

  var h6 = document.createElement("h4");
  h6.innerHTML = element.hotelName;

  var p = document.createElement("p");
  p.innerHTML = element.location;

  var p2 = document.createElement("p");
  p2.innerHTML = element.services;

  var p3 = document.createElement("p");
  p3.innerHTML = element.refund;

  var price = document.createElement("h5");
  price.innerHTML = element.price;

  var rat = document.createElement("h6");
  rat.innerHTML = element.ratings;

  div.append(img);
  rightDiv.append(h6, p, p2, p3, price, rat, btn);

  document.getElementById("container").append(div, rightDiv);
});
