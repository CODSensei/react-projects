import React from "react";
import { Controller } from "react-hook-form";

function RHFAutoComplete() {
  return (
    <Controller
    control={control
        name={name}
    }
      render={(params) => <Autocomplete/>}
    />
  );
}

export default RHFAutoComplete;
