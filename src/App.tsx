import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type Inputs = {
  name: string,
  age: number,
};

export default function App() {

  let shema = yup.object().shape({
  name: yup.string().required('Obrigatorio porra'),
  age: yup.number().integer('Tambem obrigatorio')
  .positive('Bota um numero de verdade')
  .integer('Decimal ja virou sacanagem'),
})

  const { register, handleSubmit, formState:{errors} } = useForm<Inputs>({
    resolver: yupResolver(shema)
  });

  const onSubmit = useCallback((data) => {
    console.log(data);
 },[]);
 return (
   <>
   <h2>FormFodaseSemMao</h2>
   <form onSubmit={handleSubmit(onSubmit)}>
     <input
     type='text'
     placeholder='Bota o nome filho da pulta'
     {...register('name')}
     />

     {errors.name && <span>{errors.name.message}</span>}

      <input
     type='text'
     placeholder='Bota a idade filho da pulta'
     {...register('age')}
     />

      {errors.age && <span>{errors.age.message}</span>}

     <button type='submit'>Envia caralho</button>
   </form>
   </>
 )
}
