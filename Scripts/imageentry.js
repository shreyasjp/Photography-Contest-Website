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
  