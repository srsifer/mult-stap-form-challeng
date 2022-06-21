import React, { useState } from 'react'
import PropTypes from 'prop-types'


 const FirstStep = ({/* step, */ nextStep}) => {
   const [ newUser, setNewUser] = useState({
      name: '',
      lastname: '',
      email: '',
      cell: '',
   })

   const handleChange = ({ target: { name, value } }) => {
    setNewUser({...newUser, [name]: value });
  };


    return (
      <>
      <h2>primeiro passo</h2>
        <label name='name'>
          <p>nome:</p>
          <input 
          type="text" 
          id='name'
          name='name'
          placeholder='nome'
          alt='campo pra preencher o nome'
          onChange={ handleChange }
          
          />
        </label>
        <label name='lastname'>
          <p>sobrenome:</p>
          <input 
          type="text" 
          id='lastname'
          name='lastname'
          placeholder='sobrenome'
          alt='campo pra preencher o sobrenome'
          onChange={ handleChange }
          />
        </label>
        <label name='email'>
          <p>email:</p>
          <input 
          type="text" 
          id='email' 
          name='email'
          placeholder='email'
          alt='campo pra preencher o email'
          onChange={ handleChange }
          />
        </label>
        <label name='cell'>
          <p>telefone:</p>
          <input 
          type="text"
          id='cell'
          name='cell'
          placeholder='telefone'
          alt='campo pra preencher o telefone'
          onChange={ handleChange }
          />
        </label>
        <button
          type='button'
          onClick={() => nextStep(newUser)}
        > 
          Próximo
        </button>
      </>
    )
}

FirstStep.propTypes = {
  nextStep: PropTypes.func,
  step: PropTypes.number
}

export default FirstStep