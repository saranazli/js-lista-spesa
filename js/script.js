
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

// nome eatrtto? no quindi è false 
productToTake = false;

while ( !productToTake ) {
  
  // estraggo un numero (max num = lunghezza elementi lista) che associo agli elementi della lista 
  const numRan = Math.floor( Math.random () * list.length );
  let productEx = list [numRan];

  // pusho il prodotto estratto nell arrey vuota 

  listDone.push('productEx');

  // verifico se è presente nella lista dgli estratti
  productToTake = !listDone.includes(productEx);

  
  //stampo in html il prodotto estratto
  const listCourses = document.querySelector('.list' );
  listCourses.innerHTML = `<li>${productEx}</li>`;

  //il loop si ferma quando il prodotto estratto è 
  productEx = true;
};

