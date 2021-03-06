console.log("Quiz Ninja started");

const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const resultDiv = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    // check answers 
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score+=25;
        }
    });

    console.log(score);
    resultDiv.classList.remove('d-none');

    scrollTo(0,0);
    
    let i = 0;

    const resultTimer = setInterval(()=>{
        i++;
        resultDiv.querySelector('span').textContent = `${i}%`;
        if(score === i){
            clearInterval(resultTimer);
        }    
    }, 50);
});


