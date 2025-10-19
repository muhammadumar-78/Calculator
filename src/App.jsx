// "use client"

// import { useState } from "react"
// import "./App.css"

// function App() {
//   const [display, setDisplay] = useState("0")
//   const [prev, setPrev] = useState(null)
//   const [operation, setOperation] = useState(null)
//   const [isDark, setIsDark] = useState(false)

//     function handleNumber(num){
//       setDisplay(display === "0" ? num.toString() : display + num)
//     }
  
//     function handleOperation(op){
//       setPrev(display)
//       setOperation(op)
//       setDisplay("0")
//     }


//   const handleEquals = () => {
//     if (!prev || !operation) return

//     const result = calculate(Number(prev), Number(display), operation)
//     setDisplay(result.toString())
//     setPrev(null)
//     setOperation(null)
//   }

//   const calculate = (a, b, op) => {
//     switch (op) {
//       case "+":
//         return a + b
//       case "-":
//         return a - b
//       case "*":
//         return a * b
//       case "/":
//         return a / b
//       default:
//         return b
//     }
//   }

//   const handleClear = () => {
//     setDisplay("0")
//     setPrev(null)
//     setOperation(null)
//   }

//   return (
//     <div className={`calculator ${isDark ? "dark" : "light"}`}>
//       <div className="header">
//         <h2>Calculator</h2>
//         <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
//           {isDark ? "☀️" : "🌙"}
//         </button>
//       </div>
      
//       <input type="text" value={display} readOnly />
//       <div className="buttons">
//         <button onClick={() => handleOperation("+")}>+</button>
//         <button onClick={() => handleOperation("-")}>-</button>
//         <button onClick={() => handleOperation("*")}>x</button>
//         <button onClick={() => handleOperation("/")}>/</button>
//         <button onClick={handleClear}>AC</button>
//         {[1,2,3,4,5,6,7,8,9,0].map((num) => (
//           <button key={num} onClick={() => handleNumber(num)}>
//             {num}
//           </button>
//         ))}

        

//         <button onClick={() => setDisplay(display + ".")}>.</button>
//         <button onClick={handleEquals} className="Equalbtn">=</button>
//       </div>
//     </div>
//   )
// }

// export default App

import { useState } from "react"
import "./App.css"

function App() {
  const [display, setDisplay] = useState("0")
  const [prev, setPrev] = useState(null)
  const [operation, setOperation] = useState(null)
  const [isDark, setIsDark] = useState(false)

  const handleNumber = (num) => {
    setDisplay(display === "0" ? num.toString() : display + num)
  }

  const handleOperation = (op) => {
    setPrev(display)
    setOperation(op)
    setDisplay("0")
  }

  const handleEquals = () => {
    if (!prev || !operation) return

    const result = calculate(Number(prev), Number(display), operation)
    setDisplay(result.toString())
    setPrev(null)
    setOperation(null)
  }

 const calculate = (a, b, op) => {
  switch (op) {
    case "+":
      return a + b
    case "-":
      return a - b
    case "×":  // <CHANGE> Changed from "x" to "×" to match the button
      return a * b
    case "÷":
      return a / b
    default:
      return b
  }
}

  const handleClear = () => {
    setDisplay("0")
    setPrev(null)
    setOperation(null)
  }

  return (
    <div className={`calculator ${isDark ? "dark" : "light"}`}>
      <div className="header">
        <h2>Calculator</h2>
        <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>

      <div className="display-container">
        <div className="display-content">
          <div className="secondary-display">{prev !== null && operation ? `${prev} ${operation}` : ""}</div>
          <div className="primary-display">{display}</div>
        </div>
      </div>

     <div className="buttons">
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("×")}>×</button>
        <button onClick={() => handleOperation("÷")}>÷</button>
        <button onClick={handleClear}>AC</button>
        {[1,2,3,4,5,6,7,8,9,0].map((num) => (
          <button key={num} onClick={() => handleNumber(num)}>
            {num}
          </button>
        ))}

        

        <button onClick={() => setDisplay(display + ".")}>.</button>
        <button onClick={handleEquals} className="Equalbtn">=</button>
      </div>
    </div>
  )
}

export default App
