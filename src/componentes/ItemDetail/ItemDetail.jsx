import "../ItemDetail/ItemDetail.css"
import Contador from "../Contador/Contador.jsx"
import { useState } from "react"
import { Link } from "react-router-dom"
import { carritoContext } from "../../Context/CarritoContext.jsx"
import { useContext } from "react"

const ItemDetail = ({id, nombre, precio, img, idCat, stock}) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const {agregarAlCarrito} = useContext(carritoContext)

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        console.log("productos agregados:" + cantidad)

        const item = {id, nombre, precio}
        agregarAlCarrito(item, cantidad)
    }

    return (
        <div className="cardDetail">
            <h3>Nombre: {nombre}</h3>
            <p>Precio: {precio}</p>
            <p>Id: {id}</p>
            <p>Categoria: {idCat}</p>
            <img src={img} alt={nombre} />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, tempora.</p>

        {
            agregarCantidad > 0 ? (<Link to="/cart">Terminar compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/> )
        }

        </div>
    )
}

export default ItemDetail