'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
var pics =
[
    { image: 'images/1.jpg'},
    { image: 'images/2.jpg'},
    { image: 'images/3.jpg'},
    { image: 'images/4.jpg'},
    { image: 'images/5.jpg'},
    { image: 'images/6.jpg'},
    { image: 'images/1.jpg'}
];


console.log(pics);


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

$('.btshow').on('click', function() {
  $('.hide').show();
});


$('.img').html('<img style="box-shadow: 7px 7px 10px black;" src="' + pics[0].image + '">');



var i = 1;

$('.next').on('click',function(){
    
	$('.img').html('<img style="box-shadow: 7px 7px 10px black;" src="' + pics[i].image + '">');
	i++;

	if (i == pics.length) {
		i = 0;
	}

})

$('.return').on('click',function(){
    
	$('.img').html('<img style="box-shadow: 7px 7px 10px black;" src="' + pics[i].image + '">');
	i--;

	if (i == 0) {
		i = 6;
	}

})
	


$('play').on('click', function(){
	

})










// function hello() {
// 	console.log('Hello');
// }

// setInterval(hello, 1000);



// setInterval(function () {

// 	console.log('Ola!');
    
// }, 1000);



// setTimeout(function () {
// 	console.log('settimeout exécuté');
// }, 3000);

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/


