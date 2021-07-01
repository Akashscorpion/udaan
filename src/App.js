import './App.css';
import React,{useState} from 'react'
import InternalComponent from './components/internalComponent';
import ThComp from './components/thComp'


function App() {

  const [hr, sethr] = useState([])
  const [vr, setvr] = useState([])
  function print(){
 
 
  }
  print();
  return (
    <div className="App">
  <table>
       <ThComp />
  
       </table>
       
     
       
      
    </div>
  );
}

export default App;
