// this isn't working - jquery event




var clicks1 = 0;
var clicks2 = 0;

function clickCat1(e) {
	clicks1 ++;
  //the element has been clicked... do stuff here
  $('#count1').html(clicks1);
  console.log('clicked1');
  

};

function clickCat2(e) {
	clicks2 ++;
  //the element has been clicked... do stuff here
  $('#count2').html(clicks2);
  console.log('clicked2');
  

};




function init () {
	console.log("init");
	// this isn't working for some reason
	//$('#kitten1').click(clickCat1());
	//$('#kitten2').click(clickCat2());
	$('#kitten1name').html("Kitten 1 Name");
	$('#kitten2name').html("Kitten 2 Name");
}


$(init);



