import { Articulo } from "../Articulo";
// import styles from './estilos'
import { Container } from '../Articulos/styles'

export const Articulos = (props) => {
    const productos = props.data.articulos
    const agregarAlCarro = props.agregarAlCarro
    const eliminarDelCarro = props.eliminarDelCarro

    return (
        <Container>
            {
                productos.map(prod => 
                    // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                    <Articulo key={prod.id} prod={prod} agregarAlCarro={agregarAlCarro} eliminarDelCarro={eliminarDelCarro} />
                )
            }
        </Container>
    )
}

/**
 *div
 */