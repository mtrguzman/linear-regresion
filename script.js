document.getElementById("predict-btn").addEventListener("click", function () {
    const size = document.getElementById("size-input").value;

    if (!size || size <= 0) {
        document.getElementById("result").innerText = "Please enter a valid house size.";
        return;
    }

    // Placeholder prediction logic (will be replaced with API call later)
    const mockPrice = size * 200; // simple fake formula for now

    document.getElementById("result").innerText =
        `Estimated price: $${mockPrice.toLocaleString()}`;
});
