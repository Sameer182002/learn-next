'use client'
import Child from "./child";
import { useState } from "react";

export default function Parent(){
  const [incrementTwo, setIncrementTwo] = useState(0);

    function incrementByTwo() {
        setIncrementTwo(1);
        return;
      }
    return(
        <div>
            <button onClick={incrementByTwo}>Increment Two</button>
            <Child value={incrementTwo}/>
        </div>
    )
}