var question_hari = 485;

//declare var
var tahun;
var tahun_tampil;
var sisa_tahun;

var bulan;
var sisa_bulan;
var bulan_tampil;

var minggu;
var sisa_minggu;
var minggu_tampil;

var hari;

// 1 tahun = 360 hari
tahun = question_hari /360;
tahun_tampil = Math.floor(tahun);
sisa_tahun = (tahun - Math.floor(tahun));
console.log(tahun_tampil+" tahun");

//bulan = sisa_tahun * 12 bulan 
bulan = sisa_tahun * 12;
bulan_tampil = Math.floor(bulan)
sisa_bulan = (bulan - Math.floor(bulan))
console.log(bulan_tampil+" bulan");

//minggu = sisa_bulan * 4 minggu
minggu = sisa_bulan * 4;
minggu_tampil = Math.floor(minggu);
sisa_minggu = (minggu - Math.floor(minggu));
console.log(minggu_tampil+" minggu");

//hari = sisa_minggu * 7
hari = sisa_minggu*7
console.log(Math.round(hari)+" hari")