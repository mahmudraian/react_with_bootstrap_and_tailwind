
import './App.css';
import Assignment from './Components/Assignmentmarks/Assignment';
import NavBr from './Components/NavBr';
import Phonebar from './Components/Phonebar/Phonebar';
import Pricing from './Components/Pricing/Pricing';





function App() {
  return (
    <div className="App">
      <NavBr></NavBr> 
     <h1 className="text-5xl">This is me!</h1>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
     <p >This is me!</p>
     <Pricing></Pricing>
     <Assignment></Assignment>
     <Phonebar></Phonebar>
    
    
    
     
    </div>
  );
}

export default App;
