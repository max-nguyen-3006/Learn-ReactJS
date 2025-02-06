import { useState } from "react";
// import Content from "./useEffect";
// import DOMEvent from "./useEffect_DOM_Event";
import Timer from "./useEffect_Timer";
function App() {
  const [show,setShow] = useState(false);
  return <div className="App" style={{ padding: 20 }}>
    
    <button onClick={()=>setShow(!show)}>Toggle</button>

    {/* {show && <Content />} */}
    { show && <Timer />}

  </div>;
}

export default App;
