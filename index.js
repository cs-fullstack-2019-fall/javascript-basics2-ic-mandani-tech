//var nameString = prompt("Please enter your Name here");
//alert("Hello " + nameString +"!");
var nameString = prompt("Please enter your Name here");
alert("GoodAfternoon !  " + nameString );
var tnTaxRateFloat = 9.25/100;
var priceString =prompt("Enter a price:  ");
var priceInt= parseInt(priceString);
var priceWithTaxFloat = priceInt + ((9.25/100)* priceInt);
alert("The price with sales tax added is : $"  +  priceWithTaxFloat);