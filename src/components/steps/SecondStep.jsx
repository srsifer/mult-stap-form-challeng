import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import secondStepValidation from '../../utils/inputValidations'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer , toast } from 'react-toastify'


const SecondStep = ({/* step, */ nextStep}) => {
     const [ newUser, setNewUser] = useState({
      cep: '',
      adress: '',
      adresstwo: '',
   })

   const handleChange = ({ target: { name, value } }) => {
    setNewUser({...newUser, [name]: value });
  };

    const getProgressFromLocalStorage = () => {
    const stepProgress = JSON.parse(localStorage.getItem('dataStep2'))
    stepProgress !== null ? setNewUser(stepProgress) : setNewUser(newUser)
  }
  

   useEffect(()=> {
     getProgressFromLocalStorage()
   },[])

   function handleValidation() {
    const validationError = secondStepValidation.secondStepValidation(newUser).error;
    if (validationError) return <>{toast.error(`${validationError.message}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })}</>
     nextStep(newUser)
    }
 
  return (
    <>
     <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    <h3>segundo passo</h3>
    <label name='cep'>
          <p>cep:</p>
          <input 
          type="text" 
          id='cep'
          name='cep'
          placeholder='cep'
          alt='campo pra preencher o cep'
          value={newUser.cep}
          onChange={ handleChange }
          />
        </label>
        <label name='adress'>
          <p>endereço 1:</p>
          <input 
          type="text" 
          id='adress'
          name='adress'
          placeholder='endereço 1'
          alt='campo pra preencher o endereço 1'
          value={newUser.adress}
          onChange={ handleChange }
          />
        </label>
        <label name='adresstwo'>
          <p>endereço 2:</p>
          <input 
          type="text" 
          id='adresstwo'
          name='adresstwo'
          placeholder='endereço 2'
          alt='campo pra preencher o endereço 2'
          value={newUser.adresstwo}
          onChange={ handleChange }
          />
        </label>
        <button
          type='button'
          onClick={() => handleValidation()}
        > 
          Próximo
        </button>
    </>
  )
}
SecondStep.propTypes = {
  nextStep: PropTypes.func,
  step: PropTypes.number
}

export default SecondStep;