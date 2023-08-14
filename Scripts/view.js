// Function to create and append a new data div for each entry
function createDataDiv(image, name, dept) {
  const div = document.createElement('div');
  div.classList.add('displayimage');

  const img = new Image();
  img.classList.add('img');
  img.src = image;
  div.appendChild(img);

  const div2 = document.createElement('div');
  div2.classList.add('info');

  const nameParagraph = document.createElement('p');
  nameParagraph.classList.add('name');
  nameParagraph.textContent = name;
  div2.appendChild(nameParagraph);

  const deptParagraph = document.createElement('p');
  deptParagraph.classList.add('dept');
  deptParagraph.textContent = dept;
  div2.appendChild(deptParagraph);

  div.appendChild(div2);
  return div;
}
var csvUrl =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTD5tpbc7FTkmfJNEy_wOE8qtytH2UpOKjs-q74lcmuPXQ2uPmWJ_1KBy09raCz2J8A9j6D0mSm1yAc/pub?gid=42643434&single=true&output=csv';
// Fetch the CSV data using Fetch API
fetch(csvUrl)
  .then((response) => response.text())
  .then((csvData) => {
    const rows = csvData.split('\n');
    const displayImages = [];

    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].split(',');
      const image = cells[4].trim();
      const name = cells[0].trim();
      const dept = cells[3].trim();

      if (image && image !== "undefined") {
        displayImages.push({ image, name, dept });
      }
    }

    // Display "No entries" message if no data is available
    const dataContainer1 = document.getElementById('dataContainer');
    if (displayImages.length === 0) {
      const noEntriesDiv = document.createElement('div');
      noEntriesDiv.classList.add('noEntries');
      const noentryParagraph = document.createElement('p');
      noentryParagraph.classList.add('noentry');
      noentryParagraph.textContent =
        'The canvas is empty now, waiting for your breathtaking captures to fill it with art and inspiration.';
      const createnew = document.createElement('a');
      createnew.classList.add('createnew');
      createnew.href = 'enter.html';
      createnew.textContent = 'Make an entry now >';
      noEntriesDiv.appendChild(noentryParagraph);
      noEntriesDiv.appendChild(createnew);
      dataContainer1.appendChild(noEntriesDiv);
    } else {
      const fragment = document.createDocumentFragment();
      displayImages.forEach((entry) => {
        const dataDiv = createDataDiv(entry.image, entry.name, entry.dept);
        fragment.appendChild(dataDiv);
      });
      dataContainer1.appendChild(fragment);
    }
  })
  .then(() => {
    const container2 = document.getElementById("container2");
    const container1 = document.getElementById("container1");

    setTimeout(() => {
      container2.classList.add("hide");
      container1.classList.remove("hide");
    }, 1300);
  })
  .catch((error) => console.error('Error fetching CSV:', error));

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

const imgdrg = document.querySelector("img");
imgdrg.ondragstart = () => {
  return false;
};
