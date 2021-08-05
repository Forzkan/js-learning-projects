const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const html = `
        <span>${hours}</span> :
        <span>${minutes}</span> :
        <span>${seconds}</span>
    `;
    clock.innerHTML = html;
}

setInterval(tick, 1000);


// check if today with dateFns.
const now = new Date();
console.log(dateFns.isToday(now));


// formatting options with dateFns
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'MM'));
console.log(dateFns.format(now, 'dd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd,Do,MMMM,YYYY'));

//comparing dates with dateFns

const before = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix:true}));