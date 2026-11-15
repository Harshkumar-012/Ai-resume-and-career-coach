import { useState } from "react";
import { Sun, Moon } from "lucide-react";


function Navbar() {

const[dark,setDark] = useState(false);

  return (
    <div className='px-30 bg-[#241f42]'>
      <div className='h-20  text-3xl flex items-center text-white'>
        <img className='h-15 w-15 hover:cursor-pointer' src='https://res.cloudinary.com/jhdneqqr/image/upload/v1794753487/Ai-coach.png' alt='Logo'/>
        <div className='text-[20px] pl-2 font-bold'>Career & Resume Coach</div>
        <button className='ml-auto flex items-center gap-4'>
            <button className='text-[20px] hover:cursor-pointer'>Home</button>
            <button className='text-[20px] ml-3 hover:cursor-pointer'>Resume Help</button>
            <button className='text-[20px] ml-3 hover:cursor-pointer'>Career Guidance</button>
            <button className='text-[20px] ml-3 hover:cursor-pointer'>Interview Prep</button>
            <button className='text-[20px] ml-3 hover:cursor-pointer'>About</button>

            <button className=' ml-2 bg-blue-600 rounded-lg h-[40px] w-[130px] text-[20px] cursor-pointer'>GetStarted</button>
            <button className='ml-2 hover:cursor-pointer border rounded-full h-[40px] w-[40px] flex items-center justify-center' 
            onClick={()=>setDark(!dark)}>{dark?<Sun size={24}/>: <Moon size={24}/>}</button>
        </button>
      </div>
    </div>
  )
}

export default Navbar
