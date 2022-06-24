import React, {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import DataModalUser from './components/DataModalUser';
import  Menu  from './components/Menu';
import { BodyAppSection, ClientListStyles, HeaderApp } from './styles/AppStyles';
import { createNewUser } from '../src/reduxtollkit/slice/createUser'
import { CgMenu } from "react-icons/cg";


function App() {
  const [showuserList, setShowUserList] = useState(true)
  const [showMenu, setShowMenu] = useState(true)
  const storeRedux = useSelector(({UserStore}) => (UserStore.users))
  const oldClients = JSON.parse(localStorage.getItem('allUsers'))
  const dispatch = useDispatch()

  const toggleList = () => {
    setShowUserList(!showuserList)
    localStorage.setItem('allUsers', JSON.stringify(...storeRedux))
    toggleShowMenu()
  }


   const toggleShowMenu = () => {
     setShowMenu(!showMenu)
   }


   const getOldClients = () =>{
    if (oldClients !== null) dispatch(createNewUser(oldClients))
    return null
  }

   useEffect(() => {
    getOldClients()
    console.log('use efect disparado')
   }, [0])


  return (
    <>
      <HeaderApp>
        <p></p>
        <h1>Multi Steps Form</h1>
        <label name="checkMenu">
        <input hidden type="checkbox" onClick={toggleShowMenu} id="checkMenu"/>
          <CgMenu/>
        </label>
      </HeaderApp>
      <BodyAppSection>
        <Menu ShowUserList={toggleList} showMenu={showMenu} closeMenu={toggleShowMenu}/>
        {
          storeRedux === undefined || storeRedux.length === 0
          ? <ClientListStyles hidden={showuserList}>
              <h2>Nenhum cliente cadastrado </h2>
            </ClientListStyles>
          :
          <ClientListStyles hidden={showuserList}>
            {
              storeRedux.map((client)=> {
                return (
                <DataModalUser
                  key={Math.random() * client.id + Math.random()}
                  client={client}
                />
                )
              })
            }
          </ClientListStyles>
        }
      </BodyAppSection>
    </>
  )
}

export default App
