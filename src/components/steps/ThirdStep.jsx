import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import thirdStepValidation from '../../utils/inputValidations';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer , toast } from 'react-toastify';
import { ButtonNextStep, FormStepStyles, SectionInputs } from '../../styles/stepsFormStyles/FormStepStyles'


const ThirdStep = ({step, nextStep}) => {
    const [ newUser, setNewUser] = useState({
      date: 'dd/mm/aaaa',
      cpf: '',
      salary: 0,
      id: 0
   })


  const createId = () => setNewUser(newUser.id + 1)

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

      function handleValidation() {
    const validationError = thirdStepValidation.thirdStepValidation(newUser).error;
    if (validationError) return(
      <>{
        toast.error(`${validationError.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })}
      </>
    )
     createId();
     nextStep(newUser);
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
        <h3>Terceito passo</h3>
      </div>
      <SectionInputs>
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
          value={newUser.salary || ''}
          onChange={ handleChange }
          />
        </label>
      </SectionInputs>
      <ButtonNextStep
        type='button'
        onClick={() => handleValidation()}
        disabled={step === 4}
      >
        Pr??ximo
      </ButtonNextStep>
  </FormStepStyles>
  )
}

ThirdStep.propTypes = {
  nextStep: PropTypes.func,
  step: PropTypes.number
}
export default ThirdStep;
