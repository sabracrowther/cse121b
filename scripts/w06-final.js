/* W05: Programming Tasks */

/* Declare and initialize global variables */
/*import { getQuizData } from './scripts/quiz-data.js';*/
import { getQuizData } from './quiz-data.js';
let trivia = [];

/* async makeQuiz Function */

async function makeQuiz(quizInfo) {
    const displayQuestion = document.querySelector('#questions');
        const articleElem = document.createElement('article');
        displayQuestion.appendChild(articleElem);
        
    try {
        
        const question = quizInfo.question;
        const correctAnswer = quizInfo.correct_answer;
        const incorrectAnswers = quizInfo.incorrect_answers;

        const allAnswers = [...incorrectAnswers, correctAnswer];
        allAnswers.sort(() => Math.random() - 0.5); /*shuffle the answers*/

        /*display buttons for questions and answers*/
        const questionText = document.createElement('p');
        const questionTextNode = document.createTextNode(`Question: ${decodeHTMLEntities(question)}`);
        questionText.appendChild(questionTextNode);
        articleElem.appendChild(questionText);
        /*articleElem.textContent = `Question: ${question}`;*/
        /*create a button for each answer*/
        allAnswers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.textContent = `${index + 1}. ${decodeHTMLEntities(answer)}`;
            button.addEventListener('click', () => checkAnswer(answer, correctAnswer));
            articleElem.appendChild(button);
        });
    } catch (error) {
        console.error(`An error occurred:`, error);
    }
    
}

function checkAnswer(selectedAnswer, correctAnswer) {
    const displayAnswer = document.querySelector('#answer');
    if (selectedAnswer === correctAnswer) {
        displayAnswer.textContent = `Correct`;
        console.log(`Correct`);
    } else {
        displayAnswer.textContent = `Incorrect. The correct answer is: ${decodeHTMLEntities(correctAnswer)}`;
        console.log(`Incorrect. The correct answer is: ${correctAnswer}`);
    }
    
}

function decodeHTMLEntities(text) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
}

/* reset Function */
function reset() {
    document.querySelector('#questions').textContent = '';
   
}

document.querySelector('#getQuestionButton').addEventListener('click',() =>{
    const diffSelect = document.querySelector('#difficulty');
      const selectedDifficulty = diffSelect.value;
      reset();
    
      switch (selectedDifficulty) {
        case 'easy':
          getTriviaQuestions('easy');
          break;
        case 'medium':
          getTriviaQuestions('medium');
          break;
        case 'hard':
          getTriviaQuestions('hard');
          break;
        default:
          break;
    }
    }
);


async function getTriviaQuestions(difficulty) {
    /*get 10 questions based on the difficulty*/
    trivia = await getQuizData(10, difficulty);
    if (trivia.length > 0) {
        makeQuiz(trivia[0]);
    } else {
        console.error(`There are no ${difficulty} questons.`);
    }
    
}



getTriviaQuestions('easy');

/* Event Listener */
/* sortBy Function */

/*function sortBy(templeList) {
    reset();
    let sortedTemples = templeList.map((x) => x);
    sortedTemples.sort(compare);
    return sortedTemples;
}*/
