const quizDB = [
    {
        question: "What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "What is the full form of CSS",
        a: "Cascading Style Sheet",
        b: "Cartoon Serial Sheets",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    { 
        question: "What is the full form of HTTP?",
        a: "HyperText Transfer Product",
        b: "HyperText Test Protocol",
        c: "Hey Transfer Protocol",
        d: "HyperText Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "What is the full form of JS?",
        a: "JavaScript", 
        b: "JavaSuper",             
        c: "JustScript",                                 
        d: "JordenShoes",                                       
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1'); 
const option2 = document.querySelector('#option2'); 
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const Inumber = document.querySelector('Inumber');


let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    })
    return answer;
}

deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }

    questionCount++

    deselectAll();

    if(questionCount<quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3>You scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">PLAY AGAIN</button>
        `;
         showScore.classList.remove('scoreArea');
        
    }
});


