
const list = [
  'carote',
  'frutta',
  'succo',
  'cipolle',
  'the',
  'caffe',
  'pollo',
  'pesce'
];

let counter = 0;

const listCourses = document.querySelector('.list' );
console.log(listCourses);


 while( counter < list.length ) {

  listCourses.innerHTML += `<li>${list[counter]}</li>`;

  counter++;

 };