import React from 'react';
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import { NavbarFormStyles, StepDivAnimation, StepDivAnimation2, StepDivAnimation3, StepDivAnimation4 } from '../styles/navBarFormStyles';
import PropTypes from 'prop-types'

const NavbarForm = ({ toggleModal,backStep, step }) => {

  return (
    <NavbarFormStyles>
      <button hidden={step === 1} onClick={backStep}> <AiOutlineArrowLeft /> </button>
      <StepDivAnimation step={step}></StepDivAnimation>
      <StepDivAnimation2 step={step}></StepDivAnimation2>
      <StepDivAnimation3 step={step}></StepDivAnimation3>
      <StepDivAnimation4 step={step}></StepDivAnimation4>
     <button hidden={step === 4} onClick={toggleModal}><AiOutlineClose/></button>
    </NavbarFormStyles>
  )
}

NavbarForm.propTypes = {
  toggleModal: PropTypes.func,
  backStep: PropTypes.func,
  step: PropTypes.number
}

export default NavbarForm
