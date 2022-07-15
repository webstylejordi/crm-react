import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Spinner from '../components/Spinner'


const VerCliente = () => {

  const {id} = useParams()
   
  const [cliente, setCliente] = useState({});


  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    setCargando(!cargando)
   const consultarClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}` 
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setCliente(resultado)
      } catch (error) {
        console.log(error)
      }

      setTimeout(()=>  {
        setCargando(!cargando)
      }, 3000);
      
    } 
    consultarClienteAPI()
   
  }, [])


  return (
        cargando ? <Spinner /> : 
          Object.keys(cliente).length === 0 ? 
          <p>No hay resultados</p> : 
          (
          <div>
     
            <p ><span className='text-blue-700 font-black text-4xl uppercase mt-4 '>Cliente : </span> {cliente.nombre}</p>
              {cliente.nombre && (
                <p className='text-grey-800  text-2xl mt-4' >
                <span className='text-grey-600 font-bold text-2xl uppercase  '>Cliente : </span> {cliente.nombre}</p>
              )}
          
            
            {cliente.empresa && (
              <p  className='text-grey-800  text-2xl mt-4'>
              <span className='text-grey-600 font-bold  uppercase '>Empresa : </span> {cliente.empresa}</p>
            )}
          
      
            {cliente.mail && (
              <p  className='text-grey-800  text-2xl mt-4'>
              <span className='text-grey-600 font-bold  uppercase '>Email : </span> {cliente.mail}</p>
            )}
      
            {cliente.telf && (
              <p  className='text-grey-800  text-2xl mt-4'>
              <span className='text-grey-600 font-bold  uppercase '>Telefono : </span> {cliente.telf}</p>
           )}
          

          {cliente.notas && (
            <p className='text-grey-800  text-2xl mt-4'>
              <span className='text-grey-600 font-bold  uppercase '>Notas : </span> {cliente.notas}</p>
              )}
        </div>
      )
    )}

export default VerCliente