import React, {  useState } from 'react'
import { useSelector } from 'react-redux'
import DataModalUser from './components/DataModalUser';
import  Menu  from './components/Menu'


function App() {
    const [showuserList, setShowUserList] = useState(true)


  const toggleList = () => {
    setShowUserList(!showuserList)
  }
  const storeRedux = useSelector(({UserStore}) => (UserStore.users))
  return (
    <>
      <h1>Multi Steps Form</h1>
      <Menu ShowUserList={toggleList}/>
      {
         storeRedux == undefined || storeRedux == []
         ? <h2>nenhum cliente cadastrado </h2>
         : 
         <ul hidden={showuserList}>
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
          </ul>
      }
    </>
  )
}

export default App
