const quizData = [
        {
            question: 'How old is Florin?',
            a: '10',
            b: '17',
            c: '26',
            d: '110',
            correct: 'c'
        },{
            question: 'What is the most used programming language in 2019?',
            a: 'Java',
            b: 'C',
            c: 'Python',
            d: 'JavaScript',
            correct: 'd'
        },{
            question: 'Who is the president of Us?',
            a: 'Florin Pop',
            b: 'Donald Trump',
            c: 'Ivan Saldano',
            d: 'Mihai Andriy',
            correct: 'b'
        },{
            question: 'What does HTML stand for?',
            a: 'HyperText Markup Language',
            b: 'Cascading Style Sheet',
            c: 'Jason Object Notation',
            d: 'Helicopters Terminals Motorboats Lamborginis',
            correct: 'a'
        },{
            question: 'What year was JS launched',
            a: '1196',
            b: '1995',
            c: '1994',
            d: 'none of the above',
            correct: 'b'
        },

    ];

const quiz = document.getElementById('quiz')
const answersEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {
    deleteAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answersEl.forEach((answersEl) => {

        if (answersEl.checked) {
            answer = answersEl.id;
            console.log(answersEl.id)
        }
    });

    return answer;
}

function deleteAnswers() {
    answersEl.forEach((answersEl) => {
    answersEl.checked = false;

    });

}

submitBtn.addEventListener("click", () => {
        // check to see the answer
        const answer = getSelected();

        if (answer) {
            if(answer === quizData[currentQuiz]
                .correct) {
                score++;
            }
            currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `<h2>You answered correctly at  ${score} / ${quizData.length} questions</h2>`
            }
        }


})