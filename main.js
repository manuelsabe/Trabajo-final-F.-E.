let lista = document.getElementById("lista");
let totalText = document.getElementById("totalText");
let botonFin = document.getElementById("boton-fin");
let total = 0;

const productos = [
    {imgSrc: "img/zapa1.png", nombre: "Nike Dunk Hi Retro", precio: 100000, stock: 3 },
    {imgSrc: "img/zapa2.png", nombre: "Nike Blazer Mid 77", precio: 110900, stock: 9 },
    {imgSrc: "img/zapa3.png", nombre: "Nike GTS 97", precio: 60000, stock: 2 },
    {imgSrc: "img/zapa4.png", nombre: "Nike Air Max Flyknit", precio: 200000, stock: 8 },
    {imgSrc: "img/zapa5.png", nombre: "Nike Air Force 1 High 07", precio: 250000, stock: 6 },
    {imgSrc: "img/zapa6.png", nombre: "Jordan Series 06", precio: 135000, stock: 2 }
];

function pintarProductos(arrayProductos) {
    for (let i = 0; i < arrayProductos.length; i++) {
        lista.innerHTML +=
            `<div class="forma">
              
                <img src="${arrayProductos[i].imgSrc}" alt="">
                <p class="nombre">${arrayProductos[i].nombre}</p>
                <p class="precio">$${arrayProductos[i].precio}</p>
                <input type="number" id="stock${i}" value="${arrayProductos[i].stock}" readonly >
                <input type="number" id="cantidad${i}" placeholder="Cant." >
                <button id="btn${i}">AGREGAR</button>
        
            </div>
           `
    }

    for(let i = 0; i< arrayProductos.length; i++){
        document.getElementById(`btn${i}`).addEventListener("click", ()=> {
            comprar(i, productos)
        } )
    }
}


function comprar(index, arrayProductos) {
    let stockElement = document.getElementById(`stock${index}`);
    let cantidadElement = document.getElementById(`cantidad${index}`);
    let stock = stockElement.value;
    let cantidad = cantidadElement.value;
    let precio = arrayProductos[index].precio;

    if(cantidad > 0 && cantidad <= stock){
        total += cantidad * precio;
        alert("Compra exitosa!. Total $" + total) ;
        totalText.innerHTML = `Total: $${total}`
        stockElement.value = stock - cantidad;
    } else {
        alert("Compra invalida. La cantidad debe ser mayor a 0 y menor o igual al stock")
    }

}

pintarProductos(productos);


botonFin.addEventListener("click", () => {
    alert("Gracias por su compra 😊!!");
    totalText.innerHTML = "Total: $0 👟";
});