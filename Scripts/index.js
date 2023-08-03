document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelectorAll(".inputbox input");
  const label = document.querySelectorAll('.inputbox label');

  input.forEach(function(inputItem, index) {
    inputItem.addEventListener("focus", function () {
      label[index].classList.add("active");
    });

    inputItem.addEventListener("blur", function () {
      if (inputItem.value === "") {
        label[index].classList.remove("active");
      }
    });
  });
});

// Email validation
document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  //const emailValidationResult = document.getElementById("emailValidationResult");
  const emailbox = document.querySelector(".emailbox");
  const emailboxlabel = document.querySelector(".emailbox label");
  const emailError = document.getElementById("mailerr");
  const submitButton = document.getElementById("submit");

  // Function to validate email
  function validateEmail() {
    const email = emailInput.value.trim();

    // Regular expression pattern for email validation
    const emailPattern = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
    if (email.length === 0) {
      // Email field is empty
      emailbox.style.borderColor = "#d2d2d7";
      emailbox.style.backgroundColor = "hsla(0,0%,100%,.8)";
      emailboxlabel.style.color = "#86868b";
      emailError.style.display = "none";
      submitButton.disabled = true;
    } else {
      if (emailPattern.test(email)) {
        // Valid email address
        emailbox.style.borderColor = "#d2d2d7";
        emailbox.style.backgroundColor = "hsla(0,0%,100%,.8)";
        emailboxlabel.style.color = "#86868b";
        emailError.style.display = "none";
        submitButton.disabled = false;
      } else {
        // Invalid email address
        emailbox.style.borderColor = "rgb(255, 140, 140)";
        emailbox.style.backgroundColor = "#ffe1e1";
        emailboxlabel.style.color = "red";
        emailError.style.display = "block";
        submitButton.disabled = true;
      }
    }
  }

  // Event listener for email input blur event
  emailInput.addEventListener("blur", validateEmail);
});

document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  //const emailValidationResult = document.getElementById("emailValidationResult");
  const namebox = document.querySelector(".namebox");
  const nameboxlabel = document.querySelector(".namebox label");
  const nameError = document.getElementById("nameerr");
  const submitButton = document.getElementById("submit");

  // Function to validate email
  function validateName() {
    const name = nameInput.value.trim();

    // Regular expression pattern for email validation
    const namePattern = /^[a-zA-Z.][a-zA-Z.\s]*$/;
    if (name.length === 0) {
      // Email field is empty
      namebox.style.borderColor = "#d2d2d7";
      namebox.style.backgroundColor = "hsla(0,0%,100%,.8)";
      nameboxlabel.style.color = "#86868b";
      nameError.style.display = "none";
      submitButton.disabled = true;
    } else {
      if (namePattern.test(name)) {
        // Valid email address
        namebox.style.borderColor = "#d2d2d7";
        namebox.style.backgroundColor = "hsla(0,0%,100%,.8)";
        nameboxlabel.style.color = "#86868b";
        nameError.style.display = "none";
        submitButton.disabled = false;
      } else {
        // Invalid email address
        namebox.style.borderColor = "rgb(255, 140, 140)";
        namebox.style.backgroundColor = "#ffe1e1";
        nameboxlabel.style.color = "red";
        nameError.style.display = "block";
        submitButton.disabled = true;
      }
    }
  }

  // Event listener for email input blur event
  nameInput.addEventListener("input", validateName);
});

document.addEventListener("DOMContentLoaded", function () {
  const phnInput = document.getElementById("phone");
  //const emailValidationResult = document.getElementById("emailValidationResult");
  const phnbox = document.querySelector(".phnbox");
  const phnboxlabel = document.querySelector(".phnbox label");
  const phoneError = document.getElementById("phnerr");
  const submitButton = document.getElementById("submit");

  // Function to validate email
  function validatePhone() {
    const phone = phnInput.value.trim();

    // Regular expression pattern for email validation
    const phonePattern = /^[6-9][0-9]{9}$/;
    if (phone.length === 0) {
      // Email field is empty
      phnbox.style.borderColor = "#d2d2d7";
      phnbox.style.backgroundColor = "hsla(0,0%,100%,.8)";
      phnboxlabel.style.color = "#86868b";
      phoneError.style.display = "none";
      submitButton.disabled = true;
    } else {
      if (phonePattern.test(phone)) {
        // Valid email address
        phnbox.style.borderColor = "#d2d2d7";
        phnbox.style.backgroundColor = "hsla(0,0%,100%,.8)";
        phnboxlabel.style.color = "#86868b";
        phoneError.style.display = "none";
        submitButton.disabled = false;
      } else {
        // Invalid email address
        phnbox.style.borderColor = "rgb(255, 140, 140)";
        phnbox.style.backgroundColor = "#ffe1e1";
        phnboxlabel.style.color = "red";
        phoneError.style.display = "block";
        submitButton.disabled = true;
      }
    }
  }

  // Event listener for email input blur event
  phnInput.addEventListener("blur", validatePhone);
});

window.addEventListener("load", function() {
  const form1 = document.querySelector("#form");
  const form2 = document.querySelector("#form2");
  const submitButton = document.querySelector("#submit");
  
  form1.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form1);
    const action = e.target.action;
    submitButton.classList.add("breathing");
  let interval = setInterval(() => {
    submitButton.classList.toggle("active");
  }, 500);

    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
    form1.classList.add("remove");
    setTimeout(() => {
      form1.remove();
      form2.classList.remove("hide");
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      submitButton.classList.remove("breathing");
    }, 3000);
  })
  });
});

