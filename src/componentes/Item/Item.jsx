import "../Item/Item.css"
import { Link } from "react-router-dom";

const Item = ({id, nombre, precio, img, idCat}) => {
    return (
        <div className="cardProducto">
            <img src={img} alt={nombre} />
            <h3>{nombre}</h3>
            <p>Precio: {precio}</p>
            <p>Id: {id}</p>
            <p>Categoria: {idCat}</p>
            <Link to={`/item/${id}`} className="link">mas info</Link>
        </div>
    )
}

export default Item;