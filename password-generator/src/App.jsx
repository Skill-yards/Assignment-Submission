import { useState,useCallback,useEffect} from 'react'


function App() {
  const [password,setpassword ] = useState("")
  const [length,setlength]=useState(8)
  const[number,setnumber]=useState(false)
  const[char,setchar]=useState(false)

  const passwordGen=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number)str+="1234567890"
    if(char)str+="`~@#$%^&*()_-+={}[]?><.,/|"
    for(let i=0;i<length;i++){
      let randomchar=Math.floor(Math.random()*str.length)
      pass+=str[randomchar]
    }
    setpassword(pass)





  },[length,number,char,setpassword])
   useEffect(()=>{
    passwordGen()
  },[length,char,number,passwordGen])
 

  return <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <div className="bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">🔑 Password Generator</h1>

        
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 bg-gray-700 text-white p-2 rounded-l-md outline-none"
          />
          <button
            onClick={passwordGen}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition"
          >
            Generate
          </button>
        </div>

      
        <div className="mb-4">
          <label className="block mb-2">Length: {length}</label>
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={(e) => setlength(parseInt(e.target.value))}
            className="w-full cursor-pointer accent-blue-500"
          />
        </div>

        
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={number}
              onChange={() => setnumber((prev) => !prev)}
              className="accent-blue-500"
            />
            <span>Include Numbers</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={char}
              onChange={() => setchar((prev) => !prev)}
              className="accent-blue-500"
            />
            <span>Include Special Characters</span>
          </label>
        </div>
      </div>
    </div>
  ;
}

export default App
