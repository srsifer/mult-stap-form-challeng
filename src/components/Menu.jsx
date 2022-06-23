import React , {useState}from 'react'
import FirsStep from '../components/steps/FirstStep'
import SecondStep from '../components/steps/SecondStep'
import ThirdStep from '../components/steps/ThirdStep'
import FourthStep from '../components/steps/FourthStep'
import NavbarForm from '../components/NavbarForm'
import {customStyles }from '../styles/ModalStyles'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Modal from 'react-modal';
import { AsideMenuStyles } from '../styles/menuStyles'


function Menu ({ShowUserList, showMenu}) {
  const [isOpen, setIsOpen ] = useState(false)
  const [step, setStep] = useState(1)
  const [createUser, setCreateUser] = useState([])
  const allUsers = useSelector(({UserStore}) => (UserStore.users))


  const toggleModal = () => {
    setIsOpen(!isOpen)
    setStep(1)
  }

  const nextStep = (newUser) => {
    setCreateUser({...createUser, ...newUser})
    if(step < 4)  setStep(step + 1)
    localStorage.setItem(`dataStep${step}`, JSON.stringify(newUser))
  }

  const backStep = () => {
    if(step > 1) return setStep(step - 1)
  }


  const saveNewUser = () => {
    localStorage.setItem("allUsers", JSON.stringify(allUsers))
  }

  const renderStaps = () => {
    if (step === 1) return <FirsStep step={step} nextStep={nextStep} />
    if (step === 2) return <SecondStep step={step} nextStep={nextStep}/>
    if (step === 3) return <ThirdStep step={step} nextStep={nextStep} />
    if (step === 4) return <FourthStep step={step} createUser={createUser} toggleModal={toggleModal} saveNewUser={saveNewUser}/>
  }

  return (
    <AsideMenuStyles showMenu={showMenu}>
        <button onClick={ShowUserList}>Listar clientes</button>
        <button onClick={toggleModal}>Novo Cliente</button>
        <Modal
          isOpen={isOpen}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="create user modal"
        >
          <NavbarForm toggleModal={toggleModal} step={step} backStep={backStep}/>
          <form>
            {renderStaps()}
          </form>
        </Modal>
    </AsideMenuStyles>
  )
}

Menu.propTypes = {
  ShowUserList: PropTypes.func,
  showMenu: PropTypes.bool
}

export default Menu;
