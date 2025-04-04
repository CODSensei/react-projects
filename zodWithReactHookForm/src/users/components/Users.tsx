import React, { useState } from "react";

function Users() {
  const [input, setInput] = useState("");

  return (
    <input
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
      }}
      name="UserName"
      onBlur={}
      ref={}
      disabled
      required
      maxLength={}
    />
  );
}

export default Users;
