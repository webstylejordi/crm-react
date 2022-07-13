import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const VerCliente = () => {

  const {id} = useParams()
   
  const [cliente, setCliente] = useState({});
  useEffect(() => {
   const consultarClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}` 
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setCliente(resultado)
      } catch (error) {
        console.log(error)
      }
    } 
    consultarClienteAPI()
   
  }, [])


  return (
    <div>
       <p ><span className='text-blue-700 font-black text-4xl uppercase mt-4 '>Cliente : </span> {cliente.nombre}</p>

     <p ><span className='text-grey-700 font-bold text-2xl uppercase mt-4 '>Cliente : </span> {cliente.nombre}</p>

     <p><span className='text-grey-700 font-bold text-2xl uppercase mt-4'>Empresa : </span> {cliente.empresa}</p>

    {cliente.telf && 
    ( <p><span className='text-grey-700 font-bold text-2xl uppercase mt-4'>Email : </span> {cliente.mail}</p>)
    }
     <p><span className='text-grey-700 font-bold text-2xl uppercase mt-4'>Telefono : </span> {cliente.telf}</p>

     <p><span className='text-grey-700 font-bold text-2xl uppercase mt-4'>Notas : </span> {cliente.notas}</p>
   </div>
  )
}

export default VerCliente