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
  
    // Create a new div element
    var div2 = document.createElement('div');
    div2.classList.add('info');

    // Create a paragraph element for name
    var nameParagraph = document.createElement('p');
    nameParagraph.classList.add('name');
    nameParagraph.textContent = name;
    div2.appendChild(nameParagraph);

  
    // Create a paragraph element for department
    var deptParagraph = document.createElement('p');
    deptParagraph.classList.add('dept');
    deptParagraph.textContent = dept;
    div2.appendChild(deptParagraph);
  
    // Append the new div to the data container
    dataContainer.appendChild(div);
    div.appendChild(div2);
  }
  
  // Replace CSV_URL with the URL of your CSV file
  var csvUrl =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTD5tpbc7FTkmfJNEy_wOE8qtytH2UpOKjs-q74lcmuPXQ2uPmWJ_1KBy09raCz2J8A9j6D0mSm1yAc/pub?gid=42643434&single=true&output=csv';
  
  // Fetch the CSV data using Fetch API
  fetch(csvUrl)
    .then((response) => response.text())
    .then((csvData) => {
      // Parse the CSV data
      var rows = csvData.split('\n');
      for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].split(',');
        var image = cells[4].trim(); // Assuming the image URL is in the fourth column
        var name = cells[0].trim();  // Assuming the name is in the second column
        var dept = cells[3].trim();   // Assuming the dept is in the third column
        createDataDiv(image, name, dept); // Create and append the data div for each entry
      }
    })
    .catch((error) => console.error('Error fetching CSV:', error));