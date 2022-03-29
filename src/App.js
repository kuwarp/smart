import React from "react"
import "./css/uifonts.css";
import "./css/props.css"
import "./css/App.css";

// Screens list:-
import Sidebar from './screens/sidebar';
import Navbar from './screens/navbar';
import Base from './screens/base';

function App(){
  return(
     <div className='App inline'>
       <Navbar/>
       
   <div className='App flex'>
     <Sidebar/>
     
     <div className='app flexbox'>
     {/* <Base/> */}
     </div>
     
   </div>

   </div>
   
  )
}

export default App;