import React, {  useState } from 'react'
import { useSelector } from 'react-redux'
import DataModalUser from './components/DataModalUser';
import  Menu  from './components/Menu'
import { BodyAppSection, ClientListStyles, HeaderApp } from './styles/AppStyles';
import { CgMenu } from "react-icons/cg";


function App() {
  const [showuserList, setShowUserList] = useState(true)
  const [showMenu, setShowMenu] = useState(true)
  const storeRedux = useSelector(({UserStore}) => (UserStore.users))

  const toggleList = () => {
    setShowUserList(!showuserList)
    localStorage.setItem('allUsers', JSON.stringify(storeRedux))
  }


   const toggleShowMenu = () => {
     setShowMenu(!showMenu)
   }
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
      <Menu ShowUserList={toggleList} showMenu={showMenu}/>
      {
        storeRedux == undefined || storeRedux == []
        ? <h2>nenhum cliente cadastrado </h2>
        :
        <ClientListStyles hidden={showuserList}>
          {
            storeRedux.map((client)=> {
              return (
              <DataModalUser
                key={client.id}
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
