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
        Message.style.display = "block";
        Message.style.color = "red";
        Message.textContent = "We accept only image files.";
        Message.style.marginBottom = "7px";
        previewContainer.style.display = "none";
        box.style.borderColor = "rgb(255, 140, 140)";
        box.style.backgroundColor = "#ffb4b43a";
        boxLabel.style.color = "red";
        submitButton.disabled = true;
        return;
      }

      // Reset error and success messages
      Message.style.display = "block";
      Message.textContent = file.name;
      Message.style.color = "black";
      Message.style.marginBottom = "0px";
      box.style.borderColor = "";
      box.style.backgroundColor = "";
      boxLabel.style.color = "";
      submitButton.disabled = false;

      // Display a small preview of the image
      const reader = new FileReader();
      reader.onload = function () {
        previewImage.src = reader.result;
        previewContainer.style.display = "block";
      };
      reader.readAsDataURL(file);
    } else {
      Message.style.display = "block";
      Message.style.color = "red";
      Message.textContent = "Wow, such empty.";
      Message.style.marginBottom = "7px";
      box.style.borderColor = "rgb(255, 140, 140)";
      box.style.backgroundColor = "#ffb4b43a";
      boxLabel.style.color = "red";
      previewContainer.style.display = "none";
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
      Message.style.display = "block";
      Message.style.color = "red";
      Message.textContent = "Drop your image in the box";
      Message.style.marginBottom = "7px";
      box.style.borderColor = "rgb(255, 140, 140)";
      box.style.backgroundColor = "#ffb4b43a";
      boxLabel.style.color = "red";
      previewContainer.style.display = "none";
      submitButton.disabled = true;
      return;
    }

    imageInput.files = event.dataTransfer.files;
    handleImageUpload(event);
  });
});

//Image upload and form submission

window.addEventListener("load", function() {
  const form1 = document.querySelector("#form");
  const sbmt = document.getElementById("submitlabel")
  const load = document.getElementById("loading")
  const imageInput = document.getElementById("image");
  const cloudName = 'djbvxtdmg'; // Replace with your Cloudinary cloud name
  const unsignedUploadPreset = 'normal'; // Replace with your unsigned upload preset name
  const targetFolder = 'ClickItUp'; // Replace with the desired folder name
  
  form1.addEventListener("submit", function(e) {
    e.preventDefault();
    sbmt.classList.add("hide");
    load.classList.remove("hide");
    const file = imageInput.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', unsignedUploadPreset);
      formData.append('folder', targetFolder); // Set the target folder here
      formData.append('quality', 'auto:good'); // Specify quality parameter here

      fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        console.log('Upload successful:', data);
        
        // Get the URL of the uploaded image
        const imageUrl = data.secure_url; // Use data.url for non-secure URLs

        const sheetData = new FormData(form1);
        sheetData.append("Image URL",imageUrl);

        const action = e.target.action;
        
        fetch(action, {
          method: 'POST',
          body: sheetData,
        })
        .then(response => response.json()) // Handle the response from the Google Apps Script
        .then(data => {
          console.log('Google Apps Script response:', data);

          // Redirect to a different page after successful submission
          window.location.href = "success.html";
        })
        .catch(error => {
          console.error('Google Apps Script submission error:', error);
          // Handle error
        });
      });
    }
  });
});