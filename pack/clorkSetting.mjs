const box = document.getElementById('root');
//box = new Date();

// const clork = new Date();
// clork.setFullYear(2023);
// clork.setMonth(3); /// 3번째 -> 4월
// clork.setDate(5); //5번째 -> 금요일

// console.log(clork);

const body = document.querySelector('body');
body.style.display = 'flex';
body.style.flexDirection = 'row';
body.style.justifyContent = 'center';


box.textContent = new Date();
box.style.backgroundColor = 'lightblue';
box.style.width = '450px';
box.style.height = '100px';
box.style.border = '2px solid black';
box.style.display = 'flex';
box.style.flexDirection = 'row';
box.style.justifyContent = 'center';
box.style.alignItems = 'center';