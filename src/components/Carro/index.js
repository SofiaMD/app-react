import { useState } from 'react'
import { Burbuja } from '../Burbuja'
import { Container } from '../Burbuja/styles'
import swal from 'sweetalert'
// import styles from './estilos'
// import {eliminarDelCarro } from './App'
import { Articulos, BotonCarro, BotonEliminar, ContenedorCentral, MostrarArticulos } from './styles'
export const Carro = ({ cantidad, productos, eliminarDelCarro }) => {

    const [mostrarCarro, setMostrarCarro] = useState(false)
    const [eliminarCarro, setEliminarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    const handleEliminardelCarrito  = (id) => {
        swal({
            title: "Eliminar", 
            text: "Estas seguro de eliminar este articulo?", 
            buttons: ["Si", "No"]
        }).then(respuesta => {
            if (respuesta) {
               eliminarDelCarro(id)
            }
        })
    }

    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

    return (
        <Container>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <BotonCarro onClick={handleMostrarCarro}>
                Carro
            </BotonCarro>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <Articulos>
                        <MostrarArticulos>
                            {
                                productos.map(x => {
                                    return (
                                        <ContenedorCentral>
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <BotonEliminar onClick={()=> handleEliminardelCarrito(x.id)}>X</BotonEliminar> {x.nombre}
                                            ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                        </ContenedorCentral>
                                    )
                                })
                            }
                            <ContenedorCentral>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </ContenedorCentral>
                            <ContenedorCentral>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </ContenedorCentral>
                            <ContenedorCentral>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </ContenedorCentral>
                        </MostrarArticulos>
                    </Articulos>
            }
        </Container>

    )
}

/**
 div
 button
 div
 ul
 li
 img
 span
 li
 */