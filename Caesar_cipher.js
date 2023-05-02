function rot13(str) {
    const referenceList = {
        "A" : "N",
        "B" : "O",
        "C" : "P",
        "D" : "Q",
        "E" : "R",
        "F" : "S",
        "G" : "T",
        "H" : "U",
        "I" : "V",
        "J" : "W",
        "K" : "X",
        "L" : "Y",
        "M" : "Z",
        "N" : "A",
        "O" : "B",
        "P" : "C",
        "Q" : "D",
        "R" : 'E',
        'S' : "F",
        'T' : 'G',
        'U' : 'H',
        'V' : 'I',
        'W' : 'J',
        'X' : 'K',
        'Y' : "L",
        'Z' : 'M',

    }

    str = str.toUpperCase();
    let decryptedStr = "";

    for (let i=0;i<str.length;i++) {
        if (referenceList.hasOwnProperty(str[i]) === false) {
            decryptedStr += str[i];
            continue
        }
        for (let key in referenceList) {
            if (str[i] === key) {
                decryptedStr += referenceList[key];
            } 
        }
    }
    return decryptedStr
}

console.log(rot13("SERR PBQR PNZC")) //shift 13 places
