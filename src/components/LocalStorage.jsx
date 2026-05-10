import { useState } from "react"

export default function LocalStorage(){
    const [value , setValue] = useState('')
    const [key , setKey] = useState(0)
    const handleChange = (event) =>{
        const newValue = event.target.value;
        const newKey = key + 1
        setValue(newValue)
        setKey(newKey)
        // console.log(key)
        localStorage.setItem(newKey ,newValue)
    }
    return(
        <>
        <input onChange={handleChange}/>
        <ul>
            {Object.entries(localStorage).map(([key, value]) =>{
                // console.log(item)
                // console.log(parseFloat(item[0]))
                return(
                    <>
                    <li key={parseFloat(key)}>
                        <h3>{value}</h3>
                        <p>{key}</p>
                    </li>
                    </>
                )
            })}
        </ul>
        </>
    )
}