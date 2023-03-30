const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(...args) {

  return args[0].reduce((total, amount) => total += amount, 0);
 
};

const multiply = function(args) { 

  let sum=1; 
  for (let i = 0; i < args.length; i++) sum *= args[i]; 
  return sum;

};

const power = function(x,y) {

  return x ** y;
	
};

const factorial = function(x) {
	
  if (!x) return 1; 
  let sum = 1;
  for (let i = x; i > 0; i--) sum *= i;
  return sum;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
