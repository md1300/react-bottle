import AdvanceStore from './componets/advance/storage'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Watches from './componets/watche/watches'
import Bottles from './componets/bottle/bottles'

function App() {
  

  const students=[
    {id:1,name:'tawhid', ciriny:'seven'},
    {id:2,name:'sorker',  ciriny:'eight'},
    {id:3,name:'khan',  ciriny:'nine'},
    {id:4,name:'pailot',  ciriny:'six'},
    {id:5, name:'hafija', ciriny:'ten'}
  ]


  const [useWatches,setUseWatch]=useState([])

  useEffect(()=>{
    fetch('watches.json')
    .then(res=>res.json())
    .then(data=>setUseWatch(data))
  },[])

  return (
    <>
   
      <h1>REACT</h1>
      <Bottles></Bottles>

      

     
      
     {/* {
      useWatches.map(watch=><Watches watch={watch}></Watches>)
     }


      {
        students.map(student=><AdvanceStore tawhid={student}></AdvanceStore>)
      } */}
     
     
    </>
  )
}

export default App
