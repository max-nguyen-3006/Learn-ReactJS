import { useState, useCallback } from "react";
import UseCallback02 from "./useCallback02";
/* useCallback:
+ Thường được sử dụng chung với memo
+ Tránh tạo ra function ko cần thiết -> tránh re-render component con.
+ GIúp tránh re-render component, khi tham chiếu của function thay đổi.
+ useCallback(callback, [deps])
*/
function UseCallback1() {
  const [count, setCount] = useState(60);
  //Create tham chieếu và lưu vào biến.
  // khi deps thay đổi thì nó mới tạo tham chiếu mới
  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <UseCallback02 onIncrease={handleIncrease} />
    </div>
  );
}
export default UseCallback1;
