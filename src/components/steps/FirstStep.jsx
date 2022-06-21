import React from 'react'


 const FirstStep = () => {
    return (
      <>
      <h2>primeiro passo</h2>
        <label name='name'>
          <p>nome:</p>
          <input 
          type="text" 
          id='name'
          placeholder='nome'
          alt='campo pra preencher o nome'
          />
        </label>
        <label name='lastname'>
          <p>sobrenome:</p>
          <input 
          type="text" 
          id='lastname'
          placeholder='sobrenome'
          alt='campo pra preencher o sobrenome'
          />
        </label>
        <label name='email'>
          <p>email:</p>
          <input 
          type="text" 
          id='email' 
          placeholder='email'
          alt='campo pra preencher o email'
          />
        </label>
        <label name='cell'>
          <p>telefone:</p>
          <input 
          type="text"
          id='cell'
          placeholder='telefone'
          alt='campo pra preencher o telefone'
          />
        </label>
      </>
    )
}

export default FirstStep