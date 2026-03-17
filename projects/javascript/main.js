const signup = document.getElementById("signup");
if (signup) {
  signup.addEventListener("submit", function (event) {
    event.preventDefault();
    resetall();
    const email = document.getElementById("email");
    const pass = document.getElementById("password");
    const cpass = document.getElementById("cpassword");
    let flag = false;
    if (email.value == "") {
      show(email, "eemail", "Email is required");
      flag = true;
    }
    if (cpass.value !== pass.value) {
      show(cpass, "ecpass", "Password do not match");
      pass.type = "text";
      cpass.type = "text";
      flag = true;
    }
    if (!flag) {
      alert("Account Created !");
      window.location.href = "login.html";
    }
  });
}
function resetall() {
  document.querySelectorAll(".error").forEach((el) => (el.innerText = ""));
  document
    .querySelectorAll("input")
    .forEach((el) => el.classList.remove("invalid"));
}
function show(inputelemnt, sid, mg) {
  inputelemnt.classList.add("invalid");
  document.getElementById(sid).innerText = mg;
}
