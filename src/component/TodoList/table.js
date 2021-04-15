import React, {useState, useEffect} from 'react'

const Table = () => {
    //create a new array
    const [details, setUserDetails] = useState([]);

    const handleDeleteButton = (id) => {
      let dataList = JSON.parse(localStorage.getItem('allData'));
      dataList.splice(id,1);
      localStorage.setItem('allData', JSON.stringify(dataList));
    }

    useEffect(() => {
        setUserDetails(JSON.parse(localStorage.getItem('allData')))
    }, [details])

    return (
        <div>
        
        <div>
            <table>
                <thead>
                  <tr>
                     <th>Id</th>
                     <th>Name</th>
                     <th>Remove</th>
                  </tr>
                </thead>
               <tbody>
               {
                   details.map((item, index) => {
                       return(<tr>
                    <td>{index}</td>
                     <td>{item.name}</td>
                     <td><button onClick={handleDeleteButton} type="submit">Delete</button></td>
                  </tr>)
                   })
               }
               </tbody>
            </table>
        </div>
        </div>
    )
}

export default Table
