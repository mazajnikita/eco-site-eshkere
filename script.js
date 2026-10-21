// ===== 15 Фактов для главной страницы =====
const startFacts = [
    "🌍 Один пластиковый пакет разлагается до 400 лет, а используется в среднем 12 минут.",
    "💡 Если выключать свет, выходя из комнаты, за год можно сэкономить до 15% электроэнергии.",
    "🚲 Поездка на велосипеде вместо машины на 5 км экономит около 0,5 кг CO₂.",
    "🍖 На производство 1 кг говядины уходит около 15 000 литров воды.",
    "🧴 Одна батарейка загрязняет 20 квадратных метров почвы.",
    "🌊 Если принимать душ на 2 минуты меньше, за год экономится более 7 000 литров воды.",
    "👕 На производство одной хлопковой футболки уходит 2 700 литров воды.",
    "📱 Выброшенный смартфон содержит золото, серебро и медь — ценные ресурсы.",
    "☕ Одноразовые кофейные стаканчики почти не поддаются переработке из-за внутреннего слоя пластика.",
    "🐟 90% морских птиц имеют пластик в желудке.",
    "🔌 Зарядка от телефона, оставленная в розетке, продолжает потреблять энергию.",
    "🚿 Душ в течение 10 минут расходует столько же воды, сколько нужно человеку для питья на месяц.",
    "🥩 Для производства 1 кг курицы нужно около 4000 литров воды, а для говядины — 15000.",
    "📦 Картонные коробки можно перерабатывать до 7 раз.",
    "🚗 Один автомобиль за год выбрасывает в атмосферу около 4 тонн CO₂."
];

let factIndex = 0;
let factInterval;

function rotateFact() {
    let ticker = document.getElementById('factTicker');
    if (!ticker) return;
    factIndex = (factIndex + 1) % startFacts.length;
    let newFact = document.createElement('div');
    newFact.className = 'fact-item';
    newFact.innerText = startFacts[factIndex];
    ticker.innerHTML = '';
    ticker.appendChild(newFact);
}

function startFactRotation() {
    clearInterval(factInterval);
    factInterval = setInterval(rotateFact, 4000);
}

