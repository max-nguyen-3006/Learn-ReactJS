import { useRef, useState, useEffect } from "react";

/* useRef 
- Lưu các gái trị qua một tham chiếu bên ngoài
- function component
- trả về 1 object -> current
*/
function UseRef() {
  const [count, setCount] = useState(60);
  let timerId = useRef(0);
  const prevCount = useRef();
  const h1Ref = useRef();
  useEffect(() => {
    prevCount.current = count;
    return () => {};
  }, [count]);
  useEffect(()=> {
    const rec = h1Ref.current.getBoundingClientRect();
    console.log(rec);
  })
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
  };
  console.log(count, prevCount.current);
console.log(h1Ref.current);

  return (
    <div>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}> Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
export default UseRef;
