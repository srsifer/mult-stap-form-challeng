import React from 'react'

const SecondStep = () => {
  return (
    <>
    <h3>segundo passo</h3>
    <label name='cep'>
          <p>cep:</p>
          <input 
          type="text" 
          id='cep'
          placeholder='cep'
          alt='campo pra preencher o cep'
          />
        </label>
        <label name='adress'>
          <p>endereço 1:</p>
          <input 
          type="text" 
          id='adress'
          placeholder='endereço 1'
          alt='campo pra preencher o endereço 1'
          />
        </label>
        <label name='adresstwo'>
          <p>endereço 2:</p>
          <input 
          type="text" 
          id='adresstwo'
          placeholder='endereço 2'
          alt='campo pra preencher o endereço 2'
          />
        </label>
    </>
  )
}

export default SecondStep;