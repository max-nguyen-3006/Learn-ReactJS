import React, { memo } from "react";

function UseCallback02({ onIncrease }) {
  return (
    <>
      {console.log("UseCallback02- re-render")}
      <button onClick={onIncrease}>Click me !</button>
      <div> useCallback0 </div>
    </>
  );
}
export default memo(UseCallback02);
