import React from 'react'
import Form from './form';
import Table from './table'
import './Main.css';
import SearcBar from './searchbar';
const Main = () => {
    return (
        <div className="todo-container">
          <div>
           <h1>TodoList</h1>
           </div>
           <div>
               <Form/>
           </div>
           <div>
               <Table/>
           </div>
        <div>
            <SearcBar/>
        </div>
        </div>
    )
}

export default Main
