import React, {useState} from 'react'
import Table from './table';

const Form = () => {
    
    // const [userData, setUserData] = useState([]);

    const [ItemName, setProductName] = useState([{name: ''}]);

    const handleChange = (event) =>{
       setProductName(event.target.value);
    }

    const handleAddButton = () => {

        let array = [];
        let products = JSON.parse(localStorage.getItem('allData'));
      if(products === null)
       {
        let obj = {};
        obj["name"] = ItemName;
        array.push(obj);
        localStorage.setItem('allData', JSON.stringify(array))
      }
      else{
          products = JSON.parse(localStorage.getItem('allData'))
          let obj = {};
          obj['name'] = ItemName;
          products.push(obj);
          localStorage.setItem('allData', JSON.stringify(products))
      }
    }
    return (
        <div>
           {/* {name} */}
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" onChange={handleChange} placeholder="add Item"></input>
                <button type="submit" onClick={handleAddButton}>Add</button>
            </form>
            
        </div>
    )
}

export default Form
