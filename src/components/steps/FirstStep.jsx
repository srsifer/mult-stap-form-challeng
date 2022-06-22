import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import firstStepValidation from '../../utils/inputValidations'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer , toast } from 'react-toastify'


 const FirstStep = ({/* step, */ nextStep}) => {
   const [ newUser, setNewUser] = useState({
      name: '',
      lastname: '',
      email: '',
      cell: '',
   })

  const getProgressFromLocalStorage = () => {
    const stepProgress = JSON.parse(localStorage.getItem('dataStep1'))
    stepProgress !== null ? setNewUser(stepProgress) : setNewUser(newUser)
  }
  
  function handleValidation() {
    const validationError = firstStepValidation.firstStepValidation(newUser).error;
    if (validationError) return (
      <>{toast.error(`${validationError.message}`, {
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
     nextStep(newUser)
    }
  

   useEffect(()=> {
     getProgressFromLocalStorage()
   },[])
   

   const handleChange = ({ target: { name, value } }) => {
    setNewUser({...newUser, [name]: value });
  };

  
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
      <h2>primeiro passo</h2>
      <label name='name'>
      <p>nome:</p>
      <input 
        type="text" 
        id='name'
        name='name'
        value={newUser.name}
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
        value={newUser.lastname}
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
        value={newUser.email}
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
        value={newUser.cell}
        onChange={ handleChange }
        />
      </label>
      <button
        type='button'
        onClick={() =>  handleValidation()}
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