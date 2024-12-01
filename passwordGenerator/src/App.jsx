import { useState, useCallback, useEffect } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa"; 
import "./App.css";

function App() {
  const [passlength, setPassLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnop";
    let number = "123456789";
    let specialChar = "!@#$%&*?/";

    if (isNumber) str += number;
    if (isChar) str += specialChar;

    for (let i = 0; i < passlength; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str[char];
    }
    setPassword(pass);
  }, [passlength, isNumber, isChar]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard!");
    });
  };

  useEffect(() => {
    generatePassword();
  }, [passlength, isChar, isNumber, generatePassword]);

  return (
    <div className="w-full max-w-lg mx-auto shadow-lg rounded-lg px-6 py-5 my-10 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <h1 className="text-3xl text-center my-4 font-bold text-purple-400">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-6 border-2 border-purple-500">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-3 px-4 text-lg bg-gray-800 text-white placeholder-gray-400"
          placeholder="Generated Password"
          readOnly
        />
        <button
          className="bg-purple-600 hover:bg-purple-700 px-4 py-3 outline-none text-white font-medium transition duration-200"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-lg">Password Length:</label>
          <input
            type="range"
            min={6}
            max={30}
            value={passlength}
            className="cursor-pointer accent-purple-500"
            onChange={(e) => setPassLength(e.target.value)}
          />
          <span className="text-lg font-medium">{passlength}</span>
        </div>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isNumber}
              className="accent-purple-500 cursor-pointer"
              onChange={() => setIsNumber((prev) => !prev)}
            />
            <span>Include Numbers</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isChar}
              className="accent-purple-500 cursor-pointer"
              onChange={() => setIsChar((prev) => !prev)}
            />
            <span>Include Special Characters</span>
          </label>
        </div>
      </div>
      
      <footer className="fixed bottom-0 left-0 w-full bg-gray-800 py-4 text-center text-white">
        <p className="text-lg font-medium">Project by Nabeel Rahman</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://www.linkedin.com/in/iamnabeelrahman/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-500 hover:text-blue-700 transition duration-300"
          >
            <FaLinkedin className="text-2xl" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://x.com/iamnabeelrahman"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-400 hover:text-blue-600 transition duration-300"
          >
            <FaTwitter className="text-2xl" />
            <span>X</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
