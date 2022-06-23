import React, { useState } from 'react';
import Modal from 'react-modal';
import { customStyles } from '../styles/ModalStyles';
import PropTypes from 'prop-types'
import { MainDataModalStyles } from '../styles/DataModalUserStyles';
import { ButtonNextStep } from '../styles/stepsFormStyles/FormStepStyles';

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
        />
      </label>
      <Modal
        isOpen={showUserData}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="create user modal"
      >
        <MainDataModalStyles>
          <h3>{`Nome: ${name} ${lastname}`}</h3>
          <hr />
          <p>{`Email: ${email}`}</p>
          <hr />
          <p>{`Telefone: ${cell}`}</p>
          <hr />
          <p>{`Cep: ${cep}`}</p>
          <hr />
          <p>{`Endereço: ${adress}`}</p>
          <hr />
          <p>{`Endereço alternativo: ${adresstwo}`}</p>
          <hr />
          <p>{`Data de nascimento: ${date}`}</p>
          <hr />
          <p>{`CPF: ${cpf}`}</p>
          <hr />
          <p>{`Salario: ${salary},00`}</p>
          <hr />
          <div>
            <ButtonNextStep onClick={() => toggleUserData()}>fechar</ButtonNextStep>
          </div>
        </MainDataModalStyles>
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
