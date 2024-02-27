
/*
Data una lista della spesa
stampare sulla pagina
gli elementi della lista individualmente con un ciclo while.
*/

// la lista della spesa da cui estrarre i prodotti e stampare in html
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

// lista di prodotti estratti
const listDone = [];

let counter = 0;

// nome eatrtto? no quindi è false 
let productToTake = false;

while( !productToTake ) {
  
  // estraggo un numero (max num = lunghezza elementi lista) che associo agli elementi della lista 

  // const numRan = Math.floor( Math.random () * list.length );
  // let productEx = list[numRan];


  // pusho il prodotto estratto nell arrey vuota se non è inclusa già
  // if ( !listDone.includes(productEx)) {
  //   listDone.push(productEx);
  //   console.log(listDone);
  // };

  let productEx = list [counter];

  listDone.push(productEx);
  
  //stampo in html dentro all ul .list il prodotto estratto
  const listCourses = document.querySelector('.list' );
  listCourses.innerHTML = `<li>${listDone}</li>`;


  /// condizione nella quale si ferma il loop
  if (listDone.length === list.length){
    productToTake = true; 
  }

  productEx = list[counter++];
};



