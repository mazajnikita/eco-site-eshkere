// ===== Смена фактов на главной странице =====
let facts = [
    "🌍 Один пластиковый пакет разлагается до 400 лет, а используется в среднем 12 минут.",
    "💡 Если выключать свет, выходя из комнаты, за год можно сэкономить до 15% электроэнергии.",
    "🚲 Поездка на велосипеде вместо машины на 5 км экономит около 0,5 кг CO₂.",
    "🍖 На производство 1 кг говядины уходит около 15 000 литров воды.",
    "🧴 Одна батарейка загрязняет 20 квадратных метров почвы, а её переработка почти безотходна.",
    "🌊 Если принимать душ на 2 минуты меньше, за год экономится более 7 000 литров воды."
];
let factIndex = 0;

function rotateFact() {
    let ticker = document.getElementById('factTicker');
    if (!ticker) return;
    factIndex = (factIndex + 1) % facts.length;
    let newFact = document.createElement('div');
    newFact.className = 'fact-item';
    newFact.innerText = facts[factIndex];
    ticker.innerHTML = '';
    ticker.appendChild(newFact);
}

let factInterval = setInterval(rotateFact, 4000);

// ===== Хранилище ответов =====
let answers = {};

// ===== Переход от главной к тесту =====
function startTest() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('testScreen').style.display = 'block';
    clearInterval(factInterval);
}

// ===== Обработка ответа =====
function answer(questionNumber, points, btn) {
    answers[questionNumber] = points;

    let optionsDiv = btn.parentElement;
    let allBtns = optionsDiv.querySelectorAll('.option-btn');
    allBtns.forEach(function(b) {
        b.classList.remove('selected');
    });
    btn.classList.add('selected');

    setTimeout(function() {
        document.getElementById('q' + questionNumber).style.display = 'none';

        let nextQ = questionNumber + 1;
        if (nextQ <= 20) {
            document.getElementById('q' + nextQ).style.display = 'block';
            let progress = Math.min((nextQ / 20) * 100, 100);
            document.getElementById('progressBar').style.width = progress + '%';
        } else {
            calculate();
        }
    }, 250);
}

// ===== Подсчёт результата =====
function calculate() {
    let total = 0;
    for (let i = 1; i <= 20; i++) {
        total += answers[i] || 0;
    }

    let resultText, advices, fact;

    if (total <= 40) {
        resultText = "Ваш экологический след: " + total + " баллов. Отличный результат!";
        advices = [
            "Вы уже делаете многое правильно. Продолжайте сортировать мусор и выбирать пешие прогулки — это снижает углеродный след на 30–40%.",
            "Попробуйте перейти на многоразовые бутылки и сумки даже в мелочах — это экономит до 150 пластиковых упаковок в год.",
            "Поделитесь своим опытом с друзьями: исследования показывают, что личный пример заражает окружающих в 3 раза сильнее лозунгов."
        ];
        fact = "Интересный факт: если бы каждый житель Земли жил так, как люди с низким углеродным следом, глобальные выбросы CO₂ сократились бы на треть уже к 2030 году.";
    } else if (total <= 80) {
        resultText = "Ваш экологический след: " + total + " баллов. Есть куда расти!";
        advices = [
            "Начните с одного дня в неделю без мяса — это экономит около 1 500 литров воды на каждый отказ от 1 кг говядины.",
            "Замените поездки на короткие расстояния пешей прогулкой или велосипедом: так вы сокращаете выбросы CO₂ на 0,5 кг за каждые 5 км.",
            "Поставьте дома вторую урну для пластика и батареек — это уменьшает объём мусора на свалках на 15–20%."
        ];
        fact = "Интересный факт: сортировка мусора одной семьёй за год экономит столько энергии, сколько нужно, чтобы заряжать телефон в течение 3 лет.";
    } else {
        resultText = "Ваш экологический след: " + total + " баллов. Есть над чем поработать.";
        advices = [
            "Сократите использование пластиковых пакетов и бутылок хотя бы вдвое — это самый простой шаг, который сэкономит до 200 литров нефти в год.",
            "Начните выключать свет и технику из розетки, когда они не используются: приборы в режиме ожидания съедают до 10% электроэнергии в доме.",
            "Попробуйте сдавать батарейки и старую технику в пункты приёма — одна батарейка загрязняет 20 квадратных метров почвы, а её переработка почти безотходна."
        ];
        fact = "Интересный факт: если каждый житель России сократит использование пластиковых пакетов хотя бы на 50 штук в год, это уменьшит количество отходов на 7 миллиардов пакетов — их можно выложить в цепочку длиной до Луны и обратно.";
    }

    document.getElementById('result').innerText = resultText;

    let percent = Math.min((total / 120) * 100, 100);
    document.getElementById('scaleFill').style.width = percent + '%';

    let explanation;
    if (total <= 40) {
        explanation = "Максимум — 120 баллов (чем больше, тем выше ваш след). У вас " + total + " — это низкий показатель. Вы уже живёте довольно экологично, и небольшие улучшения дадут заметный результат.";
    } else if (total <= 80) {
        explanation = "Максимум — 120 баллов. У вас " + total + " — средний показатель. Есть привычки, которые можно улучшить без больших усилий, и это заметно снизит ваш след.";
    } else {
        explanation = "Максимум — 120 баллов. У вас " + total + " — высокий показатель. Не пугайтесь: даже два-три простых изменения в месяц заметно улучшат ситуацию.";
    }
    document.getElementById('scoreExplanation').innerText = explanation;

    let adviceHTML = "";
    advices.forEach(function(text, index) {
        adviceHTML += "<p><strong>Совет " + (index + 1) + ":</strong> " + text + "</p>";
    });
    document.getElementById('advice').innerHTML = adviceHTML;

    document.getElementById('fact').innerText = fact;

    document.getElementById('testScreen').style.display = 'none';
    document.getElementById('resultBlock').style.display = 'block';
}

// ===== Пройти заново =====
function restart() {
    answers = {};

    document.querySelectorAll('.option-btn').forEach(function(btn) {
        btn.classList.remove('selected');
    });

    document.getElementById('resultBlock').style.display = 'none';
    document.getElementById('testScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';

    for (let i = 2; i <= 20; i++) {
        document.getElementById('q' + i).style.display = 'none';
    }
    document.getElementById('q1').style.display = 'block';
    document.getElementById('progressBar').style.width = '5%';

    factInterval = setInterval(rotateFact, 4000);
}