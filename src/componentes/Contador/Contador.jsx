import { useState } from "react"

const Contador = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador +1)
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador -1)
        }
    }

    return(
        <>
        <div>
            <button onClick={sumarContador}>+</button>
            <p>{contador}</p>
            <button onClick={restarContador}>-</button>
        </div>
        <button onClick={()=> funcionAgregar(contador)}>Agregar al pedido</button>
        </>
    )   
}

export default Contador