import { useCallback, useEffect,  useRef,  useState } from 'react'
import './App.css'

function App() {
 const [length, setlength] = useState(8)
 const [number, setnumber] = useState(false)
 const [charecter, setcharecter] = useState(false)
 const [password,setpassword]=useState("")
 const [copi,setcopi]=useState("copy")
 const inp=useRef(null)

 useEffect(()=>{
  setpassword("")
  setcopi("copy")
 },[length,number,charecter])
 let i
let str="ABCDEFGHIJKLMNOPQRSHUVWXYZabcdefghijklmnopqrstuvwxyz"
 const generatePassword = useCallback(()=>{
   let pass=""
   setcopi("copy")
  if(number){
    str=str+"0123456789"
  }
  if(charecter){
    str=str+"@#$%&*/~!?><^-=+"
  }
  for(i=0;i<length;i++){
  const charIndex=Math.floor(Math.random()*str.length)
  pass=pass+str[charIndex]
  }
  setpassword(pass)
 },[length,number,charecter])
 const copyPassword=()=>{
  let ispassword=inp.current.value.trim()
  if(!ispassword) return
  window.navigator.clipboard.writeText(password)
  setcopi("copied")
 }
  return (
    <>
      <div className='bg-gray-800 flex justify-center items-center h-screen '>
        <div
          className='bg-blue-100 h-screen w-screen sm:h-44 sm:w-3/4  sm:rounded-md sm:flex sm:flex-col sm:gap-5 '
        >

          <h1 className='text-2xl text-purple-700 text-center mt-10 sm:mt-1'>Password Generator</h1>



          <div className=' mt-4 sm:flex sm:justify-center '>
             <div className='flex justify-center sm:h-8 sm:w-2/3 ' > <input ref={inp} type="text" value={password} placeholder='password will be generate here' className=' h-8 w-2/3 rounded-md sm:w-full sm:h-full pl-2'/></div>
              <div className='flex justify-center mt-4 sm:mt-0'>
                <button  className='m-1 focus:outline-none text-white bg-blue-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm p-1 p dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'onClick={copyPassword}>{copi}</button>
                <button className='mt-1 mb-1 focus:outline-none text-white bg-red-700 hover:bg-purple-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm p-1 p dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 'onClick={generatePassword}
                >generate</button>
              </div>
          </div>


          <div className='sm:flex sm:justify-center '>
            <div  className='flex justify-center mt-4 sm:mt-0'><input min={8} max={50} type="range" className='ml-4 mr-1' onChange={(e)=>setlength(e.target.value)}/>
            <label className='mr-4' htmlFor="length">Length:{length}</label></div>
            <div  className='flex justify-center mt-4 sm:mt-0'><input type="checkbox" onChange={(e)=>setnumber(!number)} />
            <label htmlFor="With-Number" className='mr-4' onCh> Number</label></div>
            <div  className='flex justify-center mt-4 sm:mt-0'><input type="checkbox" onChange={(e)=>setcharecter(!charecter)}/>
            <label htmlFor="special-charecter">Special Charecter</label></div>
          </div>


        </div>
      </div>
    </>
  )
}

export default App
