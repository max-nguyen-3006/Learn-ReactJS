import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function UseContext02() {
  const theme = useContext(ThemeContext);
  return <div className={theme.theme}>useContext02 </div>;
}
