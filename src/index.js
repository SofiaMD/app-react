import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Que? y donde?
// <p>Contenido</p>
const p = React.createElement('p',{className: 'id1'}, 'Contenido')
const p1 = <p className= "id1"><span>Hola Mundo!</span></p>
const p2 = () => <p>Hola Mundo !</p>    //Crear js dentro de una funcion
const Div = <div></div>
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <p2>Hello World!</p2>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
