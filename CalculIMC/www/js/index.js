document.addEventListener('deviceready', false);

function calculateBMI() {
    var weightInput = document.getElementById('weight').value;
    var heightInput = document.getElementById('height').value;
    var resultElement = document.getElementById('result');
    var errorElement = document.getElementById('error');


    resultElement.textContent = '';
    errorElement.textContent = '';

  
    if (!weightInput || !heightInput || weightInput <= 0 || heightInput <= 0) {
        errorElement.textContent = 'Veuillez entrer des valeurs valides pour le poids et la taille.';
        return;
    }

    var weight = parseFloat(weightInput);
    var height = parseFloat(heightInput) / 100; 

    if (isNaN(weight) || isNaN(height)) {
        errorElement.textContent = 'Les valeurs saisies ne sont pas valides.';
        return;
    }

    var bmi = weight / (height * height);
    resultElement.textContent = 'Votre IMC est ' + bmi.toFixed(2);
}
