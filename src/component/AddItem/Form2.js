import React, {useState} from 'react'
import './Form2.css';
import List2 from './List2';

const Form2 = () => {
    // const All_DATA = [
    //     {
    //         item_name:'soap',
    //         id:1
    //     },
    //     {
    //         item_name:'headphone',
    //         id:2
    //     },
    //     {
    //         item_name:'laptops',
    //         id:3
    //     }
    // ]

    const [state, setstate] = useState([{item_name : ''}]);
    const [item_name, setItemName] = useState('');


    const handleAddButton = (event) => {
        event.preventDefault();
        console.log("add clicked");
        //created a empty array of items
        let items = [];
        let items_data = JSON.parse(localStorage.getItem('data'));
        if(items_data == null)
        {
            let obj = {};
            obj["name"] = state.item_name;
            items.push(obj);
            localStorage.setItem('data' ,JSON.stringify(items))
        }
        else{
            items_data = JSON.parse(localStorage.getItem("allProducts"));
            let obj = {};
            items_data.push(obj);
            localStorage.setItem('data', JSON.stringify(items_data))

        }

    }

    
    const handleRemoveButton = (event) => {
        event.preventDefault();
        console.log("remove clicked")
    }
    return (
        <div style={{marginTop:'30px'}}>
            <div className="container">
            <form className="form-container">
            {/* {item_name} to check input type */}
                <input type="text" onChange={(event) => setItemName(event.target.value)}  value={item_name} placeholder="add item"></input>
                <button type="submit" onClick={handleAddButton}>Add</button>
                <button type="submit" onClick={handleRemoveButton}>Remove All</button>
            </form>
        </div>
        <div>
            <List2 item_name={item_name}/>
        </div>
        </div>
    )
}

export default Form2
