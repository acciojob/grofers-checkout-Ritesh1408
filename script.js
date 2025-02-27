const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", function () {
    const priceElements = document.querySelectorAll(".price");
    let sum = 0;

    // Calculate the total sum of all prices
    priceElements.forEach((item) => {
        sum += parseFloat(item.textContent);
    });

    // Check if the total row already exists and remove it before adding a new one
    const existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for the total price
    const totalRow = document.createElement("tr");
    totalRow.id = "totalRow";  // Assign ID to prevent duplicates

    const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "2"); // Span across both columns
    totalCell.style.fontWeight = "bold";
    totalCell.textContent = `Total Price: Rs ${sum.toFixed(2)}`;

    totalRow.appendChild(totalCell);

    // Append the total row inside the table
    const table = document.querySelector("table");
    table.appendChild(totalRow);
});
