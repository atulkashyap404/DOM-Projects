const form = document.querySelector('form');
const results = document.querySelector('#results');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please enter valid height';
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please enter valid weight';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // show result.
        
        results.innerHTML = `<span>Your BMI is: ${bmi}</span>`
    }
});









