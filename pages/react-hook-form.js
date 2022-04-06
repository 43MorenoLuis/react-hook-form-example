import React, { useEffect } from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import FieldArray from "../components/FieldArray";

export default function ReactHookForm() {
    const defaultValues = {
        test: [
          {
            value: "0",
            nestedArray: [{ value: "0" }]
          },
          {
            value: "0",
            nestedArray: [{ value: "1" }]
          }
        ]
      };

    const { control, register, handleSubmit, getValues, errors, setValue, watch } = useForm({
        defaultValues
    });

    const onSubmit = (data) => console.log("data", data);
    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Array of Array Fields</h1>
      <p>
        The following example demonstrate the ability of building nested array
        fields.
      </p>

      <FieldArray
        {...{
          control,
          watch,
          register,
          defaultValues,
          getValues,
          setValue,
          errors
        }}
      />

      <input name="total" {...register('total')} readOnly />

      <input type="submit" />
    </form>
  );
}
