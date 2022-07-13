import React from 'react'
import {Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'

export const Formulario = () => {
     const navigate = useNavigate()

     const handleSubmit = async (valores) => {
          console.log(valores)
     try {
          const url = 'http://localhost:4000/clientes'

          const respuesta = await fetch(url, {
               method:'POST',
               body: JSON.stringify(valores),
               headers : {'Content-Type': 'application/json'}
          })
          
          const resultado = await respuesta.json()
      
          navigate('/clientes')
          console.log('he llegado')
     } catch (error) {
               console.log(error)
           }
     }

     const nuevoClienteShema = Yup.object().shape({
          nombre : Yup.string()
                      .required('el nombre del cliente es obligatorio')
                      .min(3,'el nombre es muy corto'),
          empresa : Yup.string()
                      .required('la empresae es obligatoria'),
          mail :  Yup.string()
                     .required('se necesita un email')
                     .email('formato incorrecto de email'),
          telf :  Yup.number()
                     .positive('Numero no valido')
                     .integer('Numero no válido')
                     .typeError('El número es incorrecto'),
          notas :''
})

  return (
    <div className='bg-white mt-10 px-5 py-10 shadow-md rounded-md md:w-3/4 mx-auto'>
          <h1 className='font-bold  text-gray-600 text-xl uppercase text-center'>
               Agregar Cliente
          </h1>
 
          <Formik
               initialValues={{
                    nombre : '',
                    empresa : '',
                    mail : '',
                    telf : '',
                    notas :''
               }}
               onSubmit={async (values, {resetForm}) => 
                  {  handleSubmit(values)
                    resetForm()
               }}
               validationSchema= {nuevoClienteShema}
          >
               {({errors, touched}) => { 
                    return (

               <Form className='mt-10'>
                    <div className='mb-4'>
                         <label
                              className="text-gray-800"
                              htmlFor='nombre'>
                                   Nombre :
                         </label>
                         <Field 
                              id="nombre"
                              name="nombre"
                              type="text"
                              placeholder="nombre cliente"
                              className="mt-2 block w-full p-3 bg-gray-50"
                         />
                          {errors.nombre && touched.nombre ? (
                              <Alerta>{errors.nombre}</Alerta>  )
                              :null}
                    </div >

                    <div className='mb-4' >
                         <label
                              className="text-gray-800"
                              htmlFor='empresa'>
                                   Empresa :
                         </label>
                         <Field 
                              id="empresa"
                              name="empresa"
                              type="text"
                              placeholder="Empresa del Cliente"
                              className="mt-2 block w-full p-3 bg-gray-50"
                         />
                        {errors.empresa && touched.empresa ? (
                              <Alerta>{errors.empresa}</Alerta>  )
                              :null}
                    </div>
                 
                    <div className='mb-4'>
                         <label
                              className="text-gray-800"
                              htmlFor='mail'>
                                   email :
                         </label>
                         <Field 
                              id="mail"
                              name="mail"
                              type="email"
                              placeholder="email del Cliente"
                              className="mt-2 block w-full p-3 bg-gray-50"
                         />
                         {errors.mail && touched.mail ? (
                              <Alerta>{errors.mail}</Alerta>  )
                              :null}
                    </div>

                    <div className='mb-4'>
                         <label
                              className="text-gray-800"
                              htmlFor='telf'>
                                   Teléfono :
                         </label>
                         <Field 
                              id="telf"
                              name="telf"
                              type="tel"
                              placeholder="email del Cliente"
                              className="mt-2 block w-full p-3 bg-gray-50"
                         />
                         {errors.telf && touched.telf ? (
                              <Alerta>{errors.telf}</Alerta>  )
                              :null}
                    </div>

                    <div className='mb-4'>
                         <label
                              className="text-gray-800"
                              htmlFor='notas'>
                                   notas :
                         </label>
                         <Field 
                              id="notas"
                              name="notas"
                              as="textarea"
                              type="text"
                              placeholder="notas del cliente"
                              className="mt-2 block w-full p-3 bg-gray-50 h-40"
                         />
                    </div>

                    <input
                         type="submit" 
                         value="agregar cliente"
                         className='mt-5 w-full p-3 bg-blue-800 text-white uppercase font-bold text-lg text-center cursor-pointer'
                    />
               </Form>
                    )}}
          </Formik>
    </div>
  )
}
