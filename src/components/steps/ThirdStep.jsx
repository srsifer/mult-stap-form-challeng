import React from 'react'

const ThirdStep = () => {
    return (
      <>
        <h3>Terceito passo</h3>
        <label name='date'>
          <p>Data de Nascimento:</p>
          <input 
          type="date" 
          id='da'
          placeholder='Data de Nascimento'
          alt='campo pra preencher a Data de Nascimento'
          />
        </label>
        <label name='CPF'>
          <p>CPF:</p>
          <input 
          type="text" 
          id='CPF'
          placeholder='CPF'
          alt='campo pra preencher o CPF (cadastro de pessoa fisica)'
          />
        </label>
        <label name='Renda Mensal'>
          <p>Renda Mensal:</p>
          <input 
          type="number" 
          id='Renda Mensal'
          placeholder='Renda Mensal'
          alt='campo pra preencher a Renda Mensal'
          />
        </label>
    </>
    )
}

export default ThirdStep;