
import React from "react"
export default function App() {

  const [showCount , setshowCount] = React.useState();
  React.useEffect(()=>{
    fetch('http://localhost:3001/showcount')
    .then((res)=>res.json())
    .then(data=>setshowCount(data.currentCount))
    .catch(error=>console.log(error))
  },[])
  function handleClick(){
    fetch('http://localhost:3001/incrementcount')
    .then((res)=>res.json())
    .then(data=>setshowCount(data.currentCount))
    .catch(error=>console.log(error))
  }
  return (
    <div className = " h-screen w-screen bg-yellow-200 flex flex-row justify-center items-center content-center justify-items-center  ">
      <button type = "button" className = "bg-white hover:bg-gray-200 text-slate-950 hover:text-white  p-2 border-2 rounded font-bold border border-slate-500 hover:border-white" value="TaskOne" onClick = {handleClick}> TaskOne {showCount} </button>
    </div>
    
  );
}


