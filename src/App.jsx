
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListCotainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListCotainer/>}/>
          <Route path="/categoria/:idCategoria" element={<ItemListCotainer/>}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>  

    </> 
  )
}

export default App;