// ===== 35 Вопросов =====
const questionsData = [
    { text: "Как часто вы принимаете ванну?", options: [{t:"Каждый день", v:10}, {t:"Пару раз в неделю", v:5}, {t:"Редко", v:0}], category: "water" },
    { text: "Сколько минут вы обычно стоите в душе?", options: [{t:"Больше 15 минут", v:10}, {t:"Около 10 минут", v:5}, {t:"5 минут или меньше", v:0}], category: "water" },
    { text: "Выключаете ли вы кран, пока чистите зубы?", options: [{t:"Всегда", v:0}, {t:"Иногда", v:5}, {t:"Никогда", v:10}], category: "water" },
    { text: "Есть ли у вас дома фильтр для воды?", options: [{t:"Да, есть", v:0}, {t:"Планирую купить", v:5}, {t:"Нет, покупаю бутилированную", v:10}], category: "water" },
    { text: "Как вы моете посуду?", options: [{t:"В посудомоечной машине", v:0}, {t:"Вручную, закрывая кран", v:5}, {t:"Вручную, с открытым краном", v:10}], category: "water" },
    { text: "Как вы добираетесь до работы/учебы?", options: [{t:"На личной машине", v:10}, {t:"На общественном транспорте", v:5}, {t:"Пешком или на велосипеде", v:0}], category: "transport" },
    { text: "Как часто вы летаете на самолёте?", options: [{t:"Несколько раз в год", v:10}, {t:"Раз в год", v:5}, {t:"Почти никогда", v:0}], category: "transport" },
    { text: "Используете ли вы каршеринг вместо личного авто?", options: [{t:"Да, часто", v:0}, {t:"Иногда", v:5}, {t:"У меня нет авто", v:0}], category: "transport" },
    { text: "Выбираете ли вы поезд вместо самолёта на средние расстояния?", options: [{t:"Всегда, если есть возможность", v:0}, {t:"Иногда", v:5}, {t:"Нет, самолет быстрее", v:10}], category: "transport" },
    { text: "Прогреваете ли вы машину зимой на стоянке?", options: [{t:"Больше 10 минут", v:10}, {t:"Около 5 минут", v:5}, {t:"Не прогреваю или нет машины", v:0}], category: "transport" },
    { text: "Выключаете ли вы свет, выходя из комнаты?", options: [{t:"Всегда", v:0}, {t:"Иногда забываю", v:5}, {t:"Часто оставляю включённым", v:10}], category: "energy" },
    { text: "Используете ли вы энергосберегающие лампы?", options: [{t:"Да, везде", v:0}, {t:"Только в некоторых комнатах", v:5}, {t:"Нет, обычные лампы", v:10}], category: "energy" },
    { text: "Выключаете ли вы технику из розетки на ночь?", options: [{t:"Всегда", v:0}, {t:"Иногда", v:5}, {t:"Никогда, оставляю в режиме ожидания", v:10}], category: "energy" },
    { text: "Утеплены ли у вас окна на зиму?", options: [{t:"Да, современные стеклопакеты", v:0}, {t:"Старые окна, но утепляю", v:5}, {t:"Нет, дует", v:10}], category: "energy" },
    { text: "Насколько часто вы стираете при 60°C и выше?", options: [{t:"Редко, в основном при 30-40°C", v:0}, {t:"Иногда", v:5}, {t:"Всегда стираю в горячей воде", v:10}], category: "energy" },
    { text: "Сортируете ли вы мусор?", options: [{t:"Да, всегда", v:0}, {t:"Иногда", v:5}, {t:"Нет", v:10}], category: "waste" },
    { text: "Сколько пластиковых пакетов вы берёте в магазине?", options: [{t:"Каждый раз новый", v:10}, {t:"Иногда забываю свою сумку", v:5}, {t:"Всегда со своей сумкой", v:0}], category: "waste" },
    { text: "Как часто вы покупаете воду в пластиковых бутылках?", options: [{t:"Каждый день", v:10}, {t:"Пару раз в неделю", v:5}, {t:"Почти никогда, ношу с собой", v:0}], category: "waste" },
    { text: "Сдаёте ли вы батарейки в специальные пункты?", options: [{t:"Да, всегда", v:0}, {t:"Иногда", v:5}, {t:"Выбрасываю в обычный мусор", v:10}], category: "waste" },
    { text: "Сдаёте ли вы старую одежду в переработку или благотворительность?", options: [{t:"Да, регулярно", v:0}, {t:"Иногда", v:5}, {t:"Выбрасываю в мусор", v:10}], category: "waste" },
    { text: "Покупаете ли вы вещи импульсивно на распродажах?", options: [{t:"Часто", v:10}, {t:"Иногда", v:5}, {t:"Почти никогда", v:0}], category: "waste" },
    { text: "Есть ли у вас дома многоразовые мешки для овощей?", options: [{t:"Да, пользуюсь", v:0}, {t:"Есть, но забываю", v:5}, {t:"Нет, беру пластиковые", v:10}], category: "waste" },
    { text: "Как часто вы заказываете доставку еды в пластиковой упаковке?", options: [{t:"Почти каждый день", v:10}, {t:"Пару раз в неделю", v:5}, {t:"Редко или никогда", v:0}], category: "waste" },
    { text: "Используете ли вы многоразовую бутылку для воды?", options: [{t:"Да, всегда", v:0}, {t:"Иногда", v:5}, {t:"Нет, покупаю пластиковые", v:10}], category: "waste" },
    { text: "Сдаёте ли вы макулатуру?", options: [{t:"Да, регулярно", v:0}, {t:"Иногда", v:5}, {t:"Нет", v:10}], category: "waste" },
    { text: "Покупаете ли вы продукты на развес (без упаковки)?", options: [{t:"Да, где возможно", v:0}, {t:"Иногда", v:5}, {t:"Нет, только упакованные", v:10}], category: "waste" },
    { text: "Как часто вы едите мясо?", options: [{t:"Каждый день", v:10}, {t:"Несколько раз в неделю", v:5}, {t:"Редко или никогда", v:0}], category: "food" },
    { text: "Покупаете ли вы местные продукты?", options: [{t:"Стараюсь всегда", v:0}, {t:"Иногда", v:5}, {t:"Редко, беру что дешевле", v:10}], category: "food" },
    { text: "Выбрасываете ли вы еду (просрочка, недоеденное)?", options: [{t:"Часто", v:10}, {t:"Иногда", v:5}, {t:"Почти никогда", v:0}], category: "food" },
    { text: "Выращиваете ли вы что-то сами (зелень, овощи)?", options: [{t:"Да, на даче или подоконнике", v:0}, {t:"Планирую", v:5}, {t:"Нет", v:10}], category: "food" },
    { text: "Как часто вы пьёте кофе в одноразовых стаканчиках?", options: [{t:"Каждый день", v:10}, {t:"Пару раз в неделю", v:5}, {t:"Никогда, беру свою кружку", v:0}], category: "food" },
    { text: "Есть ли у вас дома живые растения?", options: [{t:"Да, много", v:0}, {t:"Несколько", v:5}, {t:"Нет", v:10}], category: "nature" },
    { text: "Участвуете ли вы в субботниках или эко-акциях?", options: [{t:"Да, регулярно", v:0}, {t:"Иногда", v:5}, {t:"Никогда", v:10}], category: "nature" },
    { text: "Используете ли вы бумагу с двух сторон при печати?", options: [{t:"Всегда", v:0}, {t:"Иногда", v:5}, {t:"Никогда, печатаю на одной", v:10}], category: "nature" },
    { text: "Заменяете ли вы бумажные квитанции на электронные?", options: [{t:"Да, везде, где можно", v:0}, {t:"Иногда", v:5}, {t:"Нет, беру бумажные", v:10}], category: "nature" },
    { text: "Сдаёте ли вы старую технику в переработку?", options: [{t:"Да, в специальные пункты", v:0}, {t:"Иногда", v:5}, {t:"Выбрасываю в обычный мусор", v:10}], category: "nature" },
    { text: "Выбираете ли вы товары с экомаркировкой?", options: [{t:"Всегда, если есть выбор", v:0}, {t:"Иногда", v:5}, {t:"Не обращаю внимания", v:10}], category: "nature" },
    { text: "Отдаёте ли вы предпочтение товарам из переработанного сырья?", options: [{t:"Да", v:0}, {t:"Иногда", v:5}, {t:"Нет, это неважно", v:10}], category: "nature" }
];

