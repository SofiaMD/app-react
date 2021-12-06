import styled, { css } from 'styled-components'

export const Container = styled.div`
    position: relative;   
`
export const BotonCarro = styled.button`
    background-color: #118002;
    border: none;
    border-radius: 10%;
    color: #fff;
    padding: 10px 15px;
    cursor: pointer;
`
export const Articulos = styled.div`
    border-Radius: 5px,
    boxShadow 0 0 15px rgba(0, 0, 0, 0.4);
    background-color: #fff;
    color: #000;
    padding: 10%;
    position: absolute;
    right: 0;
    top: 50px;
    width: 400px;

`
export const MostrarArticulos = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`
export const ContenedorCentral = styled.li`
    align-Items: center;
    border-Bottom: 1px dashed #ccc;
    display: flex;
    justify-Content: space-between;
    margin-Bottom: 10px;
    padding-Bottom: 5;

`
export const BotonEliminar = styled.span`
    border: none;
    background-Color:#fb0207;
    border-Radius: 50%;
    color: #fff;
    cursor: pointer;
    font-Size: 15px;
    padding: 2px 5px;

`

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

 