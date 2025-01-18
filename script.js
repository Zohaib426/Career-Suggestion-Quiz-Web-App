let currentQuestion = 0;
const answers = {};
let selectedQuestions = [];

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function startQuiz() {
    currentQuestion = 0;
    selectedQuestions = getRandomQuestions(questions, 10);
    showPage('quiz-page');
    displayQuestion();
}

function getRandomQuestions(questions, num) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function displayQuestion() {
    const question = selectedQuestions[currentQuestion];
    document.getElementById('question-text').textContent = question.text;
    document.getElementById('question-number').textContent = `Question ${currentQuestion + 1} of ${selectedQuestions.length}`;
    
    document.getElementById('prev-btn').disabled = currentQuestion === 0;
    document.getElementById('next-btn').textContent = currentQuestion === selectedQuestions.length - 1 ? 'Finish' : 'Next';
    
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
        if (answers[currentQuestion] === option.dataset.value) {
            option.classList.add('selected');
        }
    });
}

function selectOption(event) {
    if (!event.target.classList.contains('option')) return;
    
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    event.target.classList.add('selected');
    answers[currentQuestion] = event.target.dataset.value;
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function nextQuestion() {
    if (!answers[currentQuestion]) {
        alert('Please select an answer before proceeding.');
        return;
    }

    if (currentQuestion === selectedQuestions.length - 1) {
        showResults();
    } else {
        currentQuestion++;
        displayQuestion();
    }
}

function showResults() {
    const totalScore = Object.keys(answers).reduce((score, key) => {
        return score + selectedQuestions[key].weights[answers[key]];
    }, 0);

    let profession = '';
    if (totalScore > 90) {
        profession = 'Software Development';
    } else if (totalScore > 80) {
        profession = 'Data Science';
    } else if (totalScore > 70) {
        profession = 'Cybersecurity';
    } else if (totalScore > 60) {
        profession = 'Project Management';
    } else if (totalScore > 50) {
        profession = 'Marketing';
    } else if (totalScore > 40) {
        profession = 'Human Resources';
    } else if (totalScore > 30) {
        profession = 'Graphic Design';
    } else if (totalScore > 20) {
        profession = 'Content Writing';
    } else if (totalScore > 10) {
        profession = 'Customer Service';
    } else if (totalScore > 5) {
        profession = 'Sales';
    } else {
        profession = 'Creative Arts';
    }

    document.querySelector('.career-recommendations').innerHTML = `
        <div class="recommendation">
            <h3><i class="fas fa-briefcase"></i> ${profession}</h3>
            <p>Based on your answers, a career in ${profession} could be a great fit for you.</p>
        </div>
    `;

    showPage('results-page');
}

function restartQuiz() {
    currentQuestion = 0;
    Object.keys(answers).forEach(key => delete answers[key]);
    showPage('home-page');
}

document.querySelector('.options').addEventListener('click', selectOption);

document.addEventListener('DOMContentLoaded', () => {
    showPage('home-page');
});