const advicesData = {
    water: [
        "Начните с 5-минутного душа. Это экономит до 100 литров воды за раз.",
        "Выключайте кран, пока чистите зубы — экономия до 15 литров в минуту.",
        "Установите фильтр для воды вместо покупки пластиковых бутылок.",
        "Мойте посуду в посудомоечной машине или закрывая кран — это экономит до 60 литров."
    ],
    transport: [
        "Попробуйте один день в неделю ездить на работу на общественном транспорте или велосипеде.",
        "Для коротких поездок (до 2 км) выбирайте пешую прогулку — экономия топлива и здоровье.",
        "Старайтесь реже пользоваться самолётом на средних расстояниях — поезд экологичнее.",
        "Не прогревайте машину дольше 2–3 минут зимой — современные двигатели этого не требуют."
    ],
    energy: [
        "Начните выключать технику из розетки на ночь — это экономит до 10% электроэнергии.",
        "Замените обычные лампы на LED хотя бы в самых используемых комнатах.",
        "Стирайте при 30–40°C вместо 60°C — это экономит до 40% энергии на стирку.",
        "Утеплите окна на зиму — это снижает расходы на отопление до 20%."
    ],
    waste: [
        "Носите с собой многоразовую сумку для покупок и складную бутылку для воды.",
        "Сдавайте батарейки и старую технику в специальные пункты приёма.",
        "Старайтесь не покупать импульсивно — вещи, которые не нужны, быстро становятся мусором.",
        "Сортируйте мусор хотя бы на две фракции: пластик/бумага и остальное."
    ],
    food: [
        "Попробуйте один день в неделю без мяса — это снижает ваш водный и углеродный след.",
        "Покупайте местные продукты — их транспортировка наносит меньше вреда.",
        "Планируйте меню на неделю, чтобы не выбрасывать просроченную еду.",
        "Носите свою кружку для кофе — одноразовые стаканчики почти не перерабатываются."
    ],
    nature: [
        "Заведите дома несколько неприхотливых растений — они очищают воздух.",
        "Используйте бумагу с двух сторон и выбирайте электронные квитанции.",
        "Выбирайте товары с экомаркировкой, если есть выбор.",
        "Присоединяйтесь к местным субботникам или эко-акциям — это заражает окружающих."
    ]
};

const endFacts = [
    "Если бы каждый житель Земли жил так, как люди с низким углеродным следом, глобальные выбросы CO₂ сократились бы на треть уже к 2030 году.",
    "Сортировка мусора одной семьёй за год экономит столько энергии, сколько нужно для зарядки телефона в течение 3 лет.",
    "Если каждый житель России сократит использование пластиковых пакетов хотя бы на 50 штук в год, это уменьшит количество отходов на 7 миллиардов пакетов.",
    "Один гектар леса поглощает 6–7 тонн CO₂ в год — это эквивалентно выбросам среднего автомобиля за 2 года.",
    "На производство одной пары джинсов уходит около 7 500 литров воды.",
    "Энергия, сэкономленная от переработки одной алюминиевой банки, позволяет смотреть телевизор 3 часа.",
    "Около 8 миллионов тонн пластика ежегодно попадает в океан — это как выбросить мусоровоз каждую минуту.",
    "Если выключить свет в комнате на 1 час, экономится столько энергии, сколько нужно, чтобы вскипятить 5 литров воды.",
    "Старые мобильные телефоны содержат золото, медь и серебро — если их не перерабатывать, эти ресурсы теряются навсегда.",
    "Дерево, посаженное сегодня, через 10 лет будет поглощать около 22 кг CO₂ в год.",
    "Один бассейн олимпийского размера — это примерно 2,5 миллиона литров воды. Столько экономит семья за 3 года, если выключает кран при чистке зубов.",
    "Бумажный пакет разлагается около 1 месяца, а пластиковый — до 400 лет.",
    "Производство одной говяжьей котлеты требует столько воды, сколько нужно для 25 ванн.",
    "Если все люди выключат свет на 1 час, это сэкономит энергию, достаточную для работы небольшого города в течение дня.",
    "Только 9% всего произведённого пластика было переработано за всю историю человечества."
];

