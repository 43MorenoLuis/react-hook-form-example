import React, { useState, useEffect } from 'react'
import { useFieldArray } from 'react-hook-form';
import Calc from './calc';
import NestedFieldArray from './nestedFieldArray';

export default function FieldArray({ control, register, setValue }) {
    const [renderCount, setRenderCount] = useState(0);
    const { fields, append, remove } = useFieldArray({
        control,
        name: "test"
      });

    useEffect(() => {
        setRenderCount(renderCount+1);
    }, [fields])
    
  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                type="number"
                name={`test[${index}].value`}
                {...register(`test[${index}].value`)}
                defaultValue={item.value}
              />

              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
              <NestedFieldArray nestIndex={index} {...{ control, register }} />
            </li>
          );
        })}
      </ul>

      <button onClick={() => append({ value: "0" })}>Append Parent</button>

      <hr />

      <Calc control={control} setValue={setValue} />

      <span className="counter">Render Count: {renderCount}</span>
    </>
  )
}
