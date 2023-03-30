const reverseString = function(word) {

    let newString = '';
    let num = word.length;
   
        for(let i=1; i<=num; i++) {

            newString += word.substr((num-i), 1);

        }
   
    return newString;
};

// Do not edit below this line
module.exports = reverseString;

//olleh