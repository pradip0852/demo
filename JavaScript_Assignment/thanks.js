function myFunction() {
  let userName = localStorage.getItem("_userName_");
  let FullNameSpan = document.getElementById("userName");
  FullNameSpan.innerHTML = userName;
}
function otpSubmitFunction() {
  let otpError = document.getElementById("otpError");
  otpError.innerHTML = "";
  let otpNumber = localStorage.getItem("_otpNumber_");
  let otpInput = document.getElementById("otpInput");
  if (otpInput.value == otpNumber) {
    alert("OTP Verify");
  } else {
    otpError.innerHTML = "otp is not valid";
  }
  console.log(userName, otpNumber);
}
