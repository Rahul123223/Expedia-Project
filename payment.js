document.querySelector("form").addEventListener("submit", paymentFunction);

var data = JSON.parse(localStorage.getItem("MyData"));
console.log("data:", data);

data.map(function (elem) {
  var div = document.createElement("div");
  var h1 = document.createElement("h1");
  var h2 = document.createElement("h2");
  var rat = document.createElement("h3");
  var img = document.createElement("img");
  img.setAttribute("src", elem.img_url);
  img.style.height = "200px";
  img.style.width = "300px";
  img.style.borderRadius = "10px";

  h1.textContent = elem.hotelName;
  h2.textContent = elem.price;
  rat.textContent = elem.ratings;
  div.append(h1, h2, rat, img);
  document.querySelector("#newContainer").append(div);
});

function paymentFunction(e) {
  e.preventDefault();
  var cc = document.getElementById("cc").value;
  var cvv = document.getElementById("cvv").value;

  if (cc.length == 16 && cvv.length == 3) {
    alert("Enter Otp = 1234");
    document.querySelector(".otpDiv").style.display = "flex";
  }

  if (!(cc.length == 16 && cvv.length == 3)) {
    alert("Incorrect Details");
  }
}

document.getElementById("otpButton").addEventListener("click", otpFunction);

function otpFunction(e) {
  e.preventDefault();

  var valid = document.getElementById("otp").value;
  if (valid == 1234) {
    alert("Payment Successful");
    alert("Thank You For Purchasing");

    window.location.href = "home.html";
  } else {
    alert("Invalid Otp");
  }
}
