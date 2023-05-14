import { ConnectKitButton } from "connectkit";
import HomePage from "./HomePage";
import StegnoPage from "./StegnoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stegno" element={<StegnoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
