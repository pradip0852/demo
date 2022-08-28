var isFullNameConRefValid = false;
var isEmailRefValid = false;
var isPANRefValid = false;
var isLoan_AmountRefValid = false;
var isCatchpaValid = false;
var userName = false;
const myFunction = () => {
  var captcha;
  const mainSubmit = document.querySelector("#mainSubmit");
  const wes = document.querySelector(".wes");
  wes.addEventListener("click", function (event) {
    event.preventDefault();
    printmsg();
  });
};
function generate() {
  // Clear old input
  document.getElementById("input").value = "";
  // Access the element to store
  // the generated captcha
  captcha = document.getElementById("image");
  var uniquechar = "";
  const randomchar =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  // Generate captcha for length of
  // 5 with random character
  for (let i = 1; i < 5; i++) {
    uniquechar += randomchar.charAt(Math.random() * randomchar.length);
  }
  // Store generated input
  captcha.innerHTML = uniquechar;
}

function printmsg() {
  const usr_input = document.getElementById("input").value;
  // Check whether the input is equal
  // to generated captcha or not
  if (usr_input == captcha.innerHTML) {
    var s = document.getElementById("key");
    s.innerHTML = "Matched";
    s.style.color = "green";
    isCatchpaValid = true;
  } else {
    var s = document.getElementById("key");
    s.innerHTML = "not Matched";
    s.style.color = "red";
    isCatchpaValid = false;
    generate();
  }
}

const mainSubmitFunction = (enevt) => {
  event.preventDefault();
  if (validation()) {
    var val = Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem('_userName_',userName)
    localStorage.setItem('_otpNumber_',val)
    console.log(val);
    let a= document.createElement('a');
    a.target= '_blank';
    a.href= '/JavaScript_Assignment/thankYou.html';
    a.click();
}else{
    localStorage.setItem('_userName_','')
    localStorage.setItem('_otpNumber_','')
}
};

const validation = (isFlag) => {
  if (
    isFullNameConRefValid &&
    isEmailRefValid &&
    isPANRefValid &&
    isLoan_AmountRefValid &&
    isCatchpaValid
  ) {
    mainValidationError.style.visibility = "hidden";
    return true;
  } else {
    let mainValidationError = document.getElementById("mainValidationError");
    mainValidationError.style.visibility = "visible";
    return false;
  }
};

const onFocusOutValidation = (inputRef) => {
  let FullNameConRef = document.getElementById("FullNameContainer");
  let EmailRef = document.getElementById("EmailContainer");
  let PANRef = document.getElementById("PANContainer");
  let Loan_AmountRef = document.getElementById("Loan_AmountContainer");
  let icon = document.querySelector(".fa-circle-check");
  if (inputRef == "FullName") {
    if (FullNameConRef.children[1].value == "" ||
        !/^[a-zA-Z]+(\s[a-zA-Z]+)?$/.test(FullNameConRef.children[1].value) || FullNameConRef.children[1].value.length<4 ) {
      FullNameConRef.children[2].style.visibility = "hidden";
      FullNameConRef.children[3].style.visibility = "visible";
      FullNameConRef.children[4].style.visibility = "visible";
      isFullNameConRefValid = false;
    }
    else {
      FullNameConRef.children[3].style.visibility = "hidden";
      FullNameConRef.children[2].style.visibility = "visible";
      FullNameConRef.children[4].style.visibility = "hidden";
      isFullNameConRefValid = true;
      userName = FullNameConRef.children[1].value
    }
  }
  if (inputRef == "Email") {   
    if (EmailRef.children[1].value == "" ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        EmailRef.children[1].value)) {
      EmailRef.children[2].style.visibility = "hidden";
      EmailRef.children[3].style.visibility = "visible";
      EmailRef.children[4].style.visibility = "visible";
      isEmailRefValid = false;
    } else {
      EmailRef.children[3].style.visibility = "hidden";
      EmailRef.children[2].style.visibility = "visible";
      EmailRef.children[4].style.visibility = "hidden";
      isEmailRefValid = true;
    }
  }
  if (inputRef == "PAN") {
    if (PANRef.children[1].value == "" ||
      !/[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(PANRef.children[1].value)) {
      PANRef.children[2].style.visibility = "hidden";
      PANRef.children[3].style.visibility = "visible";
      PANRef.children[4].style.visibility = "visible";
      isPANRefValid = false;
    } else {
      PANRef.children[3].style.visibility = "hidden";
      PANRef.children[2].style.visibility = "visible";
      PANRef.children[4].style.visibility = "hidden";
      isPANRefValid = true;
    }
  }
  if (inputRef == "Loan_Amount") {
    if ( Loan_AmountRef.children[1].value == "" ||
      Loan_AmountRef.children[1].value.length > 9 ) {
      Loan_AmountRef.children[2].style.visibility = "hidden";
      Loan_AmountRef.children[3].style.visibility = "visible";
      Loan_AmountRef.children[4].style.visibility = "visible";
      isLoan_AmountRefValid = false;
    } else {
      Loan_AmountRef.children[3].style.visibility = "hidden";
      Loan_AmountRef.children[2].style.visibility = "visible";
      Loan_AmountRef.children[4].style.visibility = "hidden";
      isLoan_AmountRefValid = true;
    }
  }
};
