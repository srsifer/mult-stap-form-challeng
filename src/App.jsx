import React, {  useState } from 'react'
import Modal from 'react-modal';
import { useSelector } from 'react-redux'
import  Menu  from './components/Menu'
import { customStyles } from './styles/ModalStyles'

function App() {
 const [showuserList, setShowUserList] = useState(true)
 const [showUserData, setShowUserData]= useState(false)

 const storeRedux = useSelector(({UserStore}) => (UserStore.users))

  const toggleList = () => {
    setShowUserList(!showuserList)
  }

  const toggleUserData = () => {
    setShowUserData(!showUserData)
  }

  return (
    <>
      <h1>multi Steps Form</h1>
      <Menu ShowUserList={toggleList}/>
      {
         storeRedux == undefined || storeRedux == []
         ? <h2>nenhum cliente cadastrado </h2>
         : 
         <ul hidden={showuserList}>
           {
             storeRedux.map((client)=> {
               return (
               <li 
                key={client.id}
               >
                 <label name="user">
                   <p>{`Nome: ${client.name} ${client.lastname}  email: ${client.email}`} </p>
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
                  <h3>{`${client.name} ${client.lastname}`}</h3>
                  <p>{client.email}</p>
                  <p>{client.cell}</p>
                  <p>{client.cep}</p>
                  <p>{client.adress}</p>
                  <p>{client.adresstwo}</p>
                  <p>{client.date}</p>
                  <p>{client.cpf}</p>
                  <p>{client.salary}</p>
                  <button onClick={() => toggleUserData()}>fechar</button>
               </Modal>
               </li>)
             })
           }
          </ul>
      }
    </>
  )
}

export default App
