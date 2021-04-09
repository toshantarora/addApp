import React from 'react'

const List = ({userData}) => {

    const handleDeleteUser = (i) => {
        // alert('delete');
       
    //     var index = userData.indexOf(1);
    //    userData =  userData.splice(index, 1);
    //      console.log(userData);
  
    //     localStorage.removeItem('userData')
        
        // e.preventDefault();
        // let k = JSON.parse(JSON.stringify(userData))
        // k.pop()
        //  setUserData(k)
        // let data = JSON.parse(localStorage.getItem('userData'))

        // console.log(i);
        // data.splice(i,1)
        // console.log(data)
    
    }
    return (
        <div>
            <ul>
                {
                    userData.map((item, index) => {
                        return(<div key={index}>
                            <li>{item.username}</li>
                            <li>{item.email}</li>
                            <li><button onClick={handleDeleteUser}>Delete</button></li>
                        </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default List;
