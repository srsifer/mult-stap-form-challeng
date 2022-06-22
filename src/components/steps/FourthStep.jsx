import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { createNewUser } from '../../reduxtollkit/slice/createUser'


const FourthStep = ({createUser, toggleModal, saveNewUser}) => {
  const dispach = useDispatch()
  
  const lastStep = () => {
    dispach(createNewUser(createUser))
    localStorage.clear()
    toggleModal()
    saveNewUser()
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
  toggleModal: PropTypes.func,
  saveNewUser: PropTypes.func
}

export default FourthStep;