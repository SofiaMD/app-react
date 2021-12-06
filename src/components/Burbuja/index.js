// import styles from './estilos'
import { Container } from './styles'

export const Burbuja = ({ cantidad }) => {
    return (
        <Container>
            {cantidad > 9 ? '9+' : cantidad}
        </Container>
    )   
}