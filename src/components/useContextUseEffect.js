import React,{useContext,useEffect} from "react";

const informacion = {
    articulos: [
      {id: 1, nombre: 'Homepod Mini', precio: 99, imagen: '/images/homepod-mini.jpg'},
      {id: 2, nombre: 'iMac', precio: 1200, imagen: '/images/imac.jpeg'},
      {id: 3, nombre: 'iPad Mini', precio: 400, imagen: '/images/ipad-mini.jpg'},
      {id: 4, nombre: 'iPhone 13 Pro', precio: 1100, imagen: '/images/iphone13-pro.jpg'},
      {id: 5, nombre: 'Macbook Pro', precio: 1600, imagen: '/images/macbook-pro.png'}
    ],
    carrito: [
      //{id: 1, nombre: 'Homepod Mini', precio: 99, imagen: '/images/homepod-mini.jpg', cantidad: 2},
    ]
  }
  
  
  function App() {
    // const [data, setData] = useState(informacion)
    const { data, setData } = useContext(informacion)

    const agregarAlCarro = (producto) => {
    
      // 1- Verificar si el producto clickeado ya està en el carrito
      if (data.carrito.find(x => x.id === producto.id)) {
        // 2- En caso de ya estar en el carrito, aumentamos la cantidad en 1
        const carritoCopia = data.carrito.map(x => x.id === producto.id ? ({...x, cantidad: x.cantidad + 1}) : x)
        data.carrito = carritoCopia
        setData({...data})
        return
      }
  
      data.carrito.push({...producto, cantidad: 1})
      setData({...data})
    }
    
    useEffect(() =>{
        getcarritoCopia(state.id)
    }, []);

    useEffect(()=> {

        console.log(agregarAlCarro);
    },[agregarAlCarro]);

    useEffect(()=>{
        if (agregarAlCarro) {
            
        }
    })
    const eliminarDelCarro = (id) => {
  
      const carritoCopia = data.carrito.filter(x => x.id !==id)
      data.carrito = carritoCopia
      setData({...data})
      return
    }
    // App > Navbar > Carro > Burbuja > Numero de productos
  
    // let cantidad = data.carrito.length
    let cantidad = data.carrito.reduce((acum, actual) => acum + actual.cantidad, 0)
  
    return (
      <Fragment>
        <Navbar cantidad={cantidad} productos={data.carrito} eliminarDelCarro={eliminarDelCarro} />
        <Articulos agregarAlCarro={agregarAlCarro} data={data} eliminarDelCarro={eliminarDelCarro}/>
        
      </Fragment>
    );
  }
  
export default useContextUseEffect;