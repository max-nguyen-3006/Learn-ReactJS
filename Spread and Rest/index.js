//Rest: Lấy ra những phần còn lại

function logger(a, ...args) {
  console.log(args);
}
logger(1, 2, 3, 4, 5);

//Destructuring : là đã biết trước những key của object, mảng truyền vào , { a, b} thì lấy ra luôn

function Destructuring({ name, price, ...rest }) {
  console.log(name, price);
  console.log(rest);
}

Destructuring({ name: "JS", price: 1000, description: "Javascript" });

/* vd 2: array */
var array = ["JS", "PHP", "Ruby"];

var [a, b, c] = array;
console.log(a, b, c);

/* vd : 3  : Object */
var course = {
  name: "JS",
  price: 1000,
};
var {name, price} = course;
console.log(name, price);

// Spread: ... nó sẽ xóa dầu [] hoặc {} của mảng , obj truyền vào. Truyền đối số

var array1 = ["a", "b", "c"];
var array2 = ["d", "e", "f"];
var array3 = [...array1, ...array2];
console.log(array3);
