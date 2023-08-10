document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelectorAll(".inputbox input");
  const label = document.querySelectorAll('.inputbox label');

  input.forEach(function (inputItem, index) {
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
      emailbox.style.borderColor = "";
      emailbox.style.backgroundColor = "";
      emailboxlabel.style.color = "";
      emailError.style.display = "none";
      submitButton.disabled = true;
    } else {
      if (emailPattern.test(email)) {
        // Valid email address
        emailbox.style.borderColor = "";
        emailbox.style.backgroundColor = "";
        emailboxlabel.style.color = "";
        emailError.style.display = "none";
        submitButton.disabled = false;
      } else {
        // Invalid email address
        emailbox.style.borderColor = "rgb(255, 140, 140)";
        emailbox.style.backgroundColor = "#ffb4b43a";
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
      namebox.style.borderColor = "";
      namebox.style.backgroundColor = "";
      nameboxlabel.style.color = "";
      nameError.style.display = "none";
      submitButton.disabled = true;
    } else {
      if (namePattern.test(name)) {
        // Valid email address
        namebox.style.borderColor = "";
        namebox.style.backgroundColor = "";
        nameboxlabel.style.color = "";
        nameError.style.display = "none";
        submitButton.disabled = false;
      } else {
        // Invalid email address
        namebox.style.borderColor = "rgb(255, 140, 140)";
        namebox.style.backgroundColor = "#ffb4b43a";
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
      phnbox.style.borderColor = "";
      phnbox.style.backgroundColor = "";
      phnboxlabel.style.color = "";
      phoneError.style.display = "none";
      submitButton.disabled = true;
    } else {
      if (phonePattern.test(phone)) {
        // Valid email address
        phnbox.style.borderColor = "";
        phnbox.style.backgroundColor = "";
        phnboxlabel.style.color = "";
        phoneError.style.display = "none";
        submitButton.disabled = false;
      } else {
        // Invalid email address
        phnbox.style.borderColor = "rgb(255, 140, 140)";
        phnbox.style.backgroundColor = "#ffb4b43a";
        phnboxlabel.style.color = "red";
        phoneError.style.display = "block";
        submitButton.disabled = true;
      }
    }
  }

  // Event listener for email input blur event
  phnInput.addEventListener("blur", validatePhone);
});

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("dropdownInput");
  const Box = document.querySelector(".dropdown label");
  const dropdownList = document.querySelector('.dropdown-list');
  const listItems = document.querySelectorAll('.dropdown-list li');

  input.addEventListener('focus', function () {
    const searchString = input.value;
    const regex = new RegExp(searchString, 'i');

    listItems.forEach(item => {
      const listItemText = item.textContent;
      if (searchString === '' || regex.test(listItemText)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    // Show or hide the dropdown list based on whether there are matching items
    const matchingItems = Array.from(listItems).some(item => {
      return item.style.display === 'block';
    });

    if (matchingItems) {
      dropdownList.style.display = 'block';
    } else {
      dropdownList.style.display = 'none';
    }
  });

  input.addEventListener('input', function () {
    const searchString = input.value;
    const regex = new RegExp(searchString, 'i');

    listItems.forEach(item => {
      const listItemText = item.textContent;
      if (searchString === '' || regex.test(listItemText)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    // Show or hide the dropdown list based on whether there are matching items
    const matchingItems = Array.from(listItems).some(item => {
      return item.style.display === 'block';
    });

    if (matchingItems) {
      dropdownList.style.display = 'block';
    } else {
      dropdownList.style.display = 'none';
    }
  });

  document.addEventListener('click', function (event) {
    // Hide the dropdown list when clicking outside the input field or list items
    if (!input.contains(event.target) && !dropdownList.contains(event.target)) {
      dropdownList.style.display = 'none';
    }
  });

  listItems.forEach(item => {
    item.addEventListener('click', function () {
      input.value = item.textContent;
      Box.classList.add("active");
      dropdownList.style.display = 'none';
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const imgdrg = document.querySelector("#logo");
  imgdrg.ondragstart = () => {
    return false;
  };

  const imgdrg2 = document.querySelector("#previewImage");
  imgdrg2.ondragstart = () => {
    return false;
  };
})

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});