//Ini Javascript 

//Ini Javascript 

function calculateBMI() {
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const age = parseInt(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters

    if (isNaN(weight) || isNaN(age) || isNaN(height)) {
        alert("Silakan masukkan nilai yang valid.");
        return;
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // Determine BMI category
    let category;
    if (bmi < 18.5) {
        category = "Kurus";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Gemuk";
    } else {
        category = "Obesitas";
    }

    // Display result (BMI and category only)
    const resultElement = document.getElementById("result");
    resultElement.style.display = "block";
    resultElement.innerHTML = `${bmi} <br> Kategori: ${category}`;
}

function resetResult() {
    const resultElement = document.getElementById("result");
    resultElement.style.display = "none";
    resultElement.innerHTML = "";
}

document.querySelector('.download-btn').addEventListener('click', () => {
    alert('Hasil BMI Anda akan diunduh.');
});