import React, { useState } from 'react';
import Modal from 'react-modal';
import { customStyles } from '../styles/ModalStyles';
import PropTypes from 'prop-types'

function DataModalUser({client}) {
  const {
    name,
    lastname,
    email,
    cell,
    cep,
    adress,
    adresstwo,
    date,
    cpf,
    salary
  } = client;
  const [showUserData, setShowUserData] = useState(false)

  const toggleUserData = () => {
    setShowUserData(!showUserData)
  }

  return (
    <li>
      <label name="user">
        <p>{` ${name} ${lastname}: ${email}`} </p>
        <button
          hidden={true}
          id='user'
          onClick={toggleUserData}
        >
          visualizar dados
        </button>
      </label>
      <Modal
        isOpen={showUserData}
        style={customStyles}
        contentLabel="create user modal"
      >
        <h3>{`${name} ${lastname}`}</h3>
        <p>{email}</p>
        <p>{cell}</p>
        <p>{cep}</p>
        <p>{adress}</p>
        <p>{adresstwo}</p>
        <p>{date}</p>
        <p>{cpf}</p>
        <p>{salary}</p>
        <button onClick={() => toggleUserData()}>fechar</button>
      </Modal>
    </li>
  )
}

DataModalUser.propTypes={
  client: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cell: PropTypes.string.isRequired,
    cep: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired,
    adresstwo: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
  }).isRequired
}

export default DataModalUser;
