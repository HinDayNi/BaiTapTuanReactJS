
import { useState } from "react";

function MayTinh(){

<<<<<<< HEAD
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [operator, setOperator] = useState('+')
    const [results, setResults] = useState(0)

    const handleNum1 = (e) =>{
        setNum1(e.target.value)
    }
    console.log(num1)
    const handleNum2 = (e) =>{
        setNum2(e.target.value)
    }
    console.log(num2)
    const handleResults = () =>{
        if(operator === '+'){
            setResults(Number(num1) + Number(num2))
            console.log(results)
        }
        if(operator === '-'){
            setResults(Number(num1) - Number(num2))
            console.log(results)
        }
        if(operator === '*'){
            setResults(Number(num1) * Number(num2))
            console.log(results)
        }
        if(operator === '/'){
            setResults(Number(num1) / Number(num2))
            console.log(results)
        }
    }
    console.log(results)

    const handleOperator = (e) =>{
        setOperator(e.target.value)
    }
    console.log(operator)
    return (
        <div className="container">
            <input type="text" value={num1} onChange={handleNum1}/>
            <div className="operation">
                <input type="radio" name = "opera" onChange={handleOperator} value={'+'}defaultChecked/>+
                <input type="radio" name = "opera" onChange={handleOperator} value={"-"}/>-
                <input type="radio" name = "opera" onChange={handleOperator} value={"*"}/>*
                <input type="radio" name = "opera" onChange={handleOperator} value={"/"}/>/
            </div>
            <input type="text" value={num2} onChange={handleNum2}/>
            <br/>
            <button onClick={handleResults}>
                Caculation 
=======
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [operator, setOperator] = useState("+") // Giá trị ban đầu
    const [results, setResults] = useState("0") // Default = 0
   
    const handleNum1 = (e) => {
        setNum1(e.target.value)
    }
    const handleNum2 = (e) =>{
        setNum2(e.target.value)
    }
    const handleOperator = (e) =>{
        setOperator(e.target.value)
    }

    const handleCalculate = () =>{
        if(operator === "+"){
            setResults(Number(num1) + Number(num2))
        }
        if(operator === "-"){
            setResults(num1 - num2)
        }
        if(operator === "*"){
            setResults(num1 * num2)
        }
        if(operator === "/"){
            setResults(num1 / num2)
        }
    }

    return(
        <div id = "container">
            <input 
                type = "text" 
                value = {num1}
                onChange={handleNum1}
            />
            <br/>
            <div id = "ope">
                <input type = "radio" name = "operation" value = "+" onChange={handleOperator} defaultChecked/>+
                <input type = "radio" name = "operation" value = "-" onChange={handleOperator}/>-
                <input type = "radio" name = "operation" value = "*" onChange={handleOperator}/>*
                <input type = "radio" name = "operation" value = "/" onChange={handleOperator}/>/
            </div>
            <input 
                type = "text"
                value = {num2}
                onChange={handleNum2}
            />
            <br/>
            <button id = "cal" onClick={handleCalculate}>
                Calculator
>>>>>>> b4a59f9 (Upload folder Tuần 02)
            </button>
            <div>
                Results: {results}
            </div>
        </div>
    )
}
export default MayTinh;