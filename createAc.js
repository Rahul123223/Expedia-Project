document.querySelector("button").addEventListener("click", signUP);

var userArr = JSON.parse(localStorage.getItem("userData")) || [];
function signUP() {
  var email = document.getElementById("email").value;
  var first_name = document.getElementById("first_name").value;
  var last_name = document.getElementById("last_name").value;
  var password = document.getElementById("password").value;
  //   console.log(email,first_name,last_name,password)

  var userData = {
    emailAddress: email,
    firstName: first_name,
    lastName: last_name,
    passWord: password,
  };
  //   console.log(userData);
  userArr.push(userData);
  localStorage.setItem("userData", JSON.stringify(userArr));
  window.location.href = "signIn.html";
}
