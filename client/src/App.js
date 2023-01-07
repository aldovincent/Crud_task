import "./app.css"
import Form from "./Components/Form";
import Table from "./Components/Table";
import{BrowserRouter,Routes,Route} from "react-router-dom"



function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/out" element={<Table/>} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
