import React from 'react'
import { useFieldArray } from 'react-hook-form';

export default function NestedFieldArray({ nestIndex, control, register }) {
    const { fields, append } = useFieldArray({
        control,
        name: `test[${nestIndex}].nestedArray`
      });
  return (
    <div>
      {fields.map((item, k) => {
        return (
          <input
            key={item.id}
            name={`test[${nestIndex}].nestedArray[${k}].value`}
            {...register(`test[${nestIndex}].nestedArray[${k}].value`, { required: true })}
            type="number"
            defaultValue={item.value}
            style={{ marginLeft: 20, marginRight: 25 }}
          />
        );
      })}

      <button onClick={() => append({ value: "0" })}>Append Child</button>
    </div>
  )
}
