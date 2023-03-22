import React from "react";
import FormContextProvider from "./src/contexts/FormContext";

export const wrapRootElement = ({ element }, { url }) => {
  return <FormContextProvider url={url}>{element}</FormContextProvider>;
};
