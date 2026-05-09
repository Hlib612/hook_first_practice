import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const iterval = setInterval(() => {
        setTime(time => {
            if(time === 10){
            clearInterval(iterval)
            alert('your time already a 10, STOP!')
            return 
        } 
        return time + 1
        })
  }, 1000);
  return () => clearInterval(iterval)
  }, []);
  return (
    <>
      <h2>{time}</h2>
    </>
  );
}
