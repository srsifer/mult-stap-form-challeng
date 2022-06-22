import React from 'react';
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import { NavbarFormStyles } from '../styles/navBarFormStyles';
import PropTypes from 'prop-types'

const NavbarForm = ({ toggleModal,backStep, step }) => {
  return (
    <NavbarFormStyles>
      <button hidden={step === 1} onClick={backStep}> <AiOutlineArrowLeft /> </button>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
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
