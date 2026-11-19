
let form = document.getElementById("bmiForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get user values
    let name = document.getElementById("name").value.trim();
    let gender = document.getElementById("gender").value;
    let age = Number(document.getElementById("age").value);
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);

    // Validation
    if (!name || !gender || !age || !height || !weight) {
        alert("Please fill all fields!");
        return;
    }

    if (age < 2 || age > 120 ||
        height < 50 || height > 250 ||
        weight < 2 || weight > 500) {
        alert("Please enter valid details!");
        return;
    }

    // Convert height into meters
    let heightInMeter = height / 100;

    // Calculate BMI
    let bmi = weight / (heightInMeter * heightInMeter);

    // Find BMI category (adult classification)
    let category = "";
    let message = "";

    if (bmi < 18.5) {
        category = "Underweight";
        message = "Your BMI is below the adult healthy range.";
    }
    else if (bmi < 25) {
        category = "Normal Weight";
        message = "Your BMI is within the adult healthy range.";
    }
    else if (bmi < 30) {
        category = "Overweight";
        message = "Your BMI is above the adult healthy range.";
    }
    else {
        category = "Obesity";
        message = "Your BMI is in the adult obesity range.";
    }

    // Calculate healthy weight range
    let minWeight = 18.5 * heightInMeter * heightInMeter;
    let maxWeight = 24.9 * heightInMeter * heightInMeter;

    // Display results
    document.getElementById("bmiValue").innerText =
        bmi.toFixed(2);

    document.getElementById("category").innerText =
        category;

    document.getElementById("message").innerText =
        message;

    document.getElementById("userInfo").innerText =
        "Name: " + name + " | Age: " + age +
        " | Gender: " + gender;

    document.getElementById("healthyWeight").innerText =
        "Adult healthy BMI weight range: " +
        minWeight.toFixed(1) + " - " +
        maxWeight.toFixed(1) + " kg";

    document.getElementById("result").classList.remove("hidden");

});


// Reset result when form is reset
form.addEventListener("reset", function () {
    document.getElementById("result").classList.add("hidden");
});
