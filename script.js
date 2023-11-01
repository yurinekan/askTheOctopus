document.addEventListener('DOMContentLoaded', function () {
    var resultDiv = document.getElementById('result');

    function calculateResult() {
        var input1 = document.getElementById('input1').value;
        var input2 = document.getElementById('input2').value;

        guess.disabled = true;

        guess.classList.add('clickAnimate');
        setTimeout(() => {
            guess.classList.remove('clickAnimate');
        }, 1000);

        // Exibe mensagem de processamento
        resultDiv.textContent = "The octopus is deciding...";

        // Escolhe aleatoriamente qual valor exibir
        var randomIndex = Math.floor(Math.random() * 2);
        var result;

        if (randomIndex === 0) {
            result = input1;
        } else {
            result = input2;
        }

        // Exibe o resultado após um breve intervalo
        setTimeout(function () {
            resultDiv.textContent = "The octopus said: " + result;
            guess.textContent = "Guess again"
            guess.disabled = false;

            set(ref(database, 'inputs/input1'), input1);
            set(ref(database, 'inputs/input2'), input2);
        }, 2000);

    }
    var guess = document.getElementById('guess');
    guess.addEventListener('click', calculateResult);
});