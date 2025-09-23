 
  const generateButton = document.getElementById("generateBtn");
  const numberInput = document.getElementById("numberInput");
  const outputDiv = document.getElementById("tableOutput");

 
  generateButton.addEventListener("click", function () {
  
    const userInput = numberInput.value;
    const number = Number(userInput);

   
    outputDiv.innerHTML = "";

   
    if (isNaN(number) || userInput.trim() === "") {
      outputDiv.innerHTML = "<p style='color:red;'>Please enter a valid number.</p>";
      return;
    }

   
    let tableHTML = `<h2 >Table of ${number}</h2><ul;>`;

    for (let i = 1; i <= 10; i++) {
      const result = number * i;
      tableHTML += `<li>${number} x ${i} = ${result}</li>`;
    }

    tableHTML += "</ul>";

 
    outputDiv.innerHTML = tableHTML;
  });