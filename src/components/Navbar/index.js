import { Carro } from '../Carro'
// import styles from './estilos'
import { Container, Tittle } from './styles'

export const Navbar = ({ cantidad, productos, eliminarDelCarro }) => {
    return (
        <Container>
            <Tittle>Articulos</Tittle>
            <Carro cantidad={cantidad} productos={productos} eliminarDelCarro={eliminarDelCarro}/>
        </Container>
    )
}
