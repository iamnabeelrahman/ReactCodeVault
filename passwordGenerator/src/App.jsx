import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [passlength, setPassLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnop";
    let number = "123456789"
    let specialChar = "!@#$%&*?/"

    if (isNumber) {
       str += number      
    }
    if (isChar) {
       str += specialChar      
    }

    for (let i = 0; i < passlength; i++) {
      let char  = Math.floor(Math.random() * str.length  ) 
      pass += str[char]
    }
    setPassword(pass)
  }, [
    passlength,
    isNumber,
    isChar,
  ]);

  useEffect(()=>{
    generatePassword()
  }, [passlength, isChar, isNumber, generatePassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-4xl text-centre my-3 text-white">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4" >
          <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
           />
           <button className="bg-blue-600 px-3 py-2.5 outline-none text-white">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" 
            min={8}  
            max={30}
            value={passlength}
            className="cursor-pointer"
            onChange={(e)=>{
              {setPassLength(e.target.value)}
            }}
          />
          <label >Length: {passlength}</label>
          </div>

          <div className="flex items-center gap-x-1" >
            <input type="checkbox"
             id="numberInput"
             defaultChecked ={isNumber}
             onChange={()=>{
              setIsNumber((prev) => !prev)
             }} />
             <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1" >
            <input type="checkbox"
             id="characterInput"
             defaultChecked ={isChar}
             onChange={()=>{
              setIsChar((prev) => !prev)
             }} />
             <label htmlFor="characterInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
