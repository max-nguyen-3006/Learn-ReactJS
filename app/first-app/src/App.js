import { useState } from "react";
import "./App.css";
// import Content from "./useEffect";
// import DOMEvent from "./useEffect_DOM_Event";
// import Timer from "./useEffect_Timer";
// import UseLayoutEffect from "./useLayoutEffect";
// import UseRef from "./useRef";
// import Memo from "./memo";
// import UseCallback1 from "./useCallback";
// import UseMemo from "./useMemo";

import UseContext from "./useContext";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App" style={{ padding: 20 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>

      {/* {show && <Content />} */}
      {show && <UseContext /> }
    </div>
  );
}

export default App;
