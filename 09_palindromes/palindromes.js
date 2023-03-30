const palindromes = function (string) {

    let newString = '';
    for (let i = 0; i < string.length; i++) {
        if ((/[a-zA-Z]/).test(string.charAt(i))) {
            newString += string.charAt(i);
        }
    }
    let lowerString = newString.toLowerCase();

    if ((lowerString.length%2) == 0) { // abcddcba

        for(let i = 0; i < lowerString.length/2; i++) {
            if(lowerString.charAt(i) !== lowerString.charAt(lowerString.length-i-1)) return false;
        }

    } else { // racecar

        for(let i = 0; i < (lowerString.length-1)/2; i++) {
            if(lowerString.charAt(i) !== lowerString.charAt(lowerString.length-i-1)) return false;
        }

    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
