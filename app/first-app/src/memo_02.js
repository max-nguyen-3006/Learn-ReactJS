import { memo } from "react";

function Memo02() {
  return (
    <div>
      Memo02
      {console.log("Memo02- render")}
    </div>
  );
}
export default memo(Memo02);
