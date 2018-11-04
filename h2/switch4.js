var tgl = new Date();
let namaBulan;
let namaHari;
let menit;
let detik;
let jam;

switch (tgl.getMonth()){
    case 0:
        namaBulan = "Januari";
    break;
    case 1:
        namaBulan = "Februari";
    break;
    case 2:
        namaBulan = "Maret";
    break;
    case 3:
        namaBulan = "April";
    break;
    case 4:
        namaBulan = "Mei";
    break;
    case 5:
        namaBulan = "Juni";
    break;
    case 6:
        namaBulan = "Juli";
    case 7:
        namaBulan = "Agustus";
    break;
    case 8:
        namaBulan = "September";
    break;
    case 9:
        namaBulan = "Oktober";
    break;
    case 10:
        namaBulan = "November";
    break;
    case 11:
        namaBulan = "Desember";
    break;
}

switch(tgl.getDay()){
    case 0:
        namaHari = "Minggu";
    break;
    case 1:
        namaHari = "Senin";
    break;
    case 2:
         namaHari = "Selasa";
    break;
    case 3:
        namaHari = "Rabu";
    break;
    case 4:
        namaHari = "Kamis";
    break;
    case 5:
        namaHari = "Jumat";
    break;
    case 6:
        namaHari = "Sabtu";
    break;
}

if(tgl.getMinutes() < 10){
    menit = "0"+tgl.getMinutes();
}else{
    menit = tgl.getMinutes();
}

if(tgl.getSeconds() < 10){
    detik = "0"+tgl.getSeconds();
}else{
    detik = tgl.getSeconds();
}

if(tgl.getHours() < 10){
    jam = "0"+tgl.getHours();
}else{
    jam = tgl.getHours();
}

console.log("Hari ini "+namaHari+", "+tgl.getDate()+" "+namaBulan+" "+tgl.getFullYear()+" Pukul "+jam+":"+menit+":"+detik);