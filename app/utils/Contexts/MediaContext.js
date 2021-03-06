import React, { createContext } from "react";
export const MediaContext = createContext({
  content: {
    value: null,
    setter: null,
  },
  playlist: { value: null, setter: null },
  playlistArray: { value: [], setter: null },
  playlistIsFetching: { value: null, setter: null },
});
