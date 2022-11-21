import { useEffect, useState } from 'react';
import './App.css';
import PermanentDrawerLeft from "./components/PermanentDrawerLeft";
;


function App() {

  const [bottle,setBottle] =useState("hi there")

  useEffect(()=>{
    console.log(bottle)
  },[bottle])

  return (
    <>
    <PermanentDrawerLeft bottle={bottle} setBottle={setBottle}/>
    </>
  )
 
 
    
           
}

export default App;
