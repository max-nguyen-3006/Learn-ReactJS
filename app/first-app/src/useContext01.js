import React , {memo} from "react";
import UseContext02 from "./useContext02";

function UseContext01() {
  console.log("Render-01");
  
  return (
    <>
      <div>useContext01</div>
      <UseContext02/>
    </>
  );
}
export default memo(UseContext01)
