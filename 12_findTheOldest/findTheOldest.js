const findTheOldest = function(people) {
    
    return people.reduce((oldest, current) => { //oldest is not the before - it's the returned value

        let oldestAge = getAge(oldest);

        let currentAge = getAge(current);

        return currentAge > oldestAge ? current : oldest;

    });
};

    const getAge = function(person) { // parameters = yyyy || undefined

        let thisYear = new Date().getFullYear();

        if (!person.yearOfDeath) return thisYear - person.yearOfBirth;
        return person.yearOfDeath - person.yearOfBirth;        
    };

    


// Do not edit below this line
module.exports = findTheOldest;


// yearOfBirth
// yearOfDeath