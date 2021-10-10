import React, { createContext } from "react";
export const MediaContext = createContext({
  content: {
    value: null,
    setter: null,
  },
  playlist: { value: null, setter: null },
});
