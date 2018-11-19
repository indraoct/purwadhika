
//codingan untuk enkripsi (mengubah yang terbaca menjadi tak terbaca) :
const caesarCipher = (str, num) => {
    num = num % 26;
    const lowerCaseString = str.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); 

    let newString = '';
    for (let i = 0; i < lowerCaseString.length; i++) { 
        const currentLetter = lowerCaseString[i];

        if (currentLetter === ' ') {
            newString += currentLetter;
            continue; 
        }

        const currentIndex = alphabet.indexOf(currentLetter); 

        let newIndex = currentIndex + num;

        if (newIndex > 25) {
             newIndex = newIndex - 26;
        } else if (newIndex < 0) {
             newIndex = newIndex + 26;
        }

        if (str[i] === str[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase(); 
        } else {
            newString += alphabet[newIndex];
        }
    }
    return newString;
};

//codingan untuk dekripsi (mengubah yang tak terbaca menjadi terbaca) :
const caesarDeChipper = (str,num) => {
    num = num % 26;

    const lowerCaseString = str.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); 

    let oldString = '';
    for (let i = 0; i < lowerCaseString.length; i++) { 
        const currentLetter = lowerCaseString[i];

        if (currentLetter === ' ') {
            oldString += currentLetter;
            continue; 
        }

        const currentIndex = alphabet.indexOf(currentLetter); 

        let oldIndex = currentIndex - num;

        if (oldIndex > 25) {
            oldIndex = oldIndex - 26;
        } else if (oldIndex < 0) {
            oldIndex = oldIndex + 26;
        }

        if (str[i] === str[i].toUpperCase()) {
            oldString += alphabet[oldIndex].toUpperCase(); 
        } else {
            oldString += alphabet[oldIndex];
        }
    }
    return oldString;
}

    //mengenkripsi kata yang terbaca
    let stringAfterChipper = caesarCipher('Zefanya Octama', 1);

    //mengubah kata tak terbaca menjadi terbaca
    let stringDechipper = caesarDeChipper(stringAfterChipper,1);

    //menulis ke dalam console:
    console.log("Hasil Enkripsi: "+stringAfterChipper);
    console.log("Hasil Dekripsi: "+stringDechipper);