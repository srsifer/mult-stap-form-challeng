import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { createNewUser } from '../../reduxtollkit/slice/createUser'
import { ButtonNextStep,  SucessFormStyles } from '../../styles/stepsFormStyles/FormStepStyles';


const FourthStep = ({createUser, toggleModal, saveNewUser}) => {
  const dispach = useDispatch()

  const lastStep = () => {
    dispach(createNewUser(createUser))
    localStorage.clear()
    toggleModal()
    saveNewUser()
  }

  return (
    <SucessFormStyles>
      <SucessFormStyles>
        <h2>Cadastro concluído com sucesso</h2>
        <BsCheckCircle />
      </SucessFormStyles>
      <ButtonNextStep type='button' onClick={() => lastStep()}>Sair</ButtonNextStep>
    </SucessFormStyles>
  )
}

FourthStep.propTypes = {
  createUser: PropTypes.any,
  toggleModal: PropTypes.func,
  saveNewUser: PropTypes.func
}

export default FourthStep;
