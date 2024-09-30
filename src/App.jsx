
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListCotainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./Context/CarritoContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
<CarritoProvider>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListCotainer/>}/>
          <Route path="/categoria/:idCategoria" element={<ItemListCotainer/>}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
        </Routes>
        </CarritoProvider>
      </BrowserRouter>  

    </> 
  )
}

export default App;