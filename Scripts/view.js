// Function to convert Google Drive links to the correct format
function convertLink(link) {
    // Define the regular expression pattern to match the original link format
    var regex = /https:\/\/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/;
  
    // Use the replace() method with a callback function to convert the link
    var newLink = link.replace(regex, "https://drive.google.com/uc?export=download&id=$1");
  
    return newLink;
  }
  
  // Function to create and append a new data div for each entry
  function createDataDiv(image, name, dept) {
    var dataContainer = document.getElementById('dataContainer');
  
    // Create a new div element
    var div = document.createElement('div');
    div.classList.add('displayimage');
  
    // Create an image element
    var img = document.createElement('img');
    img.classList.add('img');
    img.src = image;
    div.appendChild(img);
  
    // Create a paragraph element for name
    var nameParagraph = document.createElement('p');
    nameParagraph.classList.add('name');
    nameParagraph.textContent = name;
    div.appendChild(nameParagraph);
  
    // Create a paragraph element for department
    var deptParagraph = document.createElement('p');
    deptParagraph.classList.add('dept');
    deptParagraph.textContent = dept;
    div.appendChild(deptParagraph);
  
    // Append the new div to the data container
    dataContainer.appendChild(div);
  }
  
  // Replace CSV_URL with the URL of your CSV file
  var csvUrl =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSC4PMMLjuF6Egz7IskwSOUtbiWhRDG-zwWMeAyrkzJoMw2zVnOmjqcqwOD4UivQ4K48MoRFmXsZeTO/pub?output=csv';
  
  // Fetch the CSV data using Fetch API
  fetch(csvUrl)
    .then((response) => response.text())
    .then((csvData) => {
      // Parse the CSV data
      var rows = csvData.split('\n');
      for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].split(',');
        var image = cells[3].trim(); // Assuming the image URL is in the fourth column
        var name = cells[1].trim();  // Assuming the name is in the second column
        var dept = cells[2].trim();   // Assuming the dept is in the third column
        image = convertLink(image); // Convert the image link to the correct format
        createDataDiv(image, name, dept); // Create and append the data div for each entry
      }
    })
    .catch((error) => console.error('Error fetching CSV:', error));
  