const unitsFrom = document.getElementById('units-from');
const unitsTo = document.getElementById('units-to');
const temperatureInput = document.getElementById('temperature');
const convertButton = document.getElementById('convert-button');
const resultDiv = document.getElementById('result');
const formElement = document.getElementById('converter-form');

formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const temperature = temperatureInput.value;
    const fromUnit = unitsFrom.value;
    const toUnit = unitsTo.value;

    let result;

    if (fromUnit === "Celsius" && toUnit === "Celsius") {
        result = temperature;
    } else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        result = (temperature * 9/5) + 32;
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
        result = temperature + 273.15;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        result = (temperature - 32) * 5/9;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Fahrenheit") {
        result = temperature;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
        result = (temperature - 32) * 5/9 + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Kelvin") {
        result = temperature;
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
        result = temperature - 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
        result = (temperature - 273.15) * 9/5 + 32;
    }

    result = Math.round(result * 100) / 100;

    resultDiv.textContent = temperatureInput.value + " " + unitsFrom.value + " is " + result + " " + unitsTo.value;
})