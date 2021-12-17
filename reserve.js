var product = JSON.parse(localStorage.getItem("newData"));

  document.querySelector("button").setAttribute("click",reserveBtn)


  
  function reserveBtn(){
    window.location.href="checkout.html"
  }

// product.map(function (item,index) {
//   displayItems(item.hotelName);
// });

// function displayItems(price) {
//   console.log(price[0]);

//   var p = document.createElement("p");
//   p.textContent = price;

//   document.querySelector("body").append(p)
// }
