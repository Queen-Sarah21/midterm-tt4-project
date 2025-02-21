document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        const title = document.getElementById("productTitle").value;
        const description = document.getElementById("productDescription").value;
        const price = document.getElementById("productPrice").value;
        const quantity = document.getElementById("productQuantity").value;
        const image = document.getElementById("productImage").files[0];

        if (!title || !description || !price || !quantity || !image) {
            alert("Please fill in all fields.");
            return;
        }

        alert(`Product "${title}" added successfully!`);
        form.reset(); // Reset the form after submission
    });
});