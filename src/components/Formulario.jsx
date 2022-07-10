import React from 'react'
import {Formik, Form, Field} from 'formik'


export const Formulario = () => {
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
          >
               {() => (
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
                              type="password"
                              placeholder="nombre cliente"
                              className="mt-2 block w-full p-3 bg-gray-50"
                         />
                    </div >

                    <div className='mb-4' >
                         <label
                              className="text-gray-800"
                              htmlFor='empresa'>
                                   Nombre :
                         </label>
                         <Field 
                              id="empresa"
                              name="empresa"
                              type="text"
                              placeholder="Empresa del Cliente"
                              className="mt-2 block w-full p-3 bg-gray-50"
                         />
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
                         className='mt-5 w-full p-3 bg-blue-800 text-white uppercase font-bold text-lg text-center'
                    />
               </Form>
                    )}
          </Formik>
    </div>
  )
}
