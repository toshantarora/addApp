import React from 'react'

const Form = ({username, email, handleUserName, handleEmail, handleSubmitForm,handleClearUserData, handleDeleteUser}) => {
    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input type="text" name="username" onChange={handleUserName} value={username} placeholder="username" /><br />

                 <input type="text" name="email" onChange={handleEmail} value={email} placeholder="email" /><br />
            
                  <button type="submit">Add</button><br />
                  
                  <button onClick={handleClearUserData} type="submit">Remove All </button>
            </form>
        </div>
    )
}

export default Form;
