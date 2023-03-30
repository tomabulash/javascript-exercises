const palindromes = function (string) { //abcddcba abcddcba  afgfds  
  const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  return processedString.split("").reverse().join("") == processedString;
};

module.exports = palindromes;
