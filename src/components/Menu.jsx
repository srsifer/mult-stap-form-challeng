import React , {useState}from 'react'
import FirsStep from '../components/steps/FirstStep'
import SecondStep from '../components/steps/SecondStep'
import ThirdStep from '../components/steps/ThirdStep'
import FourthStep from '../components/steps/FourthStep'
import NavbarForm from '../components/NavbarForm'
import {customStyles }from '../styles/ModalStyles'
import { useDispatch } from 'react-redux'
import { stepOneReducer } from '../reduxtollkit/slice/createUser'
import Modal from 'react-modal';


function Menu () {
  const [isOpen, setIsOpen ] = useState(false)
  const [step, setStep] = useState(1)
  const [createUser, setCreateUser ] = useState([])
  const dispach = useDispatch()

  const toggleModal = () => {
    setIsOpen(!isOpen)
    setStep(1)
  }

  const nextStep = (newUser) => {
    setCreateUser({...createUser, ...newUser})
    setStep(step + 1)
  }

   const lastStep = () => {
    nextStep()
    dispach(stepOneReducer(createUser))
  }  
  const backStep = () => {
    setStep(step - 1)
  }

  const renderStaps = () => {
    if (step === 1) return <FirsStep step={step} nextStep={nextStep} />
    if (step === 2) return <SecondStep step={step} nextStep={nextStep}/>
    if (step === 3) return <ThirdStep step={step} nextStep={nextStep} />
    if (step === 4) return <FourthStep step={step} lastStep={lastStep} />  
  }

  return (
    <aside>
      <div>
        <button>Listar clientes</button>
        <button onClick={toggleModal}>Novo Cliente</button>
         <Modal
        isOpen={isOpen}
        style={customStyles}
        contentLabel="create user modal"
      >
        <NavbarForm toggleModal={toggleModal} step={step} backStep={backStep}/>
        <form>
          {renderStaps()}
        </form>
        
      </Modal>
      </div>
    </aside>
  )
}


export default Menu;