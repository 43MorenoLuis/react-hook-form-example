import React from 'react'
import { useWatch } from 'react-hook-form';

export default function Calc({ control, setValue }) {
    const results = useWatch({ control, name: "test" });
    const output = totalCal(results);
  
    console.log(results);
  
    setValue("total", output);
  
    return (
        <p>{output}</p>
    )
}


function totalCal(results) {
    let totalValue = 0;
  
    for (const key in results) {
      for (const value in results[key]) {
        if (typeof results[key][value] === "string") {
          const output = parseInt(results[key][value], 10);
          totalValue = totalValue + (Number.isNaN(output) ? 0 : output);
        } else {
          totalValue = totalValue + totalCal(results[key][value], totalValue);
        }
      }
    }
  
    return totalValue;
  }
