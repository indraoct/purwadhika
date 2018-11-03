var tgl = new Date();
let namaBulan;
let namaHari;
let menit;

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

if(tgl.getMinutes() < 9){
    menit = "0"+tgl.getMinutes()
}else{
    menit = tgl.getMinutes()
}

console.log("Hari ini "+namaHari+", "+tgl.getDate()+" "+namaBulan+" "+tgl.getFullYear()+" Pukul "+tgl.getHours()+":"+menit+":"+tgl.getSeconds());