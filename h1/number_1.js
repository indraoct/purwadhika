var x = 4;
var y = 3;
var z = 2;
var w = 0;

/**
 * logikanya :
 * akar pangkat z dari(
 *    (x + (y*z)) / (x*z) 
 * )
 *  */ 

 var bil_atas = (x+(y*z));
 var bil_bawah = (x*y);
 var hasil_pembagian = (bil_atas/bil_bawah);

 w = Math.pow(hasil_pembagian,z);

 console.log("w adalah "+w);

