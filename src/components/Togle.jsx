import { useEffect, useState } from "react";

export default function Togle(){
    const [isOn, setTogle] = useState(false)
    useEffect(() =>{
            document.body.className = isOn ? "light" : "dark";
    }, [isOn])
    const clickHandler = () =>{
setTogle(isOn => !isOn)
    }
    return(
        <button onClick={clickHandler}>Togle</button>
    )
}