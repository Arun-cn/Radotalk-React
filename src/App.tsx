import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./components/layout/LayOut";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<div>register</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
