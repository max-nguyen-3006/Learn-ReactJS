// Đinh nghĩa key: value cho object
// Định nghĩa method cho object
// Định nghĩa key cho object dưới dạng biến

var name = "JS";
var price = 1000;
var cources = {
  name,
  price,
  getName(){
    return name;
  }
};
console.log(cources.getName());
