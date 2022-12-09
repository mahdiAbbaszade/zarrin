import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Select from "./component/Select";
import Page from "./page/index";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/zarinfarman" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;