import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { createNewUser } from '../../reduxtollkit/slice/createUser'


const FourthStep = ({createUser, toggleModal}) => {
  const dispach = useDispatch()
  const allUsers = useSelector(({UserStore}) => (UserStore.users))
  
  const lastStep = () => {
    dispach(createNewUser(createUser))
    console.log('fui desparada action')
    localStorage.clear()
    toggleModal()
    // utilizar o useSelector pra guardar todos usuarios criados no redux 
    localStorage.setItem("allUsers", JSON.stringify(allUsers))
  }

  return (
    <div>
      <BsCheckCircle /> 
      <h2>cadastro concluído com sucesso</h2>
      <button type='button' onClick={() => lastStep()}>salvar</button>
    </div>
  )
}

FourthStep.propTypes = {
  createUser: PropTypes.any,
  toggleModal: PropTypes.func
}

export default FourthStep;