let alas = "sandal"
let warna = "biru"
let harga = "mahal"

switch (true){
    case alas == "sandal" && warna == "merah" && harga == "murah":
        console.log("Saya suka sandal merah murah");
    break;
    case alas == "sandal" && warna == "merah" && harga == "mahal":
        console.log("Saya suka sandal merah mahal");
    break;
    case alas == "sandal" && warna == "biru" && harga == "mahal":
        console.log("Saya suka sandal biru mahal");
    break;
    case alas == "sandal" && warna == "biru" && harga == "murah":
        console.log("Saya suka sandal biru murah");
    break;

    case alas == "sepatu" && warna == "merah" && harga == "murah":
        console.log("Saya suka sepatu merah murah");
    break;
    case alas == "sepatu" && warna == "merah" && harga == "mahal":
        console.log("Saya suka sepatu merah mahal");
    break;
    case alas == "sepatu" && warna == "biru" && harga == "mahal":
        console.log("Saya suka sepatu biru mahal");
    break;
    case alas == "sepatu" && warna == "biru" && harga == "murah":
        console.log("Saya suka sepatu biru murah");
    break;
    default:
        console.log("saya suka nyeker");
}