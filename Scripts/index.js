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

document.addEventListener("DOMContentLoaded", function () {
  const imageInput = document.getElementById("image");
  const Message = document.getElementById("Message");
  const previewContainer = document.getElementById("previewContainer");
  const previewImage = document.getElementById("previewImage");
  const submitButton = document.getElementById("submit");

  imageInput.addEventListener("change", handleImageUpload);

  function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file) {
      // Check if the uploaded file is an image
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        Message.style.color = "#e98e8e";
        Message.textContent = "We accept only image files.";
        Message.style.marginBottom = "7px";
        previewContainer.style.display = "none";
        submitButton.disabled = true;
        return;
      }

      // Reset error and success messages
      Message.textContent = file.name;
      Message.style.color = "black";
      Message.style.marginBottom = "0px";

      // Display a small preview of the image
      const reader = new FileReader();
      reader.onload = function () {
        previewImage.src = reader.result;
        previewContainer.style.display = "block";
      };
      reader.readAsDataURL(file);
    } else {
      Message.style.color = "#e98e8e";
      Message.textContent = "Wow, such empty.";
      Message.style.marginBottom = "7px";
      previewContainer.style.display = "none";
      submitButton.disabled = true;
    }
  }

  // Handle drag and drop at document level
  document.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.add("dragover");
  });

  document.addEventListener("dragleave", (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.remove("dragover");
  });

  document.addEventListener("drop", (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.remove("dragover");

    // Check if the drop occurred inside the image input div
    if (event.target !== imageInput) {
      Message.textContent = "";
      previewContainer.style.display = "none";
      return;
    }

    imageInput.files = event.dataTransfer.files;
    handleImageUpload(event);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const imageInput = document.getElementById("image");
  const Message = document.getElementById("Message");
  const box = document.querySelector(".uploadbox");
  const boxLabel = document.querySelector(".uploadbox label");
  const previewContainer = document.getElementById("previewContainer");
  const previewImage = document.getElementById("previewImage");
  const submitButton = document.getElementById("submit");

  imageInput.addEventListener("change", handleImageUpload);

  function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file) {
      // Check if the uploaded file is an image
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        Message.style.color = "#e98e8e";
        Message.textContent = "We accept only image files.";
        Message.style.marginBottom = "7px";
        previewContainer.style.display = "none";
        box.style.borderColor = "rgb(255, 140, 140)";
        box.style.backgroundColor = "#ffe1e1";
        boxLabel.style.color = "red";
        submitButton.disabled = true;
        return;
      }

      // Reset error and success messages
      Message.textContent = file.name;
      Message.style.color = "black";
      Message.style.marginBottom = "0px";
      box.style.borderColor = "";
      box.style.backgroundColor = "";
      boxLabel.style.color = "";

      // Display a small preview of the image
      const reader = new FileReader();
      reader.onload = function () {
        previewImage.src = reader.result;
        previewContainer.style.display = "block";
      };
      reader.readAsDataURL(file);
    } else {
      Message.style.color = "#e98e8e";
      Message.textContent = "Wow, such empty.";
      Message.style.marginBottom = "7px";
      box.style.borderColor = "rgb(255, 140, 140)";
      box.style.backgroundColor = "#ffe1e1";
      boxLabel.style.color = "red";
      previewContainer.style.display = "none";
      previewContainer.style.display = "none";
    }
  }

  // Handle drag and drop at document level
  document.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.add("dragover");
  });

  document.addEventListener("dragleave", (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.remove("dragover");
  });

  document.addEventListener("drop", (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.remove("dragover");

    // Check if the drop occurred inside the image input div
    if (event.target !== imageInput) {
      Message.style.color = "#e98e8e";
      Message.textContent = "Drop your image in the box";
      Message.style.marginBottom = "7px";
      box.style.borderColor = "rgb(255, 140, 140)";
      box.style.backgroundColor = "#ffe1e1";
      boxLabel.style.color = "red";
      previewContainer.style.display = "none";
      return;
    }

    imageInput.files = event.dataTransfer.files;
    handleImageUpload(event);
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
