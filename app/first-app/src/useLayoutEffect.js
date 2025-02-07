import { useEffect, useState, useLayoutEffect } from "react";

/*UseEffect(callback, [deps])
- deps : sự phụ thuộc dữ liệu
1. useEffect(callback): 
    + Gọi callback mỗi khi component re-render
    + Goij callback sau khi component thêm element vào DOM (UI của component load xong thì sẽ gọi callback)
2. useEffect(callback, [])
    + Chỉ gọi callback 1 lần sau khi component mounted
3. useEffect(callback, [deps])
    + Callback sẽ được gọi lại mỗi khi deps thay đổi
-------------
1. Callback luôn được gọi sau khi component mounted

*/
/* The Difference between useEffect and useLayoutEffect */
/*
===>. UseEffect: 
1. Cập nhật lại state
2. Cập nhật DOM
3. Render lại UI
4. Gọi cleanup nếu deps thay đổi 
5. Gọi useEffect callback

UseLayoutEffect
1. Cấp nhật lại state
2. Cập nhật DOM 
3. Gọi cleanup nếu deps thay đổi
4. Gọi useLayoutEffect callback
5. Render lại UI

*/
function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);

  const handleSetCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleSetCount}>Run</button>
    </div>
  );
}
export default UseLayoutEffect;
