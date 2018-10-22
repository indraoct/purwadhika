let kata = "Halo Dunia";

var count = (kata.match(/a/g) || []).length;
console.log(count);
