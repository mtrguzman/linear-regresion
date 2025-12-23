const API_URL = "https://ml-house-price-backend.onrender.com";  

document.getElementById("predict-btn").addEventListener("click", async function () {
    const size = document.getElementById("size-input").value;
    const resultDiv = document.getElementById("result");

    if (!size || size <= 0) {
        resultDiv.innerText = "Please enter a valid house size.";
        return;
    }

    // Show loading state
    resultDiv.innerText = "Predicting...";

    try {
        const response = await fetch(`${API_URL}/predict?size=${size}`);

        if (!response.ok) {
            throw new Error("API returned an error");
        }

        const data = await response.json();

        resultDiv.innerText = `Estimated price: $${data.predicted_price.toLocaleString()}`;
    } catch (error) {
        resultDiv.innerText = "Error: Unable to get prediction. Please try again later.";
        console.error(error);
    }
});
