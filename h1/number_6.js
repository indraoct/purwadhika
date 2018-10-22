//declare variable dateNow = object date hari ini (default)
let dateNow = new Date();
//today
console.log("hari ini "+dateNow.getDate()+" - "+(dateNow.getMonth()+1)+" - "+dateNow.getFullYear());

//penjumlahan + 1 hari (tommorow)
var tommorow = new Date(dateNow.getFullYear(),dateNow.getMonth(),dateNow.getDate() + 1);

//pengurangan - 1 hari (yesterday)
var yesterday = new Date(dateNow.getFullYear(),dateNow.getMonth(),dateNow.getDate() - 1);


console.log("besok "+tommorow.getDate()+" - "+(tommorow.getMonth()+1)+" - "+tommorow.getFullYear());
console.log("kemarin "+yesterday.getDate()+" - "+(yesterday.getMonth()+1)+" - "+yesterday.getFullYear());