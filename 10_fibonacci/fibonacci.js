const fibonacci = function(num) {

    const x = +num; //convert num to number

    if (x == 0) return 0;
    if (x < 0) return 'OOPS';
    
    let a = b = 1;
    
    for(let i = 2; i < x; i++) { //0 returns 0, 1 and 2 returns 1;
        
        b = a + b;
        a = b - a;
        
    } 
    
    return b; //because array starts at 0, not 1

};

// Do not edit below this line
module.exports = fibonacci;
