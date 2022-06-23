import React, {  useState } from 'react'
import { useSelector } from 'react-redux'
import DataModalUser from './components/DataModalUser';
import  Menu  from './components/Menu'
import { BodyAppSection, ClientListStyles, HeaderApp } from './styles/AppStyles';


function App() {
  const [showuserList, setShowUserList] = useState(true)
  const storeRedux = useSelector(({UserStore}) => (UserStore.users))

  const toggleList = () => {
    setShowUserList(!showuserList)
    localStorage.setItem('allUsers', JSON.stringify(storeRedux))
  }
  return (
    <>
    <HeaderApp>
      <h1>Multi Steps Form</h1>
    </HeaderApp>
    <BodyAppSection>
      <Menu ShowUserList={toggleList}/>
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
