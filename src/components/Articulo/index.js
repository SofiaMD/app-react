import { Button } from '../Button'
import { Container, Image, ProductName, Price } from './styles'

export const Articulo = ({prod, agregarAlCarro, eliminarDelCarro}) => {
    return (
        <Container nombre={prod.nombre}>
            <Image imagen={prod.imagen} />
            <ProductName>{prod.nombre}</ProductName>
            <Price>${prod.precio.toLocaleString()}</Price>
            <Button prod={prod} agregarAlCarro={agregarAlCarro} eliminarDelCarro={eliminarDelCarro}>Agregar al Carro</Button>
        </Container>
    )
}