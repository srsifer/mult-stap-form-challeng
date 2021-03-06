import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import secondStepValidation from '../../utils/inputValidations'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer , toast } from 'react-toastify'
import { ButtonNextStep, FormStepStyles, SectionInputs } from '../../styles/stepsFormStyles/FormStepStyles'



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
    if (validationError) return (
    <>
      {toast.error(`${validationError.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })}
    </>)
     nextStep(newUser)
    }

  return (
    <FormStepStyles>
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
      <div>
        <h3>segundo passo</h3>
      </div>
      <SectionInputs>
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
          <p>endere??o 1:</p>
          <input
            type="text"
            id='adress'
            name='adress'
            placeholder='endere??o 1'
            alt='campo pra preencher o endere??o 1'
            value={newUser.adress}
            onChange={ handleChange }
          />
          </label>
          <label name='adresstwo'>
            <p>endere??o 2:</p>
            <input
            type="text"
            id='adresstwo'
            name='adresstwo'
            placeholder='endere??o 2'
            alt='campo pra preencher o endere??o 2'
            value={newUser.adresstwo}
            onChange={ handleChange }
            />
          </label>
      </SectionInputs>
        <ButtonNextStep
          type='button'
          onClick={() => handleValidation()}
        >
          Pr??ximo
        </ButtonNextStep>
    </FormStepStyles>
  )
}
SecondStep.propTypes = {
  nextStep: PropTypes.func,
  step: PropTypes.number
}

export default SecondStep;
