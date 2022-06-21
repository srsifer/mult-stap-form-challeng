import React , {useState}from 'react'
import FirsStep from '../components/steps/FirstStep'
/* import SecondStep from '../components/steps/SecondStep'
import ThirdStep from '../components/steps/ThirdStep'
import FourthStep from '../components/steps/FourthStep' */
import NavbarForm from '../components/NavbarForm'
import {customStyles }from '../styles/ModalStyles'

import Modal from 'react-modal';


export const Menu = () => {
  const [isOpen, setIsOpen ] = useState(false)
  
  const toggleModal = () => {
    setIsOpen(!isOpen)
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
        <NavbarForm toggleModal={toggleModal} isOpen={isOpen}/>
        <form>
          <FirsStep />
        </form>
      </Modal>
        
      </div>
    </aside>
  )
}
