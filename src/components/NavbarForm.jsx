import React from 'react';
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import { NavbarFormStyles } from '../styles/navBarFormStyles';
import PropTypes from 'prop-types'

const NavbarForm = ({toggleModal,backStep, stap}) => {
  return (
    <NavbarFormStyles>
      <button onClick={backStep}> <AiOutlineArrowLeft /> </button>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
     <button onClick={toggleModal}><AiOutlineClose/></button>
    </NavbarFormStyles>
  )
}

NavbarForm.propTypes = {
  toggleModal: PropTypes.func,
  backStep: PropTypes.func,
  stap: PropTypes.number
}

export default NavbarForm
