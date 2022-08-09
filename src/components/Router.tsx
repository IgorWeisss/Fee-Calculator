import { Route, Routes } from "react-router-dom";
import { Calculator } from "../pages/Calculator";
import { Settings } from "../pages/Settings";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Calculator />}/>
      <Route path="/settings" element={<Settings />}/>
    </Routes>
  )
}