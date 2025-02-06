import { useState } from "react";

const orders = [1000, 2001, 5025];
/* NOTE: 
- Component được re-render sau khi 'setState'
- Initial state chỉ dùng cho lần đầu
- Set state với callback 
- Initial state với callback
- Set state là thay thế state bằng giá trị mới


*/
function App() {
  const data = {
    name: "Test",
    age: 16,
  };
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur, 0);
    console.log(total);
    return total;
  });
  const [student, setStudent] = useState(data);
  console.log("Reload");
  console.log(setCounter);
  const handleIncrease = () => {
    //setCounter(counter + 1)
    setCounter((preState) => preState + 1);
  };

  const handleUpdate = () => {
    setStudent({
      ...student,
      age: 17,
    });
  };
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <h2>{JSON.stringify(student)} </h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
