document.addEventListener('deviceready', false);


function calculateAge() {
    var dobInput = document.getElementById('dob').value;
    var resultElement = document.getElementById('result');
    var errorElement = document.getElementById('error');

   
    resultElement.textContent = '';
    errorElement.textContent = '';

   
    if (!/^\d{2}-\d{2}-\d{4}$/.test(dobInput)) {
        errorElement.textContent = 'Le format de la date de naissance est incorrect. Utilisez le format jj-mm-aaaa.';
        return;
    }

    var parts = dobInput.split('-');
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    
    if (month < 1 || month > 12) {
        errorElement.textContent = 'Le mois doit être entre 1 et 12.';
        return;
    }

    if (day < 1 || day > 31) {
        errorElement.textContent = 'Le jour doit être entre 1 et 31.';
        return;
    }

    if (year < 1900 || year > 3000) {
        errorElement.textContent = 'L\'année doit être entre 1900 et 3000.';
        return;
    }

    var birthDate = new Date(year, month - 1, day);
    if (birthDate > new Date() || isNaN(birthDate.getTime())) {
        errorElement.textContent = 'La date de naissance est invalide.';
        return;
    }

    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    resultElement.textContent = 'Votre âge est ' + age + ' ans.';
}
