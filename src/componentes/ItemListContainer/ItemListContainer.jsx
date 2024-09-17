import { useState, useEffect } from "react";
import { getProductos, getPorCategoria} from "../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListCotainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams()

    useEffect(() => {

        const funcionProductos = idCategoria ? getPorCategoria : getProductos;
        funcionProductos(idCategoria)
        .then(res => setProductos(res))
    }, [idCategoria])

    return (
        <>
            <h2 style={{ textAlign: "center", color: "rgb(130, 98, 160)", fontSize: "24px" }}>Los producto de Marlon Brando</h2>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListCotainer;