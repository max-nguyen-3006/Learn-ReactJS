//Decoration function
function logger(log) {
  console.log(log);
}
logger("Hello");
//Expression function
const logger2 = function (log) {
  console.log(log);
};
logger2("Hello2");
//Arrow function 

const logger3 = (log)=> {
  console.log(log);
}
logger3("Hello3");
const sum = (a,b) =>  a+ b
console.log(sum(1,2));
//Nếu muốn return 1 object
const object = (a,b) => ({a:a,b:b});
console.log(object(1,2));

//NOTE : Arrow Function ko có contructor 
