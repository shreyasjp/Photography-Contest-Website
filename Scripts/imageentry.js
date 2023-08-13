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
      const allowedFormats = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp', 'image/avif', 'image/jpegxl'];
      const isImage = allowedFormats.includes(file.type);
      if (!isImage) {
        Message.style.display = "block";
        Message.style.color = "red";
        Message.textContent = "Erm, that won't work. Choose an image file.";
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

window.addEventListener("load", function () {
  const form1 = document.querySelector("#form");
  const sbmt = document.getElementById("submitlabel");
  const load = document.getElementById("loading");
  const imageInput = document.getElementById("image");
  const err = document.getElementById("loaderr");
  const cloudName = 'djbvxtdmg'; // Replace with your Cloudinary cloud name
  const unsignedUploadPreset = 'normal'; // Replace with your unsigned upload preset name
  const targetFolder = 'ClickItUp'; // Replace with the desired folder name
  let timeoutId; // Variable to hold the timeout ID
  let errorOccurred = false; // Flag to indicate if an error occurred

  form1.addEventListener("submit", function (e) {
    e.preventDefault();
    sbmt.classList.add("hide");
    load.classList.remove("hide");
    err.classList.add("hide"); // Hide the error message initially
    errorOccurred = false; // Reset the error flag
    timeoutId = setTimeout(() => {
      if (!errorOccurred) { // Only show timeout error if no other error occurred
        console.error('Loading timeout (30 seconds exceeded)');
        sbmt.classList.remove("hide");
        load.classList.add("hide");
        err.classList.remove("hide");
      }
    }, 30000); // 30 seconds

    const file = imageInput.files[0];
    
    if (file) {
      const maxFileSize = 10 * 1024 * 1024; // 10MB

      // Calculate the target quality setting based on the image size
      let quality = 0.9; // Default quality setting
      if (file.size > maxFileSize) {
        quality = Math.min(1.0, maxFileSize / file.size); // Adjust quality proportionally
      }

      new Compressor(file, {
        quality: quality,
        mimeType: 'image/jpeg',
        success(compressedResult) {
          if (errorOccurred) return; // Stop execution if error occurred

          clearTimeout(timeoutId); // Clear the timeout since loading was successful

          const formData = new FormData();
          formData.append('file', compressedResult);
          formData.append('upload_preset', unsignedUploadPreset);
          formData.append('folder', targetFolder);
          formData.append('quality', 'auto:good');

          fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: formData,
          })
            .then(response => response.json())
            .then(data => {
              if (errorOccurred) return; // Stop execution if error occurred

              const imageUrl = data.secure_url;

              const sheetData = new FormData(form1);
              sheetData.append("Image URL", imageUrl);

              const action = e.target.action;

              fetch(action, {
                method: 'POST',
                body: sheetData,
              })
                .then(response => response.json())
                .then(data => {
                  if (errorOccurred) return; // Stop execution if error occurred

                  window.location.href = "success.html"; // Redirect on success
                })
                .catch(error => {
                  errorOccurred = true; // Set the error flag
                  console.error('Google Apps Script submission error:', error);
                  sbmt.classList.remove("hide");
                  load.classList.add("hide");
                  err.classList.remove("hide");
                });
            })
            .catch(error => {
              errorOccurred = true; // Set the error flag
              console.error('Cloudinary upload error:', error);
              sbmt.classList.remove("hide");
              load.classList.add("hide");
              err.classList.remove("hide");
            });
        },
        error(error) {
          errorOccurred = true; // Set the error flag
          console.error('Compressor error:', error);
          sbmt.classList.remove("hide");
          load.classList.add("hide");
          err.classList.remove("hide");
        },
      });
    }
  });
});
