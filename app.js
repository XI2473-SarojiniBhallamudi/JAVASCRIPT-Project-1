const rightAns = ['B', 'A', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const res = document.querySelector('.res');
form.addEventListener('submit',e=>{
    e.preventDefault();
    let score = 0;
    const userAns = [form.Q1.value, form.Q2.value, form.Q3.value, form.Q4.value];
    userAns.forEach((answer,i)=>{
        if(answer === rightAns[i]){
            score += 25;
        }
    });
    scrollTo(0,0);
    res.classList.remove('d-none');
    let marks = 0;
    const timer = setInterval(()=>{
        res.querySelector('span').textContent = `${marks}/100`;
        if(marks === score)
            clearInterval(timer);
        else
            marks++;
    }, 20);
});