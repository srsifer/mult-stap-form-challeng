import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const ThirdStep = ({step, nextStep}) => {
    const [ newUser, setNewUser] = useState({
      date: 'dd/mm/aaaa',
      cpf: '',
      salary: 0,
   })

   const handleChange = ({ target: { name, value } }) => {
    setNewUser({...newUser, [name]: value });
  };

    const getProgressFromLocalStorage = () => {
    const stepProgress = JSON.parse(localStorage.getItem('dataStep3'))
    stepProgress !== null ? setNewUser(stepProgress) : setNewUser(newUser)
  }
  

   useEffect(()=> {
     getProgressFromLocalStorage()
   },[])

    return (
      <>
        <h3>Terceito passo</h3>
        <label name='date'>
          <p>Data de Nascimento:</p>
          <input 
          type="date" 
          id='date'
          name='date'
          placeholder='Data de Nascimento'
          alt='campo pra preencher a Data de Nascimento'
          value={newUser.date}
          onChange={ handleChange }
          />
        </label>
        <label name='CPF'>
          <p>CPF:</p>
          <input 
          type="text" 
          id='CPF'
          name='cpf'
          placeholder='CPF'
          alt='campo pra preencher o CPF (cadastro de pessoa fisica)'
          value={newUser.cpf}
          onChange={ handleChange }
          />
        </label>
        <label name='salary'>
          <p>Renda Mensal:</p>
          <input 
          type="number" 
          id='salary'
          name='salary'
          placeholder='Renda Mensal'
          alt='campo pra preencher a Renda Mensal'
          value={newUser.salary}
          onChange={ handleChange }
          />
        </label>
        <button
          type='button'
          onClick={() => nextStep(newUser)}
          disabled={step === 4}
        > 
          Próximo
        </button>
    </>
    )
}

ThirdStep.propTypes = {
  nextStep: PropTypes.func,
  step: PropTypes.number
}
export default ThirdStep;