import React from 'react';
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import { NavbarFormStyles } from '../styles/navBarFormStyles';
import PropTypes from 'prop-types'

const NavbarForm = ({toggleModal}) => {
  return (
    <NavbarFormStyles>
      <button> <AiOutlineArrowLeft /> </button>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
     <button onClick={toggleModal}><AiOutlineClose/></button>
    </NavbarFormStyles>
  )
}

NavbarForm.propTypes = {
  toggleModal: PropTypes.func
}

export default NavbarForm
