import React, { useState, createContext, useContext } from "react";
import UseContext01 from "./useContext01";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
/* useContext: 
1. Truyền dữ liệu từ component cha xuống bất cứ  component con 
Vd: A -> B -> C . UseContext : A -> C 
== === sTEP === ===
1. Create context
2. Provider
3. Consumer
*/
function UseContext() {
  const themeContext = useContext(ThemeContext);
  return (
      <>
        <div>useContext</div>
        <button className={'btn'} onClick={themeContext.toggleTheme}>Click me !</button>
        <UseContext01 />
      </>
 
  );
}
export default UseContext;
