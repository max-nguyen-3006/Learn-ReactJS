import { useRef, useState, useEffect } from "react";
import Memo02 from "./memo_02";
/* memo  (HOC) Higher Order Component: 
- Bật cao hơn component -> nên nó sẽ ở ngoài component và nó wrap component lại
- Memo ; ghi nhớ : ghi nhớ lại props của component 
  + Nó giúp tránh re-render lại component ko cần thiết 
  + Áp dụng khi : ở component Cha khi thay đổi data , ko muốn re-render lại 
  component con.  -> sử dụng memo ở component con.
- Nguyên lý hoạt động : 
  + Nhận vào 1 component , check các props , sau re-render có bị thay đổi ko ? 
   . ít nhất 1 props thay đổi thì nó sẽ re-render lại component.
   
*/
function Memo() {
  const [count, setCount] = useState(60);
  let timerId = useRef(0);
  const prevCount = useRef();
  const h1Ref = useRef();
  useEffect(() => {
    prevCount.current = count;
    return () => {};
  }, [count]);
  useEffect(() => {
    const rec = h1Ref.current.getBoundingClientRect();
    console.log(rec);
  });
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
      <Memo02 />
    </div>
  );
}
export default Memo;
