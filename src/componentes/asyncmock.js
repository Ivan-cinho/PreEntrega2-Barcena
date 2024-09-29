
const misProductos = [
    {id: "1" , nombre: "Item 1" , stock: 10, precio: 200, img: "https://picsum.photos/300?random=1", idCat: "A"},
    {id: "2" , nombre: "Item 2", stock: 20, precio: 300, img: "https://picsum.photos/300?random=5", idCat: "A"},
    {id: "3" , nombre: "Item 3", stock: 30, precio: 400, img: "https://picsum.photos/300?random=8", idCat: "B"},
    {id: "4" , nombre: "Item 4", stock: 40, precio: 500, img: "https://picsum.photos/300?random=54", idCat: "B"},
    {id: "5" , nombre: "Item 5", stock: 50, precio: 600, img: "https://picsum.photos/300?random=10", idCat: "A"},
    {id: "6" , nombre: "Item 6", stock: 60, precio: 700, img: "https://picsum.photos/300?random=21", idCat: "B"},
    {id: "7" , nombre: "Item 7", stock: 70, precio: 800, img: "https://picsum.photos/300?random=14", idCat: "A"},
    {id: "8" , nombre: "Item 8", stock: 80, precio: 900, img: "https://picsum.photos/300?random=16", idCat: "B"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 1000)
    })
} 

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout(()=> {
            const producto = misProductos.find(item=>item.id === id)
            resolve(producto)
        }, 1000)
    })
}

export const getPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(()=> {
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        }, 1000)
    })
}