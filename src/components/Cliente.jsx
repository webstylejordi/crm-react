 import { useNavigate } from "react-router-dom"
 
const Cliente = ({cliente, handleEliminar }) => {
     const navigate = useNavigate();


     const {nombre, empresa, mail, telf ,notas, id} =cliente
  return (
    <tr className='border-b hover:bg-gray-50'>
      <td className='p-3'>{nombre}</td>
      <td className='p-3'>
          <p><span className='text-gray-800 uppercase font-bold '>email</span>{mail}</p>
          <p><span className='text-gray-800 uppercase font-bold '>telf</span>{telf}</p>
     </td>
     <td className='p-3'>{empresa}</td>
     <td className='p-3'>
          <button
               type='button'
               className='bg-yellow-500 text-white w-full hover:bg-yellow-600 p-2 uppercase 
               font-bold text-xs mt-3'
               onClick={() =>navigate(`/clientes/${id}` )}
          >Ver</button>  

          <button
               type='button'
               className='bg-blue-600 text-white w-full hover:bg-blue-700 p-2 uppercase 
               font-bold text-xs mt-3'
               // onCick={() => navigate(`/clientes/editar/${id}`)}
               onClick={() =>navigate(`/clientes/editar/${id}` )}
          >Editar</button>  
              
                <button
                 className='bg-red-600 text-white w-full hover:bg-red-700 p-2 uppercase 
                 font-bold text-xs mt-3'
                 type='button'
                 onClick={() => handleEliminar(id)}
          >Eliminar</button>   
     
     </td>
    </tr>
  )
}

export default Cliente
