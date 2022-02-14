document.querySelector("button").addEventListener("click", signIn);
var regUsers = JSON.parse(localStorage.getItem("userData"));
console.log("regUsers:", regUsers);

function signIn() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  for (var i = 0; i < regUsers.length; i++) {
    if (regUsers[i].emailAddress == email && regUsers[i].passWord == password) {
      window.location.href = "index.html";
      
    } else {
      alert("Wrong Email ID & Password");
    }
  }
}
