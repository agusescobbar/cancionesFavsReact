import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { ListadoApp } from './ListadoApp'
import { Formulario } from './Formulario'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='tarjeta'>
      <ListadoApp></ListadoApp>
      <Formulario></Formulario>
    </div>
  </StrictMode>,
)