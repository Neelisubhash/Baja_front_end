// script.js

document.getElementById('submitBtn').addEventListener('click', async function () {
    const jsonInput = document.getElementById('jsonInput').value;

    try {
        const response = await fetch('https://projectbajaj.vercel.app/bfhl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonInput
        });

        const data = await response.json();
        document.getElementById('responseSection').style.display = 'block';
        handleCheckboxChange(data);
    } catch (error) {
        console.error('Error:', error);
    }
});

document.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
    checkbox.addEventListener('change', handleCheckboxChange);
});

function handleCheckboxChange(data = null) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (!data) return;

    if (document.querySelector('input[value="Alphabets"]').checked) {
        resultDiv.innerHTML += `<p>Alphabets: ${data.alphabets.join(', ')}</p> `;
    }
    if (document.querySelector('input[value="Numbers"]').checked) {
        resultDiv.innerHTML += `<p>Numbers: ${data.numbers.join(', ')}</p>`;
    }
    if (document.querySelector('input[value="Highest Lowercase Alphabet"]').checked) {
        resultDiv.innerHTML += `<p>Highest Lowercase Alphabet: ${data.highest_lowercase_alphabet.join(', ')}</p>`;
    }
}