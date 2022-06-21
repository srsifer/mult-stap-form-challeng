import React , {useState}from 'react'
import FirsStep from '../components/steps/FirstStep'
import SecondStep from '../components/steps/SecondStep'
import ThirdStep from '../components/steps/ThirdStep'
import FourthStep from '../components/steps/FourthStep'
import NavbarForm from '../components/NavbarForm'
import {customStyles }from '../styles/ModalStyles'
import Modal from 'react-modal';
const Menu = () => {
  const [isOpen, setIsOpen ] = useState(false)
  const [step, setStep] = useState(1)

  const toggleModal = () => {
    setIsOpen(!isOpen)
    setStep(1)
  }

  const nextStap = () => {
    setStep(step + 1)
  }

  const backStep = () => {
    setStep(step - 1)
  }

  const renderStaps = () => {
    if (step === 1) return <FirsStep />
    if (step === 2) return <SecondStep />
    if (step === 3) return <ThirdStep />
    if (step === 4) return <FourthStep />  
  }

  return (
    <aside>
      <div>
        <button>Listar clientes</button>
        <button onClick={toggleModal}>Novo Cliente</button>
         <Modal
        isOpen={isOpen}

        style={customStyles}
        contentLabel="Example Modal"
      >
        <NavbarForm toggleModal={toggleModal} step={step} backStep={backStep}/>
        <form>
          {renderStaps()}
        </form>
        <button
          onClick={nextStap}
          disabled={step === 4}
        > 
          Próximo
        </button>
      </Modal>
        
      </div>
    </aside>
  )
}


export default Menu;