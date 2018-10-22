let s = 120; //jarak a dan b
let av = 60; // kecepatan a
let bv = 40; // kecepatan b
let start_hour = 9; //waktu berangkat

/**
 * yang dicari adalah jarak antara a & b = 0 (tabrakan)
 * jika jarak = kec * waktu
 * dan x = waktu
 * maka 
 *    120 km - ((60km/jam) * x jam) + (40km/jam) * x jam)) = 0 
 * <=> 120 km - (60km/jam *x jam  + 40km/jam *x jam ) = 0
 * <=> 120 km = (60 * x jam) km + (40 * x jam) km
 *    x  = (120/100) jam
 */

//waktu
 var x = 120/100;
 console.log("waktu yang dibutuhkan = "+x+" jam");
 
 //bertabrakan pada saat
 var y = start_hour + x;
 console.log("jam tabrakan = "+Math.floor(y)+" menit ke "+(60*(y - Math.floor(y))));




 