// ===== Логика приложения =====
let currentQuestion = 0;
let userAnswers = {};

function startTest() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('testScreen').style.display = 'block';
    clearInterval(factInterval);
    currentQuestion = 0;
    userAnswers = {};
    renderQuestion();
}

function renderQuestion() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    
    const q = questionsData[currentQuestion];
    const qDiv = document.createElement('div');
    qDiv.className = 'question';
    
    const p = document.createElement('p');
    p.innerText = (currentQuestion + 1) + ". " + q.text;
    qDiv.appendChild(p);
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt.t;
        
        if (userAnswers[currentQuestion] && userAnswers[currentQuestion].index === index) {
            btn.classList.add('selected');
        }
        
        btn.onclick = () => selectAnswer(opt.v, index, q.category);
        optionsDiv.appendChild(btn);
    });
    
    qDiv.appendChild(optionsDiv);
    container.appendChild(qDiv);
    
    const progressPercent = ((currentQuestion + 1) / questionsData.length) * 100;
    document.getElementById('progressBar').style.width = progressPercent + '%';
    document.getElementById('backBtn').style.display = currentQuestion > 0 ? 'block' : 'none';
}

function selectAnswer(points, optionIndex, category) {
    userAnswers[currentQuestion] = {
        points: points,
        category: category,
        index: optionIndex
    };
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questionsData.length) {
            renderQuestion();
        } else {
            calculate();
        }
    }, 250);
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

function calculate() {
    let totalPoints = 0;
    let categoryScores = { water: 0, transport: 0, energy: 0, waste: 0, food: 0, nature: 0 };

    for (let key in userAnswers) {
        const ans = userAnswers[key];
        totalPoints += ans.points;
        categoryScores[ans.category] += ans.points;
    }

    const maxPoints = 350;
    document.getElementById('testScreen').style.display = 'none';
    document.getElementById('resultBlock').style.display = 'block';

    document.getElementById('result').innerText = "Вы набрали " + totalPoints + " из " + maxPoints + " баллов";

    let percent = Math.min((totalPoints / maxPoints) * 100, 100);
    document.getElementById('scaleFill').style.width = percent + '%';

    let explanation;
    if (totalPoints <= 100) {
        explanation = "У вас низкий экологический след. Вы уже отлично заботитесь о планете, и ваши привычки можно назвать примером для подражания. Продолжайте в том же духе!";
    } else if (totalPoints <= 220) {
        explanation = "У вас средний экологический след. Вы делаете много правильных вещей, но есть зоны, где можно улучшить результат без серьёзных усилий. Вот что стоит подтянуть в первую очередь:";
    } else {
        explanation = "У вас высокий экологический след. Не пугайтесь — даже несколько простых изменений в повседневной жизни могут дать огромный результат. Начните с этих советов:";
    }
    document.getElementById('scoreExplanation').innerText = explanation;

    let sortedCategories = Object.keys(categoryScores).sort((a, b) => categoryScores[b] - categoryScores[a]);
    let selectedAdvices = [];
    
    for (let i = 0; i < 3; i++) {
        let cat = sortedCategories[i];
        let catAdvices = advicesData[cat];
        let randomAdvice = catAdvices[Math.floor(Math.random() * catAdvices.length)];
        selectedAdvices.push(randomAdvice);
    }

    let adviceHTML = "";
    selectedAdvices.forEach(function(text, index) {
        adviceHTML += "<p><strong>Совет " + (index + 1) + ":</strong> " + text + "</p>";
    });
    document.getElementById('advice').innerHTML = adviceHTML;

    let randomFact = endFacts[Math.floor(Math.random() * endFacts.length)];
    document.getElementById('fact').innerText = "💡 " + randomFact;
}

function restart() {
    document.getElementById('resultBlock').style.display = 'none';
    document.getElementById('testScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
    
    currentQuestion = 0;
    userAnswers = {};
    startFactRotation();
}

window.onload = function() {
    startFactRotation();
};
