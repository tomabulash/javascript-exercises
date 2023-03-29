const caesar = function(str, shift) {
    return str
    .split("")
    .map((char) => newChar(char, shift))
    .join("");
};

const mod = (code) => ((code % 26) + 26) % 26;

const letter = (code) => (code >= 65 && code <= 90) ? 65 
        : (code >= 97 && code <= 122) ? 97 
        : false;

const shiftLetter = (code, shift) => String.fromCharCode(
    mod(code + shift - letter(code)) + letter(code)
);

const newChar = (char, shift) => !letter(char.charCodeAt()) ? char
        : shiftLetter(char.charCodeAt(), shift);

module.exports = caesar;



