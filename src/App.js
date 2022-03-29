import React from "react"
import "./css/uifonts.css";
import "./css/props.css"
import "./css/App.css";

// Screens list:-
import Sidebar from './screens/sidebar';
import Navbar from './screens/navbar';

function App(){
  return(
     <div className='App block'>
       <Navbar/>
     
   <div className='App flex'>
     <Sidebar/>
     <div className='app-content'>
     {/* <Homepage/> */}
     </div>
    
   </div>

   </div>
  )
}

export default App;