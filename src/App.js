import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Artwork from "./pages/artwork";
import NoPage from "./pages/noPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/artwork/:id" element={<Artwork />}/>
              <Route path="*" element={<NoPage />} />
          </Routes>
      </BrowserRouter>
  );
}



export default App;
