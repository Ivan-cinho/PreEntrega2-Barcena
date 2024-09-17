import "../ItemDetail/ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img, idCat}) => {
    return (
        <div className="cardDetail">
            <h3>Nombre: {nombre}</h3>
            <p>Precio: {precio}</p>
            <p>Id: {id}</p>
            <p>Categoria: {idCat}</p>
            <img src={img} alt={nombre} />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, tempora.</p>
        </div>
    )
}

export default ItemDetail