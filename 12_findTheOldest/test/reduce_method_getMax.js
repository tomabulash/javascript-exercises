const example = function(arr) {

return arr.reduce((accumulator, currentElement) => { 
    //first iteration:
        //accumulator = value of arr[0]
        //currentElement = value of arr[1]

    const optionalMaxCalc = someFunction(optionalParameter);
    const optionalCurrentCalc = someFunction(optionalParameter);
    //use these if values needs to be precalculated or are missing
    //create someFunction outside of the reduce method to calculate values

    return (accumulator > currentElement ) ? accumulator : currentElement; 
    //reduce will return the element with max value: 
        // accumulator will get the value of either:
            //accumulator, which is arr[0] on first iteration
            //currentElement, which is arr[1] on first iteration 
        //the iterations continue as accumulator always get the max value.
        //the iterations end when on last element, and accumulator is returned.
        //the optionalMaxCalc and optionalCurrentCalc are not being used here
});

}; 

const someFunction = function(optionalParameter) {

    return optionalParameter * 5; 

    //calculate and return the needed value

};