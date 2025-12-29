import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import home from "./pages/home";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index  element={<home />} />
          <route path="*" element={<notfound />} />
          <route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
