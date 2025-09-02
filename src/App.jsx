import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HomeLayout from "./Layouts/HomeLayout"; // ✅ use same layout

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
