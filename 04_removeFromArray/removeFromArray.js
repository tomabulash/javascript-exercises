const removeFromArray = function(...args) {
    for( i = 1; i < args.length; i++) {
        for( j = 0; j < args[0].length; j++) {
            if( args[i] === args[0][j]) {
                args[0].splice(j,1);
            }
        }
    }
    return args[0];

};

// Do not edit below this line
module.exports = removeFromArray;
