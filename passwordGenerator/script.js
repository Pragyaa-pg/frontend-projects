const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("uppercase");
const lowerEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const showPasswordEl = document.getElementById("showPassword");
const generateBtn = document.getElementById("generate");

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMBER = "0123456789";
const SYMBOL = "!@#$%^&*()_+[]{}<>?";

generateBtn.addEventListener("click", () => {
  let chars = "";
  let password = "";

  if (upperEl.checked) chars += UPPER;
  if (lowerEl.checked) chars += LOWER;
  if (numberEl.checked) chars += NUMBER;
  if (symbolEl.checked) chars += SYMBOL;

  if (chars === "") {
    alert("Select at least one option!");
    return;
  }

  for (let i = 0; i < lengthEl.value; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  passwordEl.value = password;
});

/* SHOW / HIDE PASSWORD + BACKGROUND CHANGE */
showPasswordEl.addEventListener("change", () => {
  if (showPasswordEl.checked) {
    passwordEl.type = "text";
    document.body.style.backgroundImage =
      "url('shinchanOpen.jpg')";
  } else {
    passwordEl.type = "password";
    document.body.style.backgroundImage =
      "url('shinchanClose.jpg')";
  }
});

