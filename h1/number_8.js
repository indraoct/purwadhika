let s = 120; //jarak a dan b
let av = 60; // kecepatan a
let bv = 40; // kecepatan b
let start_hour = 9; //waktu berangkat

/**
 * yang dicari adalah jarak antara a & b = 0 (tabrakan)
 * jika jarak = kec * waktu
 * dan t = waktu
 * maka 
 *    s - ( av * x jam) + (bv * x jam)) = 0 
 * <=> s km - (avkm/jam * t jam  + bv km/jam *x jam ) = 0
 * <=> s km = (av * t jam) km + (40 * t jam) km
 * <=> s km = (av + bv )t * jam * km
 *     t  = s/(av + bv)  jam
 */

//waktu
 var t = s/(av+bv);
 console.log("waktu yang dibutuhkan = "+t+" jam");
 
 //bertabrakan pada saat
 var y = start_hour + t;
 console.log("tabrakan pada saat jam = "+Math.floor(y)+", menit ke "+Math.round(60*(y - Math.floor(y))));




 