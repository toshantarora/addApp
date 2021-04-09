import React, {useState, useEffect} from 'react'
import Form from './Form';
import List from './List';
// const All_DATA = [
//     {
//     id:1,
//     username:'Toshant',
//     email:'toshantarora19@gmail.com'
// }]

const All_DATA = localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData'))
  : []



const Main = () => {
  
    const [userData, setUserData] = useState([All_DATA]);
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');

    // useEffect(() => {
    //     localStorage.setItem('userData', JSON.stringify(userData))
    //   }, [userData])

    const handleUserName = event => {
        event.preventDefault();
        console.log('Username ', event.target.value)
        setUserName(event.target.value)
      }
      
      const handleEmail = event => {
        event.preventDefault();
        console.log('Email ', event.target.value)
        setEmail(event.target.value)
      }

      const handleSubmitForm = event => {
        event.preventDefault();
        if(username !== '' && email !== ''){
          //single object
          const details = {username, email};

          // do not override previous values in the array
          // use spread operator to access previous values
          setUserData([...userData, details]);

           // clean input fields

           //Lastly, you have to clear both the input fields after the form submission. 
           //Set them back to their initial values, that is, empty strings
           setUserName('');
           setEmail('');
        }
        else if (userData == null) {
          localStorage.setItem('userData', JSON.stringify(userData))
        }
        else{
            console.log('Invalid name or email')
        }
        // do something when submitting the form
      }

      const handleClearUserData = () => {
        setUserData([])
      }

      // const handleDeleteUser = () => {
      //   //   console.log("a")
      //       setUserData([])
      // }

    return (
        <div>
            <h1>Hello</h1>
            <div>
                <Form
                    username={username}
                    email={email}
                    handleUserName={handleUserName}
                    handleEmail={handleEmail}
                    handleSubmitForm={handleSubmitForm}
                    handleClearUserData= {handleClearUserData}
                      // handleDeleteUser ={handleDeleteUser}
                />
            </div>
            <div>
                <List userData={userData}/>
            </div>
        </div>
    )
}

export default Main;
