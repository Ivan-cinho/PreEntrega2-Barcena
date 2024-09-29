import "../ItemDetail/ItemDetail.css"
import Contador from "../Contador/Contador.jsx"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({id, nombre, precio, img, idCat, stock}) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        console.log("productos agregados:" + cantidad)
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