import React, { createContext } from "react";
export const UserContext = createContext({
  userState: { value: null, setter: null },
});
