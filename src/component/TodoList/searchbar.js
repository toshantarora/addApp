import React,{useState, useEffect} from 'react'
import FilteredItems from './FilteredItems'
const SearcBar = () => {
    const [searchItem, setSearchItem] = useState('');
    const [allList, setAllList] = useState([]);
    const[filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        let data_from_add_list = JSON.parse(localStorage.getItem('allData'));
        setAllList(data_from_add_list);
        return () => {
     
        }
    }, [searchItem,filteredItems])

    const handleChange = (e) => {
        e.preventDefault();
        setSearchItem(e.target.value);
       setFilteredItems(allList.filter(item => item.name.toLowerCase().includes(searchItem.toLowerCase())));

     
    }
    return (
        <div>
            <input type="text" value={searchItem} onChange={handleChange} placeholder="search"></input>
            {filteredItems.map((items, index) => (<FilteredItems key={index} {...items}/>))}
        </div>
    )
}

export default SearcBar;
