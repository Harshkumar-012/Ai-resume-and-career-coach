import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
    

function Navbar() {

const[dark,setDark] = useState(false);

const [menu, setMenu] = useState(false);

  return (
    <div className='px-4 sm:px-8 md:px-12 lg:px-20 bg-[#241f42]'>
      <div className='h-20  text-3xl flex items-center text-white'>
        <img className='h-15 w-15 hover:cursor-pointer' src='https://res.cloudinary.com/jhdneqqr/image/upload/v1794753487/Ai-coach.png' alt='Logo'/>
        <div className='text-sm sm:text-lg md:text-xl pl-2 font-bold whitespace-nowrap'>Career & Resume Coach</div>
        <div className='ml-auto  hidden lg:flex items-center gap-4'>
            <button className='text-base xl:text-lg whitespace-nowrap hover:cursor-pointer'>Home</button>
            <button className='text-base xl:text-lg whitespace-nowrap hover:cursor-pointer'>Resume Help</button>
            <button className='text-base xl:text-lg whitespace-nowrap hover:cursor-pointer'>Career Guidance</button>
            <button className='text-base xl:text-lg whitespace-nowrap hover:cursor-pointer'>Interview Prep</button>
            <button className='text-base xl:text-lg whitespace-nowrap hover:cursor-pointer'>About</button>

            <button className='bg-blue-600 rounded-lg h-10 px-4 text-base whitespace-nowrap cursor-pointer'>GetStarted</button>
            <button className='ml-2 hover:cursor-pointer border rounded-full h-[40px] w-[40px] flex items-center justify-center' 
            onClick={()=>setDark(!dark)}>{dark?<Sun size={24}/>: <Moon size={24}/>}</button>
            
        </div>

        {/* Icons for mobile */}

        <div className="ml-auto flex lg:hidden items-center gap-4">
          <button onClick={() => setDark(!dark)}>{dark ? <Sun size={24} /> : <Moon size={24} />}</button>
          <button onClick={() => setMenu(!menu)}>{menu ? <X size={28} /> : <Menu size={28} />}</button>
        </div>

          {/* Mobile Dropdown */}

        </div> {menu && (<div className="lg:hidden flex flex-col gap-4 text-white py-5">
          <button onClick={() => setMenu(false)}>Home</button>
          <button onClick={() => setMenu(false)}>Resume Help</button>
          <button onClick={() => setMenu(false)}>Career Guidance</button>
          <button onClick={() => setMenu(false)}>Interview Prep</button>
          <button onClick={() => setMenu(false)}>About</button>

          <button className="bg-blue-600 rounded-lg py-2">
            GetStarted
          </button>

        </div>
      )}

    </div>
    
  )
}

export default Navbar
