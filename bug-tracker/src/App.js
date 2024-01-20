import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {

  const [newBug, setNewBug] = useState('')
  const [bugs, setBugs] = useState([])
  const [newBugPriority, setNewBugPriority] = useState('Medium')

  const addBug = () => {}

  const deleteBug = () => {}



  return (
    <div className="App">

      <h1>Bugzy</h1>

      <form>
        <label htmlFor='newBugDescription'>New Bug Description:</label>
        <input 
          id='newBugDescription'
          type='text'
          value={newBug}
          onChange={(e) => setNewBug(e.target.value)}></input>

        <label htmlFor='newBugPriority'>New Bug Priority:</label>
        <select 
          id='newBugPriority'
          value={newBugPriority}
          onChange={(e) => setNewBugPriority(e.target.value)}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select> 

        <button type='submit'>Add Bug</button>  
      </form>
      
    </div>
  );
}

export default App;
