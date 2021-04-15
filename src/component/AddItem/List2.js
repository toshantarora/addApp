import React from 'react'

const List2 = ({item_name}) => {

    const handleDeleteButton = (event) => {
        event.preventDefault();
        console.log("Delete Button CLicked")
    }
    return (
        <div>
            <h1>dataList</h1>
            <div  style={{display:'flex',justifyContent:"center", alignItems:"center"}}>
               <table>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Delete an Item</th>                
                        </tr>
                    </thead>
                          
                            <tbody>
                            <tr>
                                    <td>{item_name}</td>
                                    <td><button type="submit" onClick={handleDeleteButton}>Delete</button></td>
                                </tr>
                            </tbody>
                           
                </table>
            </div>
            
        </div>
    )
}

export default List2;
