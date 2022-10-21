import logo from './logo.svg';
import './App.css';
import { ReactEventHandler, useState } from 'react'; 
import { ToDoList } from './components/ToDoList'

 const App = () => {

  return (
    <div className="App">
      <ToDoList />      
    </div>
  );
}

export default App;
