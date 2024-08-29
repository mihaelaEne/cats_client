
import Home from "./Home";
import Update from "./Update.js";
import CreateNewCat from "./CreateNewCat.js";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>

    <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/new-cat" element={<CreateNewCat/>}></Route>
         <Route path="/edit-cat/:id" element={<Update/>}></Route>ß

    </Routes>
  
  
  </BrowserRouter>
)
  
}

export default App;
