const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", function () {
    const priceElements = document.querySelectorAll(".price");
    let sum = 0;

    // Calculate the total sum of all prices
    priceElements.forEach((item) => {
        let priceValue = parseFloat(item.textContent.trim());

        // Check if the parsed value is a number, otherwise default to 0
        if (!isNaN(priceValue)) {
            sum += priceValue;
        }
    });

    // Remove existing total row if present
    let existingTotalRow = document.getElementById("ans");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for the total price
    const totalRow = document.createElement("tr");
    totalRow.id = "ans";  // This ID is important for Cypress tests

    const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "2"); // Span across both columns
    totalCell.style.fontWeight = "bold";
    totalCell.textContent = `Total Price: Rs ${sum.toFixed(2)}`;

    totalRow.appendChild(totalCell);

    // Append the total row inside the table
    const table = document.querySelector("table");
    table.appendChild(totalRow);
});
