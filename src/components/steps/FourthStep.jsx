import React, { useEffect } from 'react'
import { BsCheckCircle } from "react-icons/bs";
import PropTypes from 'prop-types'

const FourthStep = ({lastStep}) => {
  useEffect(() => {
   lastStep()
  }, [])
  
  return (
    <div>
      <BsCheckCircle /> 
      <h2>cadastro concluído com sucesso</h2>
    </div>
  )
}

FourthStep.propTypes = {
  lastStep: PropTypes.func
}
export default FourthStep;