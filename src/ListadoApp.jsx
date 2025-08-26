import { useState } from "react";

const Items = ({nombre, visto}) => {
  return(
    <li>{nombre} 
    {visto ? '🛐' : '🔇'}
    </li>
  ) 
}

export const ListadoApp = () => {
    let listadoSecciones = [
        {nombre:'Romeo - PinkPantheress', visto: true},
        {nombre:'Tresspass Coat - NikoB', visto: true},
        {nombre:'Stars - PinkPantheress', visto: true},
        {nombre:'Algo esta cambiando - Julieta Venegas', visto: true},
        {nombre:'Rips in Jeans - Niko B', visto: true},
        {nombre:'Chrome - Saramalacara', visto: false},
        {nombre:'webcam - Zell', visto: false},
        {nombre:'Smartphone - Soto Asa', visto: false},
    ]

    const [arreglo, setArreglo] = useState(listadoSecciones)
    //console.log(arreglo)
  return (
    <>
        <h1>canciones favoritas</h1>
        <p>agosto 2025</p>
        <h4>🛐 loop --- 🔇 las quemé</h4>
        <ul>    
            {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}
        </ul>
        <p>creado con react!</p>
    </>
  )
}
